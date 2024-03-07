"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface Props {
  quanlity?: number;
  max?: number;
}

export default function ControlQuantity({ max, quanlity }: Props) {
  const [value, setValue] = useState(quanlity || 1);

  const handleOnchangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    let _value = Number(event.target.value);
    if (max !== undefined && Number(_value) > max) {
      _value = Number(max);
    }
    if (Number(_value) < 1 && value === undefined) {
      _value = 1;
    }
    setValue(Number(_value));
  };

  const handleIncrease = () => {
    setValue((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setValue((prev) => prev - 1);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    let _value = Number(event.target.value);
  };

  const isMaxValue = max !== undefined && value >= max ? true : false;
  const isMinValue = value < 1 ? true : false;
  console.log(isMaxValue);
  return (
    <div className="flex max-w-[90px] border h-7">
      <button
        onClick={handleDecrease}
        disabled={isMinValue}
        className={cn("flex-1", isMinValue && "cursor-not-allowed opacity-30")}
      >
        -
      </button>
      <input
        onBlur={handleBlur}
        value={value}
        pattern="/^[0-9]+$/"
        onChange={(value) => handleOnchangeValue(value)}
        className="w-9 border-r border-l text-center outline-none"
        type="text"
      />
      <button
        disabled={isMaxValue}
        onClick={handleIncrease}
        className={cn("flex-1", isMaxValue && "cursor-not-allowed opacity-30")}
      >
        +
      </button>
    </div>
  );
}
