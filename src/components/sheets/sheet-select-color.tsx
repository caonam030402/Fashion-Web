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

export default function SheetSelectColor({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="" asChild>
          <div className="">{children}</div>
        </SheetTrigger>
        <SheetContent className="overflow-y-scroll max-h-screen">
          <SheetHeader>Choose colour</SheetHeader>
          <SheetDescription className=""></SheetDescription>
          <SheetFooter className="mt-3 sticky bottom-0">
            <Button
              //   onClick={handleResetSearchParams}
              className="w-full"
              variant={"outline"}
            >
              Reset
            </Button>
            <Button className="w-full">
              <SheetClose className="block w-full h-full"></SheetClose>
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
