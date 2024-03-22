"use client";

import Image from "next/image";
import React from "react";
import "../../app/globals.css";
import Link from "next/link";
import { path } from "@/constants/path";
import UseTransition from "@/hooks/use-transition";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/services/providers";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <UseTransition className="grid grid-cols-12">
            <div className="col-span-5 container mt-4">
              <Link href={path.home}>
                <div className="text-3xl font-bold">E T Q .</div>
              </Link>
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
          </UseTransition>
          <Toaster />
        </body>
      </html>
    </Providers>
  );
}
