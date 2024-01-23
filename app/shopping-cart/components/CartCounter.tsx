"use client";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { addOne, reduceOne } from "@/app/store/counter/counterSlice";
import React, { useState } from "react";

interface Props {
  value: number;
}
export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex flex-row">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(reduceOne())}
        >
          -1
        </button>
      </div>
    </>
  );
};
