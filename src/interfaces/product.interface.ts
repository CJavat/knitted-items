export interface Product {
  id: string;
  title: string;
  description: string;
  images: string[];
  color: string[];
  slug: string;
  price: number;
  inStock: number;
  tags: string[];
}

export interface CartProduct {
  id: string;
  title: string;
  slug: string;
  price: number;
  quantity: number;
  image: string;
}

export interface ProductImage {
  id: number;
  url: string;
  productId: string;
}
