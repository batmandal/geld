"use client";

import { DoneIcon } from "@/assets/svg/DoneIcon";
import { MoneyIcon } from "@/assets/svg/MoneyIcon";
import { TokenIcon } from "@/assets/svg/TokenIcon";
import { Button } from "@/components/Button";

import { Check } from "@/components/Check";
import { Logo } from "@/assets/svg/Logo";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProviders";

export default function General() {
  const { page } = useAuth();

  if (page == 1) {
    return (
      <div className="w-full h-screen flex flex-col items-center bg-white pt-10 gap-[141px]">
        <div className="flex flex-col items-center gap-12">
          <Logo />
          <Check />
        </div>

        <Currency />
      </div>
    );
  } else if (page == 2) {
    return (
      <div className="w-full h-screen flex flex-col items-center bg-white pt-10 gap-[141px]">
        <div className="flex flex-col gap-12 items-center">
          <Logo />
          <Check color1="#0166FF" line="#0166FF" text1="white" />
        </div>

        <Balance />
      </div>
    );
  } else if (page !== 2) {
    return (
      <div className="w-full h-screen flex flex-col items-center bg-white pt-10 gap-[141px]">
        <div className="flex flex-col items-center gap-12">
          <Logo />
          <Check color2="#0166ff" line1="#0166FF" text2="white" />
        </div>

        <Done />
      </div>
    );
  }
}

export function Currency() {
  const { setPage } = useAuth();
  return (
    <div className="grid gap-[32px] w-[384px]">
      <div className="flex flex-col items-center gap-[16px]">
        <MoneyIcon />
        <h3 className="font-semibold text-2xl text-[#0F172A]">
          Select base currency
        </h3>
        <div className="grid gap-[12px] w-full">
          <div className="w-full py-[20px] px-[16px] rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] text-[#A3A3A3]">
            <select className="w-full bg-[#F3F4F6] text-black">
              <option>MNT-Mongolian Tugrik</option>
              <option>USD-American Dollar</option>
              <option>RUB-Russian Ruble</option>
            </select>
          </div>
          <p className="text-xs font-normal flex flex-wrap text-[#475569]">
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one
          </p>
        </div>
      </div>

      <Button
        text="Confirm"
        onClick={() => {
          setPage(2);
        }}
      />
    </div>
  );
}
export function Balance() {
  const { setPage } = useAuth();
  return (
    <div className="grid gap-[32px] w-[384px]">
      <div className="flex flex-col items-center gap-[16px]">
        <TokenIcon />
        <h3 className="font-semibold text-2xl text-[#0F172A]">
          Set up your cash Balance
        </h3>
        <div className="grid gap-[12px] w-full">
          <input
            className="px-[16px] py-[12px] w-full rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] text-[#A3A3A3]"
            placeholder="Cash Balance"
            type="number"
          />
          <p className="text-xs font-normal flex-wrap text-[#475569]">
            How much cash do you have in your wallet?
          </p>
        </div>
      </div>
      <Button
        text="Confirm"
        onClick={() => {
          setPage(3);
        }}
      />
    </div>
  );
}
export function Done() {
  const router = useRouter();
  return (
    <div className="grid gap-[32px] w-[384px]">
      <div className="flex flex-col items-center gap-[16px]">
        <DoneIcon />
        <h3 className="font-semibold text-2xl text-[#0F172A]">Good Job!</h3>
        <div className="grid gap-[12px] w-full">
          <p className="text-xs font-normal flex-wrap text-[#475569]">
            Your very first account has been created. Now continue to dashboard
            and start tracking
          </p>
        </div>
      </div>

      <Button
        text="Go to Dashboard"
        onClick={() => {
          router.push("/dashboard");
        }}
      />
    </div>
  );
}
