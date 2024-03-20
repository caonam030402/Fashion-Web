import { SuccessResponse } from "@/types/utils.type";
import { http } from "@/utils/http";

const URL = "products";

export const productApi = {
  getProducts(params: ProductListConfig, collection: string) {
    return http.get<SuccessResponse<Product[]>>(`${URL}/${collection}`, {
      params,
    });
  },

  getCategories(collection: string) {
    return http.get<SuccessResponse<Category[]>>(
      `${URL}/category/${collection}`
    );
  },

  getColorsMaterialsSizes() {
    return http.get<SuccessResponse<ColorSizeMaterial>>(
      `${URL}/color-size-material`
    );
  },
};
