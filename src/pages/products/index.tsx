import type { SortingState } from '@tanstack/react-table'
import { useState } from 'react'

import { AddProductModal } from './components/modals/add-product'
import { ProductList } from './components/products-list'
import { useGetProductsQuery } from '@/api/products/products'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

export const ProductsPage = () => {
    const [sorting, setSorting] = useState<SortingState>([])

    const currentSortingDirection = sorting[0]?.desc ? 'desc' : 'asc'

    const { data: products, isLoading } = useGetProductsQuery({
        limit: 30,
        sorting: currentSortingDirection
    })

    return (
        <section className='mt-10'>
            <div className='flex items-center justify-between gap-x-8'>
                <div className='flex items-center gap-x-4'>
                    <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        Products
                    </h1>
                    {isLoading ? (
                        <Skeleton className='h-[22px] w-9 rounded-full' />
                    ) : (
                        <Badge>{products?.length}</Badge>
                    )}
                </div>
                <AddProductModal />
            </div>

            <ProductList products={products || []} />
        </section>
    )
}
