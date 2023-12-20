"use client";

import { DoneIcon } from "@/assets/svg/DoneIcon";
import { MoneyIcon } from "@/assets/svg/MoneyIcon";
import { TokenIcon } from "@/assets/svg/TokenIcon";
import { Button } from "@/components/Button";
import { useContext } from "react";
import { pageContext } from "@/app/layout";
import Link from "next/link";
import { Check } from "@/components/Check";

export default function General() {
  const { page, setPage } = useContext(pageContext);

  if (page == 1) {
    return (
      <div className="w-full h-screen flex flex-col gap-20 items-center bg-white">
        <Check color="#0166FF" />
        <Currency />
      </div>
    );
  } else if (page == 2) {
    return (
      <div className="w-full h-screen flex flex-col items-center bg-white">
        <Check color1="#0166FF" />
        <Balance />
      </div>
    );
  } else if (page !== 2) {
    return (
      <div className="w-full h-screen flex flex-col items-center bg-white">
        <Done />
      </div>
    );
  }
}

export function Currency() {
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
      <Button text="Confirm" />
    </div>
  );
}
export function Balance() {
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
      <Button text="Confirm" />
    </div>
  );
}
export function Done() {
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
      <Link href="/dashboard">
        <Button text="Go to Dashboard" />
      </Link>
    </div>
  );
}
