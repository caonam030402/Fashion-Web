import { caculateDiscount } from "@/utils/calculate_discount";
import Image from "next/image";
import React from "react";

interface Props {
  product: Product;
}

export default function ProductItem({ product }: Props) {
  // console.log(product.colorVariations[0].code);
  return (
    <div className="text-sm">
      <div className="w-full relative pb-[100%]">
        <Image
          className="h-full w-full absolute top-0 left-0 object-cover"
          width={3000}
          height={3000}
          src={product.images[0]}
          alt=""
        ></Image>
      </div>
      <p className="text-amber-600 text-xs font-bold mt-3">
        Sale.{" "}
        {caculateDiscount({
          price: product.price,
          price_before_discount: product.price_before_discount,
        })}
        %
      </p>
      <h1 className="font-bold my-2">{product.name}</h1>
      <div className="text-xs text-black/40">{product.material.name}</div>
      <div className="my-2">
        <span className="text-xs text-black/40 mr-2 line-through">
          {product.price_before_discount}$
        </span>
        <span className="text-[13px]"> {product.price}$</span>
      </div>
      <div className="flex items-start gap-1">
        {product.colorVariations.map((color, index) => (
          <div
            key={index}
            style={{ background: `${color.code}` }}
            className={`w-[7px] h-[7px]`}
          ></div>
        ))}
      </div>
    </div>
  );
}
