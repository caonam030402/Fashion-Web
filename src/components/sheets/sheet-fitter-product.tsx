"use client";
import React from "react";

import Image from "next/image";
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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

const dataSizeShoe = [
  {
    SIZE: "36",
    CM: "23.8",
  },
  {
    SIZE: "37",
    CM: "23.8",
  },
  {
    SIZE: "37",
    CM: "23.8",
  },
  {
    SIZE: "37",
    CM: "23.8",
  },
  {
    SIZE: "37",
    CM: "23.8",
  },
  {
    SIZE: "37",
    CM: "23.8",
  },
  {
    SIZE: "37",
    CM: "23.8",
  },
  {
    SIZE: "37",
    CM: "23.8",
  },
  {
    SIZE: "37",
    CM: "23.8",
  },
];

const sizeShoe = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];

const sizeClothing = ["S", "M", "L", "XL"];

export default function SheetFitterProduct() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll max-h-screen">
        <SheetHeader></SheetHeader>
        <SheetDescription className="">
          <Accordion
            type="multiple"
            defaultValue={["item-1", "item-2", "item-3", "item-4", "item-5"]}
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
                    <div key={index} className="flex items-center space-x-2 ">
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
              <AccordionTrigger
                extra={
                  <Sheet>
                    <SheetTrigger className="underline hover:no-underline transition-all duration-300 text-xs font-normal pr-2">
                      Size guide
                    </SheetTrigger>
                    <SheetContent className="overflow-y-auto">
                      <Table className="mt-5">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">SIZE</TableHead>
                            <TableHead>CM</TableHead>
                            <TableHead>INCH</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {dataSizeShoe.map((item) => (
                            <TableRow key={item.CM}>
                              <TableCell className="font-medium">
                                {item.SIZE}
                              </TableCell>
                              <TableCell>{item.CM}</TableCell>
                              <TableCell>{item.CM}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                      <div className="mt-2">
                        <h1 className="text-sm font-bold">How to measure</h1>
                        <p className="text-sm mt-1">
                          Let’s find your perfect fit. Place a sheet of paper on
                          the floor against the wall and put your feet (with
                          socks) on it, heels against the wall. Make sure you
                          lean on your feet with full power when measuring. Now
                          you simply draw a line at the end of the biggest foot.
                          Measure the distance with a ruler and find the size
                          that matches it: see size table. Are you in between
                          sizes? In that case, we suggest taking the bigger
                          size.
                        </p>
                        <Image
                          className="w-full mt-5"
                          height={300}
                          width={300}
                          src="https://cdn.shopify.com/s/files/1/0505/9044/9849/files/sizeguide_400x.gif"
                          alt=""
                        />
                      </div>
                    </SheetContent>
                  </Sheet>
                }
                className={cn("text-sm font-bold")}
              >
                <div className="flex justify-between w-full">Shoe size</div>
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
              <AccordionTrigger
                extra={
                  <Sheet>
                    <SheetTrigger className="underline hover:no-underline transition-all duration-300 text-xs font-normal pr-2">
                      More info
                    </SheetTrigger>
                    <SheetContent className="overflow-y-auto">
                      <Image
                        alt=""
                        src="https://www.etq-amsterdam.com/cdn/shop/files/etq-material-guide-filter.jpg?height=200&v=1683188821"
                        width={300}
                        height={300}
                        className="w-full"
                      />
                      <div className="mt-6">
                        <h1 className=" font-bold">How to measure</h1>
                        <p className="text-sm mt-3">
                          Let’s find your perfect fit. Place a sheet of paper on
                          the floor against the wall and put your feet (with
                          socks) on it, heels against the wall. Make sure you
                          lean on your feet with full power when measuring. Now
                          you simply draw a line at the end of the biggest foot.
                          Measure the distance with a ruler and find the size
                          that matches it: see size table. Are you in between
                          sizes? In that case, we suggest taking the bigger
                          size.
                        </p>
                      </div>
                      <div className="mt-6">
                        <h1 className=" font-bold">Premium Suede</h1>
                        <p className="text-sm mt-3">
                          Experience unparalleled luxury with our Premium Suede
                          collection. Crafted from the finest, most luxurious
                          suede available. We have meticulously selected the
                          highest quality suede. Each step feels like a caress,
                          thanks to the unmatched softness and exceptional
                          craftsmanship. Our Premium Suede shoes redefine what
                          it means to walk in ultimate comfort.
                        </p>
                      </div>
                      <div className="mt-6">
                        <h1 className=" font-bold">Nappa Leather</h1>
                        <p className="text-sm mt-3">
                          Indulge in the epitome of luxurious comfort with our
                          Premium Nappa Leather collection. Renowned for its
                          buttery-soft texture and distinct natural grain, Nappa
                          leather offers an unmatched tactile experience.
                          Crafted with meticulous care, this leather remains
                          unaltered by sanding, ensuring its strength and
                          integrity are preserved. Each step you take in our
                          Premium Nappa leather shoes is a testament to our
                          dedication to exceptional craftsmanship. Walk with
                          confidence, knowing that the unique structure of Nappa
                          leather speaks to the unparalleled quality and
                          sophistication of your choice.
                        </p>
                      </div>
                    </SheetContent>
                  </Sheet>
                }
                className={cn("text-sm font-bold")}
              >
                <div className="flex justify-between w-full">Material</div>
              </AccordionTrigger>
              <AccordionContent>
                <RadioGroup
                  className="flex flex-col gap-6 "
                  defaultValue="comfortable"
                >
                  {listMaterial.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 ">
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
        <SheetFooter className="mt-3 sticky bottom-0">
          <Button className="w-full" variant={"outline"}>
            Reset
          </Button>
          <Button className="w-full">Show</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
