export interface IProduct {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  stock: number
}

export interface ICartItem{
  product: IProduct
  quantity: number
}

export interface IOrder{
  id: number
  customerName: string
  customerEmail: string
  total: number
  status: 'pending' | 'completed' | 'cancelled'
  createdAt: string
}

export interface IOrderItem {
  id: number
  orderId: number
  productId: number
  quantity: number
  price: number
  product?: IProduct
}

