interface Product {
  id: string;
  name: string;
  quantity: string;
  price: number;
  price_before_discount: number;
  images: string[];
  sold: number;
  description: string;
  material: string;
  category: Category;
  color: Color;

  productGroup: {
    id: number;
    name: string;
  };

  colorVariations: ColorVariation[];
  sizes: Size[];
  createdAt: string;
  updatedAt: string;
}

interface Category {
  id: number;
  name: string;
}

interface Color {
  id: number;
  name: string;
  code: string;
}

interface ColorVariation {
  id: number;
  name: string;
  code: string;
}

interface Size {
  id: number;
  size: string;
}
