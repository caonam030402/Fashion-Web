"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React from "react";

export default function Page() {
  return (
    <div>
      <div className="grid-cols-12 grid p-3">
        <div className="text-sm col-span-6 flex flex-col gap-7">
          <div className="text-base">Account Settings</div>
          <div>
            <div className="text-xs mb-2">Name</div> 
            <Input />
          </div>
          <div>
            <div className="text-xs mb-2">Email</div>
            <Input />
          </div>
          <div>
            <div className="text-xs mb-2">Phone Number</div>
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
}
