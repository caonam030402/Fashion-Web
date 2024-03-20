"use client";

import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import ChooseItemColor from "../items/choose-color-item";
import Underline from "../ui/underline";

export default function SheetSelectSize({
  children,
  sizes,
}: {
  children: React.ReactNode;
  sizes?: Size[];
}) {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="" asChild>
          <div className="">{children}</div>
        </SheetTrigger>
        <SheetContent className="overflow-y-scroll max-h-screen">
          <SheetHeader>Choose size</SheetHeader>
          <SheetDescription className="mt-6">
            <div className="grid grid-cols-2">
              {sizes &&
                sizes.map((size, index) => (
                  <div key={index} className="py-5 text-center border">
                    {size.size}
                  </div>
                ))}
            </div>
            <div className="text-center mt-5">
              <Underline reverse>
                <div className="text-[13px]">Size guide</div>
              </Underline>
            </div>
          </SheetDescription>
          <SheetFooter className="mt-3 sticky bottom-0"></SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
