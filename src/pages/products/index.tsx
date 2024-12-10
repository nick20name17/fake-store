import { useEffect, useState } from 'react'

import { CategoryFilter } from './components/filters/category'
import { SortingFilter } from './components/filters/sorting'
import { AddProductModal } from './components/modals/add-product'
import { ProductList } from './components/products-list'
import type { Product } from '@/api/products/products.types'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

const ProductsPage = () => {
    // const [searchParams] = useSearchParams()
    // const [, setSorting] = useState<SortingState>([])

    const [products, setUsers] = useState<Product[]>([])

    // const { data: products, isLoading } = useGetProductsQuery({
    //     sorting: (searchParams.get('sorting') as Sorting) || 'desc'
    // })

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((data) => setUsers(data))
    }, [])

    return (
        <section className='mt-10'>
            <div className='flex items-center justify-between gap-8 max-sm:flex-col'>
                <div className='flex items-center gap-x-4'>
                    <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        Products
                    </h1>
                    {false ? (
                        <Skeleton className='h-[22px] w-9 rounded-full' />
                    ) : (
                        <Badge>{products?.length}</Badge>
                    )}
                </div>
                <AddProductModal />
            </div>

            <div className='mt-4 flex items-center justify-between gap-x-4'>
                <CategoryFilter />
                <SortingFilter />
            </div>

            <ProductList products={products || []} />
        </section>
    )
}

export default ProductsPage
