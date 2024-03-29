"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import UserQueryConfig from "@/hooks/use-query-config";
import { createSearchParam } from "@/lib/create-search-param";
import { useQuery } from "@tanstack/react-query";
import { productApi } from "@/apis/product.api";
import { omit } from "lodash";

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

export default function SheetFilterProduct({
  children,
  lengthProduct,
}: {
  children: React.ReactNode;
  lengthProduct: number;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const queryConfig = UserQueryConfig();

  const listSortBy = [
    {
      name: "New In",
      active: "new_in",
      query: createSearchParam({
        ...omit(queryConfig, "order"),
        sortBy: "new_in",
      }),
    },
    {
      name: "Most Wanted",
      active: "most_wanted",
      query: createSearchParam({
        ...omit(queryConfig, "order"),
        sortBy: "most_wanted",
      }),
    },
    {
      name: "Price Low to High",
      active: "asc",
      query: createSearchParam({
        ...queryConfig,
        order: "asc",
        sortBy: "price",
      }),
    },
    {
      name: "Price High to Low",
      active: "desc",
      query: createSearchParam({
        ...queryConfig,
        order: "desc",
        sortBy: "price",
      }),
    },
  ];

  const { data } = useQuery({
    queryKey: ["color-material-size"],
    queryFn: () => productApi.getColorsMaterialsSizes(),
  });

  const colorsMaterialsSizes = data?.data.data;

  const filterShoeSize = (type: "Footwear" | "Menswear") => {
    return colorsMaterialsSizes?.sizes.filter((item) => {
      return item.category?.name === "Footwear";
    });
  };

  const handleResetSearchParams = () => {
    router.push(pathname);
  };

  const isActive = (
    value: string,
    type: "color" | "size" | "sortBy" | "material"
  ) => {
    switch (type) {
      case "color":
        return queryConfig.color === value;
      case "size":
        return queryConfig.size === value;
      case "sortBy":
        return queryConfig.sortBy === value || queryConfig.order === value;
      case "material":
        return queryConfig.material === value;
      default:
    }
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex items-center gap-3 cursor-pointer">
            {children}
          </div>
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
                        <Link
                          className="cursor-pointer"
                          href={pathname + "?" + item.query}
                        >
                          <RadioGroupItem
                            checked={isActive(item.active, "sortBy")}
                            value={item.name}
                            id={index.toString()}
                          />
                        </Link>

                        <Label
                          htmlFor={index.toString()}
                          className="text-xs cursor-pointer"
                        >
                          {item.name}
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
                    {colorsMaterialsSizes?.colors.map((item, index) => (
                      <Link
                        href={
                          pathname +
                          "?" +
                          createSearchParam({
                            ...queryConfig,
                            color: item.name,
                          })
                        }
                        key={index}
                        className={`bg-w flex items-center justify-center flex-col gap-2 p-2 w-[19.8%] ${
                          isActive(item.name, "color")
                            ? "shadow-border-active"
                            : "shadow-border"
                        }`}
                      >
                        <div
                          style={{ background: `${item.code}` }}
                          className="w-4 h-4 rounded-full"
                        ></div>
                        <div className="text-xs">{item.name}</div>
                      </Link>
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
                            {filterShoeSize("Footwear")?.map((item) => (
                              <TableRow key={item.size}>
                                <TableCell className="font-medium">
                                  {item.size}
                                </TableCell>
                                <TableCell>{item.size}</TableCell>
                                <TableCell>{item.size}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                        <div className="mt-2">
                          <h1 className="text-sm font-bold">How to measure</h1>
                          <div className="text-sm mt-1">
                            Let’s find your perfect fit. Place a sheet of paper
                            on the floor against the wall and put your feet
                            (with socks) on it, heels against the wall. Make
                            sure you lean on your feet with full power when
                            measuring. Now you simply draw a line at the end of
                            the biggest foot. Measure the distance with a ruler
                            and find the size that matches it: see size table.
                            Are you in between sizes? In that case, we suggest
                            taking the bigger size.
                          </div>
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
                    {filterShoeSize("Footwear")?.map((item, index) => (
                      <Link
                        href={
                          pathname +
                          "?" +
                          createSearchParam({
                            ...queryConfig,
                            size: item.size,
                          })
                        }
                        key={index}
                        className={`bg-w flex items-center h-11 justify-center flex-col gap-2 p-2 w-[14.25%] ${
                          isActive(item.size, "size")
                            ? "shadow-border-active"
                            : "shadow-border"
                        }`}
                      >
                        <div className="text-xs">{item.size}</div>
                      </Link>
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
                          <div className="text-sm mt-3">
                            Let’s find your perfect fit. Place a sheet of paper
                            on the floor against the wall and put your feet
                            (with socks) on it, heels against the wall. Make
                            sure you lean on your feet with full power when
                            measuring. Now you simply draw a line at the end of
                            the biggest foot. Measure the distance with a ruler
                            and find the size that matches it: see size table.
                            Are you in between sizes? In that case, we suggest
                            taking the bigger size.
                          </div>
                        </div>
                        <div className="mt-6">
                          <h1 className=" font-bold">Premium Suede</h1>
                          <div className="text-sm mt-3">
                            Experience unparalleled luxury with our Premium
                            Suede collection. Crafted from the finest, most
                            luxurious suede available. We have meticulously
                            selected the highest quality suede. Each step feels
                            like a caress, thanks to the unmatched softness and
                            exceptional craftsmanship. Our Premium Suede shoes
                            redefine what it means to walk in ultimate comfort.
                          </div>
                        </div>
                        <div className="mt-6">
                          <h1 className=" font-bold">Nappa Leather</h1>
                          <div className="text-sm mt-3">
                            Indulge in the epitome of luxurious comfort with our
                            Premium Nappa Leather collection. Renowned for its
                            buttery-soft texture and distinct natural grain,
                            Nappa leather offers an unmatched tactile
                            experience. Crafted with meticulous care, this
                            leather remains unaltered by sanding, ensuring its
                            strength and integrity are preserved. Each step you
                            take in our Premium Nappa leather shoes is a
                            testament to our dedication to exceptional
                            craftsmanship. Walk with confidence, knowing that
                            the unique structure of Nappa leather speaks to the
                            unparalleled quality and sophistication of your
                            choice.
                          </div>
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
                    {colorsMaterialsSizes?.materials.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 ">
                        <Link
                          href={
                            pathname +
                            "?" +
                            createSearchParam({
                              ...queryConfig,
                              material: item.id,
                            })
                          }
                        >
                          <RadioGroupItem
                            checked={isActive(item.id.toString(), "material")}
                            value={item.name}
                            id={item.name.toString()}
                          />
                        </Link>
                        <Label
                          htmlFor={item.name.toString()}
                          className="text-xs cursor-pointer"
                        >
                          {item.name}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SheetDescription>
          <SheetFooter className="mt-3 sticky bottom-0">
            <Button
              onClick={handleResetSearchParams}
              className="w-full"
              variant={"outline"}
            >
              Reset
            </Button>
            <Button className="w-full">
              <SheetClose className="block w-full h-full">
                Show {`${lengthProduct > 0 ? `(${lengthProduct})` : ""}`}
              </SheetClose>
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
