export interface product_curt_post_Interface {
  productId: number
  quantity: number
}

export interface responde_cart {
  message: string
  cart: {
    productId: number
    quantity: number
  }[]
}

export interface ProductResponse {
  id: number
  name: string
  description: string
  price: number
  category_id: number
  stock: number
  specification: string
  material: string
  weight: number
  mediaUrls: string[]
}

export interface ProductsResponse {
  page: number
  totalPages: number
  totalProducts: number
  products: ProductResponse[]
}
