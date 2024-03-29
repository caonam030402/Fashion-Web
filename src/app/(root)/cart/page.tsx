"use client";

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
import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { StatusOrder } from "@/app/enums/status-order";
import { orderApi } from "@/apis/order.api";
import { AxiosResponse } from "axios";

export default function Page() {
  const { data: orderData, refetch } = useQuery({
    queryKey: ["orders", { status: StatusOrder.IN_CART }],
    queryFn: () => orderApi.getOrderByStatus(StatusOrder.IN_CART),
  });

  const order =
    orderData?.data.data !== null ? orderData?.data.data.orderDetails : null;

  return (
    <div className="container py-20">
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
          {order &&
            order.map((item, index) => <ItemInCart order={item} key={index} />)}
        </div>
        <div className="col-span-3 bg-white border p-5 sticky">
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

function ItemInCart({ order }: { order: OrderDetail }) {
  const queryClient = useQueryClient();

  const deleteOrderMutation = useMutation({
    mutationFn: async (param: { idOrderDetail: string }) => {
      return orderApi.deleteOrder(param);
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["orders", { status: StatusOrder.IN_CART }],
      });
    },
  });

  const updateByCountMutation = useMutation({
    mutationFn: (body: { buy_count: number; idOrderDetail: string }) => {
      return orderApi.updateOrder(body);
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["orders", { status: StatusOrder.IN_CART }],
      });
    },
  });

  const handleUpdateQuantity = (body: {
    buy_count: number;
    idOrderDetail: string;
  }) => {
    updateByCountMutation.mutate(body);
  };

  const handleDeleteOrder = (param: { idOrderDetail: string }) => {
    console.log(param.idOrderDetail);
    deleteOrderMutation.mutate(param);
  };

  return (
    <div className="grid grid-cols-12 text-sm items-center border-b py-4">
      <div className="col-span-4 flex items-center gap-4">
        <Image
          className="w-16 h-16"
          src={order.product.images[0]}
          alt=""
          width={2000}
          height={2000}
        ></Image>
        <Underline>{order.product.name}</Underline>
      </div>
      <div className="col-span-2">{order.product.color.name}</div>
      <div className="col-span-2">{order.size.size}</div>
      <div className="col-span-2">
        <ControlQuantity
          handleUpdateQuantity={(value) =>
            handleUpdateQuantity({ buy_count: value, idOrderDetail: order.id })
          }
          id={order.id}
          max={Number(order.product.quantity)}
          buy_count={order.buy_count}
        />
      </div>
      <div className="col-span-2 flex justify-between">
        <div>{order.price * order.buy_count}$</div>
        <button onClick={() => handleDeleteOrder({ idOrderDetail: order.id })}>
          <Underline reverse>Delete</Underline>
        </button>
      </div>
    </div>
  );
}
