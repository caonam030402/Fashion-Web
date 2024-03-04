import { cn } from "@/lib/utils";
import React from "react";

export default function Underline({
  children,
  reverse = false,
}: {
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="relative inline-block group">
      <div>{children}</div>
      <div
        className={cn(
          "h-[0.3px] bg-black/60 transition-all ease-in-out absolute bottom-[10%] duration-300",
          reverse ? " w-full group-hover:w-0" : "group-hover:w-full w-0 "
        )}
      ></div>
    </div>
  );
}
