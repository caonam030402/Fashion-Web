import { http } from "@/lib/http";
import { StatusOrder } from "@/app/enums/status-order";

const URL = "orders";

export interface OrderAddToCart {
  productId?: string;
  buy_count?: number;
  sizeId?: number;
  price?: number;
}

export const orderApi = {
  async getOrderByStatus(statusId: StatusOrder) {
    return http.get<SuccessResponse<Order>>(`${URL}/status/${statusId}`);
  },

  async addToCart(body: OrderAddToCart) {
    return http.post(`${URL}/add-to-cart`, body);
  },

  async updateOrder(body: {
    statusId?: number;
    buy_count?: number;
    idOrderDetail: string;
  }) {
    return http.put(`${URL}/${body.idOrderDetail}`, body);
  },

  async deleteOrder(param: { idOrderDetail: string }) {
    return http.delete(`${URL}/${param.idOrderDetail}`);
  },
};
