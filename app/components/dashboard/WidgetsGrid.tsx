"use client";
import { initCounterState, useAppDispatch, useAppSelector } from "@/app/store";
import { SimpleWidget } from "..";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect } from "react";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initCounterState(count));
    return () => {};
  }, []);
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={count.toString()}
        subtitle="Products in cart"
        label="Counter"
        href="/dashboard/counter"
        icon={<AiOutlineShoppingCart className="text-blue-600" size={50} />}
      />
    </div>
  );
};
