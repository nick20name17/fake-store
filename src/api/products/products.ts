import { api } from '..'

import type { Product, ProductAddData, ProductQueryParams } from './products.types'
import { baseUrl } from '@/config/api'
import { getQueryParamString } from '@/utils/get-query-param-string'

const productsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], Partial<ProductQueryParams>>({
            query: (queryParams) => {
                const queryParamsString = getQueryParamString(queryParams)
                return `${baseUrl}/products?${queryParamsString}`
            },
            providesTags: ['Products']
        }),
        addProduct: builder.mutation<Product, ProductAddData>({
            query: (data) => {
                return {
                    url: `${baseUrl}/products`,
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: ['Products']
        }),
        getAllCategories: builder.query<string[], void>({
            query: () => `${baseUrl}/products/categories`,
            providesTags: ['Products']
        }),

        deleteProduct: builder.mutation<Product, number>({
            query: (id) => {
                return {
                    url: `${baseUrl}/products/${id}`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: ['Products']
        })
    })
})

export const {
    useGetProductsQuery,
    useGetAllCategoriesQuery,
    useAddProductMutation,
    useDeleteProductMutation
} = productsApi
