"use client";

import { orderApi } from "@/apis/order.api";
import { StatusOrder } from "@/app/enums/status-order";
import { cn } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

interface Props {
  buy_count?: number;
  max?: number;
  id: string;
  handleUpdateQuantity?: (value: number) => void;
}

export default function ControlQuantity({
  max,
  buy_count,
  handleUpdateQuantity,
}: Props) {
  const [value, setValue] = useState(buy_count || 1);

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
    let _value = value + 1;
    value + 1;
    if (max !== undefined && _value > max) {
      _value = max;
    }

    handleUpdateQuantity && handleUpdateQuantity(_value);
    setValue(_value);
  };
  const handleDecrease = () => {
    let _value = value - 1;
    if (_value < 1) {
      _value = 1;
    }
    handleUpdateQuantity && handleUpdateQuantity(_value);
    setValue(_value);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    let _value = Number(event.target.value);
    handleUpdateQuantity && handleUpdateQuantity(_value);
  };

  const isMaxValue = max !== undefined && value >= max ? true : false;
  const isMinValue = value < 1 ? true : false;
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
