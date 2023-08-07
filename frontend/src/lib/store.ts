import { CartState, CartStateSetType, ComputedCartState } from '@/types';
import { create } from 'zustand';
import { computed } from 'zustand-middleware-computed-state';

export const useCartStore = create<CartState & ComputedCartState>()(
  computed<CartState, ComputedCartState>(
    (set: CartStateSetType) => ({
      cart: [],
      increaseQuantity: (product) =>
        set((state) => {
          // check if product already exist in the cart
          const existingState = state.cart.find((item) => item.product.name === product.name);

          if (existingState) {
            // if product already exist then
            // update the quantity
            const updatedCart = state.cart.map((item) =>
              item.product.name === product.name
                ? { product: item.product, quantity: item.quantity + 1 }
                : item,
            );
            return { cart: updatedCart };
          } else {
            // if product doesn't exist then
            // add the product to cart
            return { cart: [...state.cart, { product, quantity: 1 }] };
          }
        }),
      decreaseQuantity: (product) =>
        set((state) => {
          // check if product already exist in the cart
          const existingState = state.cart.find((item) => item.product.name === product.name);

          if (existingState && existingState.quantity > 1) {
            // if product already exist and quantity is greater than 1 then
            // update the quantity
            const updatedCart = state.cart.map((item) =>
              item.product.name === product.name
                ? { product: item.product, quantity: item.quantity - 1 }
                : item,
            );
            return { cart: updatedCart };
          } else if (existingState?.quantity === 1) {
            // if product exist and quantity is 1
            // then remove the product for cart
            const updatedCart = state.cart.filter((item) => item.product.name !== product.name);
            return { cart: updatedCart };
          } else {
            // if product doesn't exist then do nothing
            return state;
          }
        }),
    }),
    (state: CartState) => {
      return {
        totalCartPrice: state.cart.reduce((total, item) => {
          return (total = total + item.quantity * item.product.price);
        }, 0),
        totalCartQuantity: state.cart.reduce((total, item) => {
          return (total = total + item.quantity);
        }, 0),
      };
    },
  ),
);
