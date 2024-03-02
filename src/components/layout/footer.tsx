"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Combobox } from "../ui/combobox";

const dataLanguage = [
  {
    value: "english",
    label: "English",
  },
  {
    value: "viet nam",
    label: "Viet Nam",
  },
];

const dataCurrency = [
  {
    value: "usd",
    label: "Usd (Usa)",
  },
  {
    value: "vnd",
    label: "Vnd (Viet Nam)",
  },
  {
    value: "krw",
    label: "Krw (Korea)",
  },
];

export default function Footer() {
  const [valueCurrency, setValueCurrency] = useState("");
  const [valueLanguage, setValueLanguage] = useState("");
  return (
    <div className="container py-10" suppressHydrationWarning>
      <div className="grid-cols-12 grid gap-10">
        <div className="col-span-4">
          <div className="font-bold text-3xl mb-2">ETQ .</div>
          <div className="font-medium text-sm">About ETQ Amsterdam</div>
          <p className="text-sm mt-2 mb-1">
            We design wardrobe essentials with a strong silhouette, in tonal
            colorways. Our style never changes. It evolves. Continuously.
          </p>
          <Link href="" className="underline text-sm">
            Read more
          </Link>
        </div>
        <div className="col-span-2">
          <div className="font-medium text-sm">Address</div>
          <p className="text-sm mt-2">
            ETQ Amsterdam Duinkerkenstraat 40 9723 BT Groningen The Netherlands
          </p>
        </div>
        <div className="col-span-2">
          <div className="font-medium text-sm">Contact</div>
          <div>
            {listDataContact.map((item, index) => {
              return <ItemHoverLineText content={item.title} key={index} />;
            })}
          </div>
        </div>
        <div className="col-span-2">
          <div className="font-medium text-sm">Info</div>
          {listDataInfo.map((item, index) => {
            return <ItemHoverLineText content={item.title} key={index} />;
          })}
        </div>
        <div className="col-span-2 flex flex-col justify-between">
          <div className="font-medium flex items-center gap-6 text-[25px]">
            {listSocialMedia.map((item, index) => {
              return (
                <Link href={item.link} key={index}>
                  {item.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-between items-center">
        <div className="flex gap-7">
          <Combobox
            data={dataLanguage}
            setValue={setValueLanguage}
            value={valueLanguage}
          />
          <Combobox
            data={dataCurrency}
            setValue={setValueCurrency}
            value={valueCurrency}
          />
        </div>
        <div className="text-xs">
          © 2024 - Copyright belongs to Cao Nam Limited
        </div>
      </div>
    </div>
  );
}

function ItemHoverLineText({ content }: { content: string }) {
  return (
    <div>
      <Link href="" className="relative inline-block group mt-2">
        <p className="text-sm">{content}</p>
        <div className="group-hover:w-full w-0 h-[0.3px] bg-black/60 transition-all ease-in-out duration-300"></div>
      </Link>
    </div>
  );
}

const listDataContact = [
  {
    title: "Email us here",
    link: "",
  },
  {
    title: "085 40 13 553 (mon-fri)",
    link: "",
  },
];

const listDataInfo = [
  {
    title: "Customer Service",
    link: "",
  },
  {
    title: "Shipping & Delivery",
    link: "",
  },
  {
    title: "Returns & Exchanges",
    link: "",
  },
  {
    title: "Product Care",
    link: "",
  },
  {
    title: "Terms of Service",
    link: "",
  },
];

const listSocialMedia = [
  {
    icon: <FaFacebookSquare />,
    link: "",
  },
  {
    icon: <FaInstagramSquare />,
    link: "",
  },
  {
    icon: <FaPinterestSquare />,
    link: "",
  },
  {
    icon: <FaSquareXTwitter />,
    link: "",
  },
];
