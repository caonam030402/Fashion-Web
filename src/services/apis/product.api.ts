import { SuccessResponse } from "@/types/utils.type";
import { http } from "@/utils/http";

const URL = "products";

export const productApi = {
  getProducts(params: ProductListConfig) {
    return http.get<SuccessResponse<Product[]>>(URL, { params });
  },

  getCategories() {
    return http.get<SuccessResponse<Product[]>>(`${URL}/category`);
  },
};
