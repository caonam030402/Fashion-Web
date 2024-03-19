"use client";

import FilterIcon from "/public/svgs/ic_filter.svg";
import GridSwitchIcon from "/public/svgs/ic_grid_switch_v2.svg";
import GridSwitchIconV1 from "/public/svgs/ic_grid_switch.svg";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import "swiper/css";
import SheetFilterProduct from "@/components/sheets/sheet-filter-product";
import ProductItem from "@/components/items/product-item";
import UseScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { productApi } from "@/services/apis/product.api";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import UserQueryConfig from "@/hooks/use-query-config";

export default function Page({
  searchParams,
}: {
  searchParams?: ProductListConfig;
}) {
  const { valueScroll } = UseScroll();

  const { data: productData } = useQuery({
    queryKey: ["products", searchParams],
    queryFn: () => productApi.getProducts(searchParams as ProductListConfig),
  });

  const { data: categoriesData } = useQuery({
    queryKey: ["category"],
    queryFn: () => productApi.getProducts({}),
  });

  const categories = categoriesData?.data.data;
  const products = productData && productData?.data.data;

  const allColor: Color[] =
    (products &&
      products.reduce((acc: Color[], product: Product) => {
        if (!acc.some((item) => item.id === product.color.id)) {
          acc.push(product.color);
        }
        return acc;
      }, [])) ||
    [];

  // const size: Size[] =
  //   (products &&
  //     products.reduce((acc: Size[], product: Product) => {
  //       if (!acc.some((item) => item.id === product.sizes.id)) {
  //         acc.push(product.sizes);
  //       }
  //       return acc;
  //     }, [])) ||
  //   [];

  const allSize = (products && products.map((item) => item.sizes)) || [];

  return (
    <div className="container">
      <div
        className={cn(
          "fixed z-10 left-[50%] justify-center translate-x-[-50%] p-[2px] transition-all duration-200 flex items-center gap-3 bg-white border rounded-full",
          `${valueScroll > 200 ? "bottom-7" : "bottom-[-50px]"}`
        )}
      >
        <SheetFilterProduct sizes={allSize} colors={allColor}>
          <div className="flex items-center gap-3 cursor-pointer bg-black py-3 rounded-full px-5">
            <Image width={15} height={25} src={FilterIcon} alt="" />
            <div className="text-xs text-white">Filter</div>
          </div>
        </SheetFilterProduct>

        <div className="flex items-center gap-3 pr-5">
          <Image
            width={2000}
            height={2000}
            className="opacity-100 w-[17px] h-[17px]"
            src={GridSwitchIconV1}
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            className="opacity-60 w-[17px] h-[17px]"
            src={GridSwitchIcon}
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-between mb-5 mt-6 relative">
        <div className="text-xs">30 items</div>
        <div className="flex gap-3 items-center absolute right-[50%] translate-x-[50%]">
          <Image
            width={2000}
            height={2000}
            className="opacity-100 w-[17px] h-[17px]"
            src={GridSwitchIconV1}
            alt=""
          />
          <Image
            className="opacity-60 w-[17px] h-[17px]"
            width={2000}
            height={2000}
            src={GridSwitchIcon}
            alt=""
          />
        </div>
        <div>
          <SheetFilterProduct sizes={allSize} colors={allColor}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="16"
              height="14"
              viewBox="0 0 16 14"
            >
              <path
                fill="#000"
                d="M3.2 5.5728v-1.712H0v-1.6h3.2V.4528h1.6v5.12H3.2Zm3.2-1.712H16v-1.6H6.4v1.6Zm4.8 9.6864v-5.12h1.6v1.808H16v1.6h-3.2v1.712h-1.6Zm-1.6-1.712v-1.6H0v1.6h9.6Z"
              ></path>
            </svg>
            <div className="text-xs ">Filter & Sort</div>
          </SheetFilterProduct>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 ">
        {products &&
          products.map((product, index) => (
            <ProductItem product={product} key={index} />
          ))}
      </div>
    </div>
  );
}

function CardCategory() {
  return (
    <div>
      <Image
        width={200}
        height={200}
        alt=""
        src="https://www.etq-amsterdam.com/cdn/shop/collections/Sneakers.png?crop=center&height=400&v=1701168188&width=400"
      />
      <h3 className="text-sm mt-3">Sneakers</h3>
    </div>
  );
}
