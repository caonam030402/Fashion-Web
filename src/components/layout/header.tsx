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
import Underline from "../ui/underline";
import { Button } from "../ui/button";
import Link from "next/link";
import { path } from "@/constants/path";
import { useAppStore } from "@/services/providers";
import { getProfileFromLS } from "@/utils/local-storage";

const listItem = ["Footwear", "Menswear", "Sale", "Help"];

export default function Header() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { user } = useAppStore((state) => state);

  function Account() {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger isIconDown={false}>
          <div className="flex gap-3 items-center cursor-pointer ">
            <div className="flex text-sm font-medium">
              {!user ? "My account" : user.name}
            </div>
          </div>
        </NavigationMenuTrigger>
        <NavigationMenuContent className="">
          <div className="w-[400px] p-6">
            <p className="text-sm">
              Create an account or log in to view your orders, return or adjust
              your personal information.
            </p>
            <div className="w-full h-[0.2px] bg-gray-300/40 my-4"></div>
            {user ? (
              <div className="flex justify-between gap-4">
                <Link className="w-full" href={path.signUp}>
                  <Button variant="outline" className="w-full">
                    Logout
                  </Button>
                </Link>
                <Link href={path.signIn} className="w-full">
                  <Button className="w-full">My Account</Button>
                </Link>
              </div>
            ) : (
              <div className="flex justify-between gap-4">
                <Link className="w-full" href={path.signUp}>
                  <Button variant="outline" className="w-full">
                    Create account
                  </Button>
                </Link>
                <Link href={path.signIn} className="w-full">
                  <Button className="w-full">SignIn</Button>
                </Link>
              </div>
            )}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    isClient && (
      <div className="">
        <div className="bg-primary py-3 text-center capitalize text-white/80 text-xs">
          Get 25% offf This Summer Sale. Grab It Fast !!!
        </div>
        <div>
          <div className="container py-5 flex items-center relative justify-between h-16 ">
            {/* <div className="absolute left-[50%] translate-x-[-50%] text-3xl font-bold">
              E T Q .
            </div> */}
            <Link className="" href={path.home}>
              <div className="text-3xl font-bold">E T Q .</div>
            </Link>
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

            <div className="flex items-center">
              <div className="flex items-center px-3 py-1 hover:border-gray-300 border border-transparent rounded-lg group ">
                <input
                  type="text"
                  placeholder="Search...."
                  className=" outline-none py-1 w-0 group-hover:w-52 placeholder:text-xs duration-700 transition-all text-sm"
                />
                <IoSearchOutline size={23} />
              </div>
              <div className="relative">
                <NavigationMenu location="right-0">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger isIconDown={false}>
                        <Link className="" href={path.cart}>
                          <div className="relative mx-4">
                            <HiOutlineShoppingBag size={22} />
                            <div className="absolute top-[-30%] rounded-full right-[-30%] text-white text-[8.5px] bg-primary w-4 h-4 flex items-center justify-center">
                              1
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="">
                        <div className="w-[400px] p-6">
                          <div className="text-xs text-gray-400">
                            New products added
                          </div>
                          <div className="w-full h-[0.2px] bg-gray-300/40 mt-2"></div>
                          <div className="">
                            {cartData.slice(0, 5).map((item, index) => (
                              <CartItem
                                key={index}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                size={item.size}
                              />
                            ))}
                          </div>
                          <div className="text-[13px]">
                            <div className="w-full h-[0.2px] bg-gray-300/40"></div>
                            <div className="my-4">
                              <div className="flex items-center justify-between">
                                <div>Shipping:</div>
                                <div className="text-green-600 ">Free</div>
                              </div>
                              <div className="flex items-center justify-between mt-3">
                                <div>Total:</div>
                                <div>€671</div>
                              </div>
                            </div>
                            <div className="w-full h-[0.2px] bg-gray-300/40"></div>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="text-[11px]">
                              18 Add Item to Cart
                            </div>
                            <Link className="" href={path.cart}>
                              <Button size="lg" className="px-10">
                                Checkout
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <Account />
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

interface PropsCardItem {
  image: string;
  name: string;
  size: string;
  price: number;
}

function CartItem({ image, name, price, size }: PropsCardItem) {
  return (
    <div className="flex items-center justify-between text-[13px] my-4">
      <div className="flex items-center gap-5">
        <Image className="" alt={image} src={image} width={50} height={50} />
        <div className="">
          <Underline>
            <div>{name}</div>
          </Underline>
          <div>{size}</div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div>€{price}</div>
        <Underline reverse>
          <button className="text-[12px]">Remove</button>
        </Underline>
      </div>
    </div>
  );
}

const cartData: PropsCardItem[] = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ_Cleaningkit_03LR_100x.jpg?v=1692694372",
    name: "2x Deluxe Cleaning Kit",
    price: 54,
    size: "EU 46",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ_Cleaningkit_03LR_100x.jpg?v=1692694372",
    name: "2x Deluxe Cleaning Kit",
    price: 54,
    size: "EU 46",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ_Cleaningkit_03LR_100x.jpg?v=1692694372",
    name: "2x Deluxe Cleaning Kit",
    price: 54,
    size: "EU 46",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ_Cleaningkit_03LR_100x.jpg?v=1692694372",
    name: "2x Deluxe Cleaning Kit",
    price: 54,
    size: "EU 46",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ_Cleaningkit_03LR_100x.jpg?v=1692694372",
    name: "2x Deluxe Cleaning Kit",
    price: 54,
    size: "EU 46",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ_Cleaningkit_03LR_100x.jpg?v=1692694372",
    name: "2x Deluxe Cleaning Kit",
    price: 54,
    size: "EU 46",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ_Cleaningkit_03LR_100x.jpg?v=1692694372",
    name: "2x Deluxe Cleaning Kit",
    price: 54,
    size: "EU 46",
  },
];
