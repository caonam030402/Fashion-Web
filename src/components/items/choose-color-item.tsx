import { path } from "@/constants/path";
import { generateNameId } from "@/utils/generate-name-id";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ChooseItemColor({ product }: { product: Product }) {
  const url = `${path.product}/${generateNameId({
    name: product.name,
    id: product.id,
  })}`;
  return (
    <Link href={url} className="flex items-center justify-between my-5 gap-4">
      <div className="flex items-center gap-3">
        <Image
          alt=""
          className="w-16 h-20 object-cover"
          width={2000}
          height={2000}
          src={product.images[0]}
        />
        <div>
          <div className="text-[13px] font-medium">{product.name}</div>
          <div className="text-xs">{product.material.name}</div>
        </div>
      </div>
      <div className="">
        <div className="text-xs font-medium line-through opacity-60">
          ${product.price_before_discount}
        </div>
        <div className="text-sm font-medium"> ${product.price}</div>
      </div>
    </Link>
  );
}
