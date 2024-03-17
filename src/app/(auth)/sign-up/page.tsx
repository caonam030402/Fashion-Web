"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Underline from "@/components/ui/underline";
import { path } from "@/constants/path";
import { AuthSchema, authSchema } from "@/utils/rules";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

export default function Page() {
  const form = useForm<AuthSchema>({ resolver: yupResolver(authSchema) });

  async function onSubmit(values: AuthSchema) {
    console.log(values);
  }

  return (
    <div className="mt-0 p-10">
      <div className="text-xl font-medium">Register</div>
      <p className="text-sm mt-2 text-gray-500 mb-6">
        Sign in to your account for a better shopping experience
      </p>
      <fieldset>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn("mb-3 text-sm font-normal")}>
                    Email*
                  </FormLabel>
                  <FormControl className="">
                    <Input
                      {...field}
                      className={cn(
                        form.formState.errors.email && "border-red-300"
                      )}
                    />
                  </FormControl>
                  <FormMessage className="text-sm font-normal text-[13px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn("mb-3 text-sm font-normal")}>
                    Name*
                  </FormLabel>
                  <FormControl className="">
                    <Input
                      {...field}
                      className={cn(
                        form.formState.errors.email && "border-red-300"
                      )}
                    />
                  </FormControl>
                  <FormMessage className="text-sm font-normal text-[13px]" />
                </FormItem>
              )}
            />
            <div className="flex gap-5">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-[60%]">
                    <FormLabel className={cn("text-sm font-normal")}>
                      Password*
                    </FormLabel>
                    <FormControl className="">
                      <Input
                        type="password"
                        {...field}
                        className={cn(
                          form.formState.errors.password && "border-red-300"
                        )}
                      />
                    </FormControl>
                    <FormMessage className="text-sm font-normal text-[13px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className={cn("text-sm font-normal")}>
                      Comfirm password*
                    </FormLabel>
                    <FormControl className="">
                      <Input
                        type="password"
                        {...field}
                        className={cn(
                          form.formState.errors.password && "border-red-300"
                        )}
                      />
                    </FormControl>
                    <FormMessage className="text-sm font-normal text-[13px]" />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Create Account
            </Button>
          </form>
        </Form>
      </fieldset>
      <div className="flex items-center gap-5 mt-6 opacity-45">
        <div className="flex-1 h-[0.25px] bg-gray-500"></div>
        <div className="text-[12px]">Or register with</div>
        <div className="flex-1 h-[0.25px] bg-gray-500"></div>
      </div>
      <div className="flex gap-5 mt-6">
        <Button variant="outline" className="w-full">
          <FaGoogle size={19} />
          <p className="ml-2">Google</p>
        </Button>
        <Button variant="outline" className="w-full">
          <FaFacebook size={20} />
          <p className="ml-2">Facebook</p>
        </Button>
      </div>
      <div className="text-[13px] mt-5">
        <span className="mr-2">Do you already have an account?</span>
        <Underline reverse={true}>
          <Link href={path.signIn}>
            <span className="font-medium">Sign In</span>
          </Link>
        </Underline>
      </div>
    </div>
  );
}
