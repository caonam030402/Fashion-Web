"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import "swiper/css";
import { Button } from "@/components/ui/button";
import ChooseItemColor from "../items/choose-color-item";

export default function SheetSelectColor({
  children,
  products,
}: {
  children: React.ReactNode;
  products?: Product[];
}) {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="" asChild>
          <div className="">{children}</div>
        </SheetTrigger>
        <SheetContent className="overflow-y-scroll max-h-screen">
          <SheetHeader>Choose colour</SheetHeader>
          <SheetDescription className="">
            {products &&
              products.map((product, index) => (
                <ChooseItemColor product={product} key={index} />
              ))}
          </SheetDescription>
          <SheetFooter className="mt-3 sticky bottom-0"></SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
