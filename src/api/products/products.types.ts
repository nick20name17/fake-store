export interface Product {
    id: number
    title: string
    price: number
    category: string
    description: string
    image: string
}

export interface ProductAddData extends Omit<Product, '__v' | 'id'> {}
export type Sorting = 'desc' | 'asc'
export interface ProductQueryParams {
    offset: number
    limit: number
    search: string
    category: string
    sorting: Sorting
}
