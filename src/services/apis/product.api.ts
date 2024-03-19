import { SuccessResponse } from "@/types/utils.type";
import { http } from "@/utils/http";

const URL = "products";

export const productApi = {
  getProducts(params: ProductListConfig) {
    return http.get<SuccessResponse<Product[]>>(URL, { params });
  },

  getColorsMaterialsSizes() {
    return http.get<SuccessResponse<ColorSizeMaterial>>(
      `${URL}/color-size-material`
    );
  },
};
