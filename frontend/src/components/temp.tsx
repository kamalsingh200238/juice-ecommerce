"use client";

import { useCartStore } from "@/lib/store";
import calculateTotalPrice from "@/lib/total-price";
import { Product } from "@/types";

export default function Temp({ products }: { products: Product[] }) {
  const cart = useCartStore((state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const totalPrice = calculateTotalPrice()
  console.log({ cart });
  return (
    <div>
      {products.map((product) => (
        <div key={product._id} className="p-6 flex flex-col">
          <p>product: {product.name}</p>
          <p>price: {product.price}</p>
          <div>
            <button onClick={() => increaseQuantity(product)}>Increse</button>
          </div>
          <div>
            <button onClick={() => decreaseQuantity(product)}>Decrese</button>
          </div>
        </div>
      ))}
      <p>Total Price: {totalPrice}</p>
      <pre>{JSON.stringify(cart, undefined, 2)}</pre>
    </div>
  );
}
