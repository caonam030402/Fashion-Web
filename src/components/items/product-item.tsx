import Image from "next/image";
import React from "react";

type Props = Pick<
  Product,
  | "colorVariations"
  | "images"
  | "material"
  | "name"
  | "price_before_discount"
  | "price"
>;

export default function ProductItem() {
  return (
    <div className="text-sm">
      <div className="w-full relative pb-[100%]">
        <Image
          className="h-full w-full absolute top-0 left-0 object-cover"
          width={3000}
          height={3000}
          src="https://www.etq-amsterdam.com/cdn/shop/files/shirtbigsleeve_black_front2_2048x.png?v=1710535994"
          alt=""
        ></Image>
      </div>
      <p className="text-amber-600 text-xs font-bold mt-3">Sale. -20%</p>
      <h1 className="font-bold my-2">TS 01 Essence Regular Black</h1>
      <div className="text-xs text-black/40">French Terry</div>
      <div className="my-2">
        <span className="text-xs text-black/40 mr-2">$88</span>
        <span className="text-[13px]">$70</span>
      </div>
      <div className="flex items-start gap-1">
        {Array(5)
          .fill(0)
          .map((item, index) => (
            <div className="" key={index}>
              <div className="w-[7px] h-[7px] bg-slate-700"></div>
            </div>
          ))}
      </div>
    </div>
  );
}
