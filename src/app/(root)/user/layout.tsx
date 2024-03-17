import Underline from "@/components/ui/underline";
import React from "react";

export default function LayoutUser({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container grid grid-cols-12 mt-10 gap-20">
      <div className="col-span-2 text-sm p-3">
        <div className="text-base font-bold mb-4">My account</div>
        <div className="text-primary/60">
          <div className="flex border-t-[0.5px] py-3 border-primary/10 items-center gap-2">
            <Underline reverse>Dashboard</Underline>
          </div>
          <div className="flex border-t-[0.5px] py-3 border-primary/10 items-center gap-2">
            <Underline>Profile</Underline>
          </div>
          <div className="flex border-t-[0.5px] py-3 border-primary/10 items-center gap-2">
            <Underline>Order History</Underline>
          </div>
          <div className="flex border-t-[0.5px] py-3 border-primary/10 items-center gap-2">
            <Underline>Logout</Underline>
          </div>
        </div>
      </div>
      <div className="col-span-10">{children}</div>
    </div>
  );
}
