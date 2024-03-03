"use client";

import Image from "next/image";
import React from "react";
import "swiper/css";
import SheetFitterProduct from "@/components/sheets/sheet-fitter-product";

export default function Page() {
  return (
    <div className="container h-80">
      <SheetFitterProduct />
    </div>
  );
}

function CardCategory() {
  return (
    <div>
      <Image
        width={200}
        height={200}
        alt=""
        src="https://www.etq-amsterdam.com/cdn/shop/collections/Sneakers.png?crop=center&height=400&v=1701168188&width=400"
      />
      <h3 className="text-sm mt-3">Sneakers</h3>
    </div>
  );
}
