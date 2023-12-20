import { Logo } from "@/assets/svg/Logo";
import { Button } from "@/components/Button";
import Link from "next/link";

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
      <div className="flex flex-col gap-[16px] w-full">
        <input
          placeholder="Name"
          className="px-[16px] py-[12px] rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] text-[#A3A3A3]"
        ></input>
        <input
          placeholder="Email"
          className="px-[16px] py-[12px] rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] text-[#A3A3A3]"
        ></input>
        <input
          placeholder="Password"
          className="px-[16px] py-[12px] rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] text-[#A3A3A3]"
        ></input>
        <input
          placeholder="Re-Password"
          className="px-[16px] py-[12px] rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] text-[#A3A3A3]"
        ></input>
        <Button text="sign up" />
      </div>
      <div className="flex items-center">
        <p className="text-[#0F172A]">Already have account?</p>
        <Link className="text-[#0166FF] px-[12px] py-[4px]" href="/log-in">
          log in
        </Link>
      </div>
    </div>
  );
}
