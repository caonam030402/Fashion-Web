"use client";
import "swiper/css";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { productApi } from "@/services/apis/product.api";
import { caculateDiscount } from "@/utils/calculate_discount";
import { getIdFromNameId } from "@/utils/generate-name-id";
import IconProduct from "/public/svgs/ic_product.svg";
import { PiCopy } from "react-icons/pi";
import IconExchange from "/public/svgs/ic_exchange.svg";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SheetSelectColor from "@/components/sheets/sheet-select-color";
import SheetSelectSize from "@/components/sheets/sheet-select-size";
import UseTransition from "@/hooks/use-transition";

export default function Page({
  params,
}: {
  searchParams?: ProductListConfig;
  params: { id: string };
}) {
  const [activeSelectSize, setActiveSelectSize] = useState("");
  const idProduct = getIdFromNameId(params.id);

  const { data: productData } = useQuery({
    queryKey: ["product", params.id],
    queryFn: () => productApi.getProduct(idProduct),
  });

  const product = productData?.data.data;

  const productGroup = product?.productGroup.products;

  const sizes = product?.sizes;

  return (
    <div className=" grid grid-cols-12 mt-4">
      <div className="col-span-7 grid grid-cols-2 gap-2">
        {product &&
          product.images.map((image, index) => (
            <UseTransition key={index}>
              <Image
                width={2000}
                height={2000}
                className="h-[500px] object-cover"
                src={image}
                alt=""
              />
            </UseTransition>
          ))}
      </div>
      <div className="col-span-5 p-16">
        <UseTransition className="sticky top-20">
          <div className=" text-xl font-medium">{product?.name}</div>
          <div className="text-black/70 text-sm">{product?.material.name}</div>
          <div className="flex items-center justify-between">
            <div className="space-x-3">
              <span className="text-black/50 line-through">
                ${product?.price_before_discount}
              </span>
              <span>${product?.price}</span>
            </div>
            <div>
              <p className="text-amber-600 text-xs font-bold mt-3">
                Sale.
                {caculateDiscount({
                  price: product ? product.price : 0,
                  price_before_discount: product
                    ? product.price_before_discount
                    : 0,
                })}
                %
              </p>
            </div>
          </div>

          <div className="flex gap-5 mt-5">
            <div className="w-full">
              <SheetSelectColor products={productGroup}>
                <Button
                  className="w-full flex items-center justify-between text-[13px]"
                  variant="outline"
                  size={"lg"}
                >
                  <span>Colour: {product?.color.name}</span>
                  <IoMdArrowDropdown />
                </Button>
              </SheetSelectColor>
            </div>

            <div className="w-full">
              <SheetSelectSize
                setActiveSelectSize={setActiveSelectSize}
                sizes={sizes}
              >
                <Button
                  className="w-full flex items-center justify-between text-[13px]"
                  size={"lg"}
                  variant="outline"
                >
                  <span>
                    {activeSelectSize
                      ? "Size: " + activeSelectSize
                      : "Select size"}
                  </span>
                  <IoMdArrowDropdown />
                </Button>
              </SheetSelectSize>
            </div>
          </div>
          <Button size={"lg"} className="w-full mt-4 text-[13px]">
            Add to bad
          </Button>

          <Accordion type="multiple" className="w-full mt-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className={cn("text-[13px] font-bold")}>
                Description
              </AccordionTrigger>
              <AccordionContent className="text-[13px]">
                {product?.description}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className={cn("text-[13px] font-bold")}>
                Premium features
              </AccordionTrigger>
              <AccordionContent className="text-[13px]">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Premium French Terry.</li>

                  <li>Handmade in the Netherlands.</li>

                  <li>Built for the long haul.</li>

                  <li>Composition: 92% Cotton, 8% Elastane</li>

                  <li>Weight: 280 gsm.</li>

                  <li>Tonal details.</li>

                  <li>
                    From the collections
                    <a href="/collections/clothing">Clothing</a>
                    and
                    <a href="/collections/t-shirts">T-Shirts</a>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex items-center gap-3">
            <div className="flex gap-4 mt-4 items-start">
              <div className="w-[8%] mt-2">
                <Image
                  src={IconProduct}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-6 h-6 shrink-0"
                />
              </div>
              <div>
                <span className="text-[13px] font-medium">
                  Free & Fast delivery
                </span>
                <p className="text-[13px]">
                  Orders placed before 23:59 are shipped the same day. Enjoy
                  free shipping on all orders above €150 in the EU.
                </p>
              </div>
            </div>
            <PiCopy className="text-2xl" />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-4 mt-4 items-start">
              <div className="w-[8%] mt-2">
                <Image
                  src={IconExchange}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-6 h-6 shrink-0"
                />
              </div>
              <div>
                <span className="text-[13px] font-medium">
                  Easy returns & exchanges
                </span>
                <p className="text-[13px]">
                  All orders can be easily returned, or exchanged for a
                  different size, color, or model within 14 days, through our
                  return portal.
                </p>
              </div>
            </div>
            <PiCopy className="text-2xl" />
          </div>
        </UseTransition>
      </div>
    </div>
  );
}
