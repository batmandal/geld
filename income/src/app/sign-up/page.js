"use client";
import { Logo } from "@/assets/svg/Logo";
import { Button } from "@/components/Button";
import { useAuth } from "@/components/providers/AuthProviders";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  return (
    <div className="flex w-full h-screen ">
      <div className="w-1/2 bg-white flex items-center justify-center">
        <SignUpComponent />
      </div>
      <div className="w-1/2 bg-[#0166FF]"></div>
    </div>
  );
}
export function SignUpComponent() {
  const router = useRouter();
  const [checkPassword, setCheckPassword] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { signUp } = useAuth();

  // console.log(checkPassword);
  return (
    <div className=" flex flex-col items-center gap-[40px]">
      <Logo />
      <div className="flex flex-col items-center gap-[8px]">
        <h2 className="text-[black] font-semibold text-2xl">
          Create Geld account
        </h2>
        <p className="text-[#334155]">
          Sign up below to create your Wallet account
        </p>
      </div>
      <form className="flex flex-col gap-[16px] w-full">
        {/* <input
          placeholder="Name"
          className="px-[16px] py-[12px] rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] text-[#A3A3A3]"
        /> */}
        <input
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="Email"
          type="email"
          className="px-[16px] py-[12px] rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] text-[#A3A3A3]"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-[16px] py-[12px] rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] text-[#A3A3A3]"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        {/* <input
          placeholder="Re-Password"
          className="px-[16px] py-[12px] rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] text-[#A3A3A3]"
          onChange={(event) => {
            setCheckPassword(event.target.value);
          }}
        /> */}
        <Button
          text="sign up"
          onClick={() => {
            // if (checkPassword === password) {
            //   console.log("same");
            // } else {
            //   console.log("not same");
            // }
            // router.push("sign-up/general");
            // signUp(name, email, password);
            signUp(email, password);
          }}
        />
      </form>
      <div className="flex items-center">
        <p className="text-[#0F172A]">Already have account?</p>
        <p
          className="text-[#0166FF] px-[12px] py-[4px] cursor-pointer"
          onClick={() => {
            router.push("/log-in");
          }}
        >
          log in
        </p>
      </div>
    </div>
  );
}
