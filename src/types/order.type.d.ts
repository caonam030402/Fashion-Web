interface OrderDetail {
  id: string;
  price: number;
  buy_count: number;
  product: Product;
  size: Size;
  createdAt: string;
  updatedAt: string;
}

interface Order {
  id: string;
  userId: string;
  orderDetails: OrderDetail[];
}
