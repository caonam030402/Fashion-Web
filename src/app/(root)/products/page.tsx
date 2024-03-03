"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import "swiper/css";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const listSortBy = [
  "Recommended",
  "Most Wanted",
  "Price Low to High",
  "Price High to Low",
  "New In",
];

const listMaterial = [
  "Nubuck Leather",
  "Full Grain Leather",
  "Mediterranean Suede",
  "Premium Suede",
  "Premium Nappa",
  "French Terry",
  "Punti Di Roma",
];

const colors = [
  { title: "White", hex: "#EFF0F1" },
  { title: "Black", hex: "#000000" },
  { title: "Green", hex: "#25613B" },
  { title: "Gray", hex: "#808080" },
  { title: "Sand", hex: "#BFB286" },
  { title: "Blue", hex: "#13187C" },
  { title: "Brown", hex: "#000000" },
  { title: "Taupe", hex: "#AD9C88" },
];

const sizeShoe = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];

const sizeClothing = ["S", "M", "L", "XL"];

export default function Page() {
  return (
    <div className="container h-80">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <Accordion
                type="multiple"
                defaultValue={[
                  "item-1",
                  "item-2",
                  "item-3",
                  "item-4",
                  "item-5",
                ]}
                className="w-full"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className={cn("text-sm font-bold")}>
                    Sort by
                  </AccordionTrigger>
                  <AccordionContent>
                    <RadioGroup
                      className="flex flex-col gap-6 "
                      defaultValue="comfortable"
                    >
                      {listSortBy.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 "
                        >
                          <RadioGroupItem value={item} id={index.toString()} />
                          <Label htmlFor={index.toString()} className="text-xs">
                            {item}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className={cn("text-sm font-bold")}>
                    Colour
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap ">
                      {colors.map((item, index) => (
                        <div
                          key={index}
                          className="bg-w flex items-center justify-center flex-col gap-2 p-2 w-[19.8%] shadow-border"
                        >
                          <div
                            style={{ background: `${item.hex}` }}
                            className="w-4 h-4 rounded-full"
                          ></div>
                          <div className="text-xs">{item.title}</div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className={cn("text-sm font-bold")}>
                    Shoe size
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap ">
                      {sizeShoe.map((item, index) => (
                        <div
                          key={index}
                          className="bg-w flex items-center h-11 justify-center flex-col gap-2 p-2 w-[14.27%] shadow-border"
                        >
                          <div className="text-xs">{item}</div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className={cn("text-sm font-bold")}>
                    Clothing size
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap ">
                      {sizeClothing.map((item, index) => (
                        <div
                          key={index}
                          className="bg-w flex items-center h-11 justify-center flex-col gap-2 p-2 w-[14.27%] shadow-border"
                        >
                          <div className="text-xs">{item}</div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className={cn("text-sm font-bold")}>
                    Material
                  </AccordionTrigger>
                  <AccordionContent>
                    <RadioGroup
                      className="flex flex-col gap-6 "
                      defaultValue="comfortable"
                    >
                      {listMaterial.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 "
                        >
                          <RadioGroupItem value={item} id={index.toString()} />
                          <Label htmlFor={index.toString()} className="text-xs">
                            {item}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
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
