export type SanityImage = {
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  };
  _type: string;
  caption?: string;
};

export type Product = {
  _id: string;
  images: SanityImage[];
  price: number;
  _createdAt: string;
  _rev: string;
  _type: string;
  name: string;
  description: string;
  _updatedAt: string;
  slug: {
    _type: string;
    current: string;
  };
};

export type CartItem = {
  product: Product;
  quantity: number;
}

export type CartState = {
  cart: CartItem[];
  increaseQuantity: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
}
