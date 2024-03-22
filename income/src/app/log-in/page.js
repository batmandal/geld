"use client";

import { Logo } from "@/assets/svg/Logo";
import { Button } from "@/components/Button";

import { useState } from "react";
import { useAuth } from "@/components/providers/AuthProviders";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const { logIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          type="email"
          value={email}
          placeholder="Email "
          className="px-[16px] py-[12px] rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] text-[#A3A3A3]"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="Password"
          className="px-[16px] py-[12px] rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] text-[#A3A3A3]"
        />
        <Button
          onClick={() => {
            logIn(email, password);
          }}
          text="log in"
        />
      </div>
      <div className="flex items-center">
        <p className="text-[#0F172A]">Don’t have account?</p>

        <p
          onClick={() => {
            router.push("/sign-up");
          }}
          className="text-[#0166FF] px-[12px] py-[4px] cursor-pointer"
        >
          Sign up
        </p>
      </div>
    </div>
  );
}
