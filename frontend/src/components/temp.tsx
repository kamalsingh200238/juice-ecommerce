'use client';

import { useCartStore } from '@/lib/store';
import { Product } from '@/types';

export default function Temp({ products }: { products: Product[] }) {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.totalCartPrice);
  const totalQuantity = useCartStore((state) => state.totalCartQuantity);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  console.log({ cart });
  return (
    <div>
      {products.map((product) => {
        const inCart = cart.find((cartItem) => cartItem.product._id === product._id);
        const quantity = inCart ? inCart.quantity : 0;
        return (
          <div key={product._id}>
            <p>product: {product.name}</p>
            <p>price: {product.price}</p>
            <div>
              <button onClick={() => increaseQuantity(product)}>Increse</button>
              <p>{quantity}</p>
              <button onClick={() => decreaseQuantity(product)}>Decrese</button>
            </div>
          </div>
        );
      })}
      <p>Total Price: {totalPrice}</p>
      <p>Total Quantity: {totalQuantity}</p>
    </div>
  );
}
