"use client";

import { Logo } from "@/assets/svg/Logo";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function LogIn() {
  return (
    <div className="flex w-full h-screen ">
      <div className="w-1/2 bg-white flex items-center justify-center">
        <LogInComponent />
      </div>
      <div className="w-1/2 bg-[#0166FF]"></div>
    </div>
  );
}
export function LogInComponent() {
  return (
    <div className=" flex flex-col items-center gap-[40px]">
      <Logo />
      <div className="flex flex-col items-center gap-[8px]">
        <h2 className="text-[black] font-semibold text-2xl">Welcome Back</h2>
        <p className="text-[#334155]">
          Welcome back, Please enter your details
        </p>
      </div>
      <div className="flex flex-col w-full gap-[16px]">
        <input
          placeholder="Email "
          className="px-[16px] py-[12px] rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] text-[#A3A3A3]"
        ></input>
        <input
          placeholder="Password"
          className="px-[16px] py-[12px] rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] text-[#A3A3A3]"
        ></input>
        <Button text="log in" />
      </div>
      <div className="flex items-center">
        <p className="text-[#0F172A]">Don’t have account?</p>
        <Link className="text-[#0166FF] px-[12px] py-[4px]" href="/sign-up">
          Sign up
        </Link>
      </div>
    </div>
  );
}
