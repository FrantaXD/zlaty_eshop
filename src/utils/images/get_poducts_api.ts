export interface ArrayProject{
    page: string
    totalPages: string
    totalProducts: string
    products: Products[]
  }
  
  export interface Products {
    id: string
    name: string
    description: string
    price: string
    category_id: string
    stock: string
    specification: string
    material: string
    weight: string
    mediaUrls: string[]
  }
  