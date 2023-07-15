import { useCartStore } from "@/lib/store";

export default function calculateTotalPrice() {
  const cart = useCartStore(state => state.cart)
  const totalPrice = cart.reduce((total, item)=>{ 
    total = total + item.quantity * item.product.price
    return total
  }, 0)
  console.log({totalPrice})
  return totalPrice
}
