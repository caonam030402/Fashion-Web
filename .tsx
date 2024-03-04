import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import React from "react";
import Underline from "@/components/ui/underline";
import Link from "next/link";
import { path } from "@/constants/path";
import { AuthSchema, authSchema } from "@/lib/rules";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const schema = authSchema.pick(["email", "password"]);
type TypeSchema = Pick<AuthSchema, "email" | "password">;

export default function Page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TypeSchema>({ resolver: yupResolver(schema) });
  console.log(errors.email);
  console.log(watch("email"));
  const onSubmit = (data: any) => {
    console.log(1);
    console.log(data);
  };
  return (
    <div className="mt-10 p-10">
      <div className="text-xl font-medium">Login</div>
      <p className="text-sm mt-2 text-gray-500">
        Log in to your account for a better shopping experience
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-7">
          <h1 className="mb-3 text-sm">Email Address*</h1>
          <Input {...register("email")} />
        </div>
        <div className="mt-7">
          <h1 className="mb-3 text-sm">Password*</h1>
          <Input {...register("password")} />
        </div>
        <Button type="submit" className="w-full mt-7" size="lg">
          Login
        </Button>
      </form>
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
