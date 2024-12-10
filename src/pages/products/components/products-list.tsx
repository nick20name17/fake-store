import { Loader2, ShoppingBasket } from 'lucide-react'
import { toast } from 'sonner'

import { useDeleteProductMutation } from '@/api/products/products'
import type { Product } from '@/api/products/products.types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useSidebar } from '@/components/ui/sidebar'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { trunc } from '@/utils/text'

interface ProductListProps {
    products: Product[]
}

export const ProductList = ({ products }: ProductListProps) => {
    const { state } = useSidebar()

    return (
        <ScrollArea className='mt-10 h-[calc(100vh-220px)]'>
            <ul
                className={cn(
                    'grid w-full gap-4 rounded-md border p-4',
                    state === 'collapsed'
                        ? 'grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 2xl:grid-cols-4'
                        : 'grid-cols-2 max-lg:grid-cols-1 2xl:grid-cols-3'
                )}>
                {products.map((product) => (
                    <li key={product.id}>
                        <ProductCard product={product} />
                    </li>
                ))}
            </ul>
        </ScrollArea>
    )
}

const ProductCard = ({ product }: { product: Product }) => {
    const [deleteProduct, { isLoading }] = useDeleteProductMutation()

    const handleDeleteProduct = (product: Product) => {
        try {
            deleteProduct(product.id)
                .unwrap()
                .then(() => {
                    toast.success(`Product ${product.title} deleted successfully`)
                })
        } catch (err: any) {
            toast.error(err.data.message ? err.data.message : 'Something went wrong')
        }
    }
    return (
        <Card className='flex h-full flex-col justify-between'>
            <CardHeader>
                <CardTitle className='scroll-m-20 text-2xl font-semibold tracking-tight'>
                    {product.title}
                </CardTitle>
                <CardDescription className='leading-7 [&:not(:first-child)]:mt-6'>
                    {product.description.length > 100 ? (
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p> {trunc(product.description, 100)}</p>
                            </TooltipTrigger>
                            <TooltipContent className='max-w-96'>
                                <p> {product.description}</p>
                            </TooltipContent>
                        </Tooltip>
                    ) : (
                        product.description
                    )}
                </CardDescription>
            </CardHeader>
            <CardContent className='flex items-center justify-between gap-x-4'>
                <Badge variant='outline'>{product.category}</Badge>
                <span className='font-bold'>$ {product.price}</span>
            </CardContent>
            <CardFooter className='flex items-center gap-x-4'>
                <Button
                    className='w-28'
                    onClick={() => handleDeleteProduct(product)}
                    size='sm'
                    variant='destructive'>
                    {isLoading ? <Loader2 className='size-4 animate-spin' /> : 'Delete'}
                </Button>
                <Button size='sm'>
                    <ShoppingBasket />
                    Add to cart
                </Button>
            </CardFooter>
        </Card>
    )
}
