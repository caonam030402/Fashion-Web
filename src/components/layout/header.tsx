"use client";

import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const listItem = ["Footwear", "Menswear", "Sale", "Help"];

export default function Header() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div>
        <div className="bg-primary py-3 text-center capitalize text-white/80 text-xs">
          Get 25% offf This Summer Sale. Grab It Fast !!!
        </div>
        <div>
          <div className="container py-5 flex items-center relative justify-between h-16 ">
            {/* <div className="absolute left-[50%] translate-x-[-50%] text-3xl font-bold">
              E T Q .
            </div> */}
            <div className="text-3xl font-bold">E T Q .</div>
            <div className="flex gap-12 text-sm font-medium absolute left-[50%] translate-x-[-50%] ">
              {listItem.map((item, index) => {
                return (
                  <NavigationMenu key={index}>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>{item}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          {/* <NavigationMenuLink>
                          <Image alt="" src="" width={500} height={500} />
                        </NavigationMenuLink> */}
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                );
              })}
            </div>

            <div className="flex items-center gap-9">
              <div className="flex items-center px-3 py-1 hover:border-gray-300 border border-transparent rounded-lg group ">
                <input
                  type="text"
                  placeholder="Search...."
                  className=" outline-none py-1 w-0 group-hover:w-52 placeholder:text-xs duration-700 transition-all text-sm"
                />
                <IoSearchOutline size={23} />
              </div>
              <div className="relative">
                <HiOutlineShoppingBag size={22} />
                <div className="absolute top-[-30%] rounded-full right-[-30%] text-white text-[8.5px] bg-primary w-4 h-4 flex items-center justify-center">
                  1
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex text-sm font-medium">Login</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
