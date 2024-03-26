import { http } from "@/lib/http";
import { StatusOrder } from "@/app/enums/status-order";

const URL = "orders";

export interface OrderAddToCart {
  productId?: string;
  buy_count: number;
  sizeId: number;
  price: number;
}

export const orderApi = {
  async getOrderByStatus(statusId: StatusOrder) {
    console.log(`${URL}/status/${statusId}`);
    return http.get<SuccessResponse<Order>>(`${URL}/status/${statusId}`);
  },

  async addToCart(body: OrderAddToCart) {
    console.log(body);
    return http.post(`${URL}/add-to-cart`, body);
  },
};
