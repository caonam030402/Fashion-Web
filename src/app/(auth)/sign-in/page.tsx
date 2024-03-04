import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import React from "react";
import Underline from "@/components/ui/underline";
import Link from "next/link";
import { path } from "@/constants/path";

export default function Page() {
  return (
    <div className="mt-10 p-10">
      <div className="text-xl font-medium">Login</div>
      <p className="text-sm mt-2 text-gray-500">
        Log in to your account for a better shopping experience
      </p>
      <div className="mt-7">
        <h1 className="mb-3 text-sm">Email Address*</h1>
        <Input />
      </div>
      <div className="mt-7">
        <h1 className="mb-3 text-sm">Password*</h1>
        <Input />
      </div>
      <Button className="w-full mt-7" size="lg">
        Login
      </Button>
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
