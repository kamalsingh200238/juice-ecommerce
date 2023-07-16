"use client";

import { useCartStore } from "@/lib/store";
import calculateTotalPrice from "@/lib/total-price";
import { Product } from "@/types";

export default function Temp({ products }: { products: Product[] }) {
  const cart = useCartStore((state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const totalPrice = calculateTotalPrice();
  console.log({ cart });
  return (
    <div>
      {products.map((product) => {
        const x = cart.map(item => {
          if(item.product.name === product.name) {
            return item
          }
        })[0]
        return (
          <div key={product._id} className="border border-red-500">
            <p className="">product: {product.name}</p>
            <p>price: {product.price}</p>
            <div className="flex gap-5">
              <button onClick={() => increaseQuantity(product)}>Increse</button>
              <p>{x ? x.quantity : "0"}</p>
              <button onClick={() => decreaseQuantity(product)}>Decrese</button>
            </div>
          </div>
        );
      })}
      <p>Total Price: {totalPrice}</p>
      <pre>{JSON.stringify(cart, undefined, 2)}</pre>
    </div>
  );
}
