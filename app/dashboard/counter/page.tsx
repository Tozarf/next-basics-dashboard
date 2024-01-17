import { CartCounter } from "@/app/shopping-cart";

export const metadata = {
  title: "Cart",
  description: "Shopping Cart",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-ful h-full">
      <span>Cart Products</span>
      <CartCounter />
    </div>
  );
}
