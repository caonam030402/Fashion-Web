import Image from "next/image";
import React from "react";
import "../../app/globals.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-5 container mt-4">
        <div className="text-3xl font-bold">E T Q .</div>
        {children}
      </div>
      <div className="col-span-7 h-[100vh]">
        <Image
          className="w-full h-full object-cover"
          alt="https://www.etq-amsterdam.com/cdn/shop/files/etq_april-15D_1200x.png?v=1692191316"
          src="https://www.etq-amsterdam.com/cdn/shop/files/etq_april-15D_1200x.png?v=1692191316"
          width={2000}
          height={1000}
        />
      </div>
    </div>
  );
}
