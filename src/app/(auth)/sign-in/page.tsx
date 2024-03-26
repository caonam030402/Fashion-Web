"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Underline from "@/components/ui/underline";
import Link from "next/link";
import { path } from "@/constants/path";
import { AuthSchema, authSchema } from "@/lib/rules";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { authApi } from "@/apis/auth.api";
import { AxiosError } from "axios";
import { setProfileToLS } from "@/lib/local-storage";
import { useAppStore } from "@/services/providers";

const schema = authSchema.pick(["email", "password"]);
type TypeSchema = Pick<AuthSchema, "email" | "password">;

export default function Page() {
  const { setUser } = useAppStore((state) => state);
  const router = useRouter();
  const form = useForm<TypeSchema>({ resolver: yupResolver(schema) });

  const signInMutation = useMutation({
    onSuccess: (data) => {
      setUser(data.data.data.user);
      setProfileToLS(data.data.data.user);
      toast({
        title: `${data.data.message}`,
        description: "Bạn có thể đăng nhập vào",
      });

      router.push(path.home);
    },

    mutationFn: (body: { email: string; password: string }) => {
      return authApi.signIn(body);
    },

    onError: (error: AxiosError<ErrorResponse<AuthSchema>>) => {
      if (error.response?.status == 422) {
        const formError = error.response?.data.data;

        if (formError) {
          Object.keys(formError).forEach((key) => {
            form.setError(key as keyof TypeSchema, {
              message: formError[key as keyof TypeSchema],
              type: "Server",
            });
          });
        }
      }
    },
  });

  async function onSubmit(values: TypeSchema) {
    signInMutation.mutate({
      email: values.email,
      password: values.password,
    });
  }

  return (
    <div className="mt-10 p-10">
      <div className="text-xl font-medium">Login</div>
      <p className="text-sm mt-2 text-gray-500 mb-9">
        Log in to your account for a better shopping experience
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn("text-sm font-normal")}>
                    Password*
                  </FormLabel>
                  <FormControl className="">
                    <Input
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
            <Button type="submit" className="w-full" size="lg">
              Login
            </Button>
          </form>
        </Form>
      </fieldset>
      <div className="flex items-center gap-5 mt-6 opacity-45">
        <div className="flex-1 h-[0.25px] bg-gray-500"></div>
        <div className="text-[12px]">Or login with</div>
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
        <span className="mr-2">Do not have an account?</span>
        <Underline reverse={true}>
          <Link href={path.signUp}>
            <span className="font-medium">Sign Up</span>
          </Link>
        </Underline>
      </div>
    </div>
  );
}
