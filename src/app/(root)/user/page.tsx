"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

export default function Page() {
  return (
    <div className="">
      <div className="grid grid-cols-12 text-sm gap-10">
        <div className="col-span-6 border p-6 flex flex-col justify-center items-center">
          <Avatar>
            <AvatarImage
              className="rounded-full w-24 h-24"
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-base font-bold mt-2">Cao Nam</div>
          <div className="text-xs mb-2">Customer Vip</div>
          <div className="text-xs text-green-700 font-bold">Edit profile</div>
        </div>
        <div className="col-span-6 border p-6">
          <div>Billing Address</div>
          <div>4140 Parker Rd. Allentown, New Mexico 31134</div>
          <div>dainne.ressell@gmail.com</div>
          <div>(671) 555-0110</div>
          <div className="text-xs text-green-700 font-bold">Edit Address</div>
        </div>
      </div>
    </div>
  );
}
