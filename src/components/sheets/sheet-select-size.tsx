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

import Underline from "../ui/underline";
import { path } from "@/constants/path";
import { generateNameId } from "@/lib/generate-name-id";

export default function SheetSelectSize({
  children,
  sizes,
  setActiveSelectSize,
}: {
  children: React.ReactNode;
  sizes?: Size[];
  setActiveSelectSize: React.Dispatch<React.SetStateAction<Size | undefined>>;
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
            <div className="grid grid-cols-1">
              {sizes &&
                sizes.map((size, index) => (
                  <SheetClose key={index}>
                    <button
                      onClick={() => {
                        setActiveSelectSize(size && size);
                      }}
                      className="py-5 text-center border-b"
                    >
                      Size: {size.size}
                    </button>
                  </SheetClose>
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
