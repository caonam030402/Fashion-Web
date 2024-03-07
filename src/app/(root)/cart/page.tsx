import ControlQuantity from "@/components/control-quantity";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Underline from "@/components/ui/underline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="container py-20">
      {/* <div className="text-3xl font-bold uppercase">Your Cart</div>
      <div className=" text-xs">Total (4 items): $182</div> */}

      <div className="grid grid-cols-12 gap-20">
        <div className="col-span-9 bg-white">
          <div className="grid grid-cols-12 text-sm font-medium">
            <div className="col-span-4">Product</div>
            <div className="col-span-2">Color</div>
            <div className="col-span-2">Size</div>
            <div className="col-span-2">Quanlity</div>
            <div className="col-span-2">Price</div>
          </div>
          <div className="h-[0.5px] w-full bg-black/20 my-3"></div>
          {Array(5)
            .fill(0)
            .map((item, index) => (
              <ItemInCart key={index} />
            ))}
        </div>
        <div className="col-span-3 bg-white border p-5">
          <div className="font-bold mb-4">Summary</div>
          <div className="flex justify-between text-[13px] opacity-80 mt-5">
            <div>Subtotab</div>
            <div>$6758.5</div>
          </div>
          <div className="flex justify-between text-[13px] mt-2 opacity-80 ">
            <div>Discount</div>
            <div className="flex flex-row gap-4">
              <span>(20%)</span>
              <span>-$1129</span>
            </div>
          </div>
          <div className="h-[0.5px] w-full bg-black/10 my-3"></div>
          <div className="flex justify-between mt-5 text-sm font-semibold">
            <div>Total</div>
            <div>$6758.5</div>
          </div>
          <div className="flex mt-7 border">
            <Input
              placeholder="Enter coupon code here"
              className="flex-1 border-none placeholder:text-xs"
            ></Input>
            <button className="bg-transparent text-black w-[10%] text-xl rounded-tl-none rounded-bl-none">
              +
            </button>
          </div>
          <Button className="w-full mt-6 text-xs">Checkout</Button>
          <div className="text-xs mt-5 text-black/60 font-medium">
            Accepted payments
          </div>
          <div className="mt-3 flex items-center gap-4">
            <div className="w-16 h-8 py-2 border">
              <Image
                className="w-full h-full object-contain grayscale-0"
                width={2000}
                height={2000}
                src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR-1.png"
                alt=""
              ></Image>
            </div>
            <div className="w-16 h-8 py-1 border">
              <Image
                className="w-full h-full object-contain"
                width={2000}
                height={2000}
                src="https://canhme.com/wp-content/uploads/2016/01/Paypal.png"
                alt=""
              ></Image>
            </div>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full text-[12px] mt-3 text-black/60"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Free & Easy Return</AccordionTrigger>
              <AccordionContent className="text-xs">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Confirmation Time</AccordionTrigger>
              <AccordionContent className="text-xs">
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

function ItemInCart() {
  return (
    <div className="grid grid-cols-12 text-sm items-center border-b py-4">
      <div className="col-span-4 flex items-center gap-4">
        <Image
          className="w-16 h-16"
          src="https://www.etq-amsterdam.com/cdn/shop/files/130000ETQ_230308_01LR_medium.jpg?v=1692694043"
          alt=""
          width={2000}
          height={2000}
        ></Image>
        <Underline>TS 01 Essence Regular White</Underline>
      </div>
      <div className="col-span-2">White</div>
      <div className="col-span-2">L</div>
      <div className="col-span-2">
        <ControlQuantity max={20} quanlity={10} />
      </div>
      <div className="col-span-2 flex justify-between">
        <div>$1000</div>
        <Underline reverse>Delete</Underline>
      </div>
    </div>
  );
}
