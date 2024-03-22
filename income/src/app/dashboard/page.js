"use client";

import { Down } from "@/assets/svg/Down";
import { Up } from "@/assets/svg/Up";
import { Header } from "@/components/Header";
import { Modal } from "@/components/Modal";
import { Record } from "@/components/Record";
import { useEffect } from "react";
import { useAuth } from "@/components/providers/AuthProviders";
import { useRouter } from "next/navigation";
import { CardLogo } from "@/assets/svg/CardLogo";

export default function Dashboard() {
  const { display, setDisplay } = useAuth();
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn === false) {
      router.push("/log-in");
    }
  }, [isLoggedIn]);

  // if (isLoggedIn ==) return null;

  return (
    <div className="w-full h-screen bg-[#F3F4F6] relative">
      <span
        className={`w-screen h-screen bg-black absolute opacity-30 ${
          display ? "flex" : "hidden"
        }`}
        onClick={() => {
          setDisplay(false);
        }}
      />
      <Header
        fontWeight="600"
        onClick={() => {
          setDisplay(true);
        }}
      />
      <Modal position="absolute" display={display ? "block" : "none"} />
      <div className="px-[120px] flex flex-col gap-[24px] py-[32px]">
        <div className="flex gap-[24px]">
          <div className=" w-full rounded-xl bg-[#0166FF] overflow-hidden relative ">
            <img src="/Noise.svg" className="w-full h-full " />
            <img src="/Shape.svg" className="absolute bottom-0 right-0 " />
            <img src="/Frame.svg" className="absolute left-[36px] top-[36px]" />
            <div className="absolute bottom-[36px] left-[36px] w-fit">
              <p className="text-base font-normal text-[#D1D5DB] w-fit">Cash</p>
              <div className="flex items-center justify-between min-w-[320px]">
                {" "}
                <p className="font-semibold text-[#fff] text-2xl">10,000,000</p>
                <CardLogo />
              </div>
            </div>
          </div>
          <div className="bg-white w-full rounded-xl ">
            <div className="flex py-[16px] px-[24px] border-b border-[#F3F4F6]">
              <span />
              <h4 className="text-[#0F172A] font-semibold text-base">
                Total Expenses
              </h4>
            </div>
            <div className="px-[24px] py-[20px]">
              <div>
                <p className="font-semibold text-4xl text-black">120000</p>
              </div>

              <p className="font-normal text-lg text-[#64748B]">
                your income amount
              </p>
            </div>
            <div className="flex px-[24px] pb-[20px] gap-1 ietms-center">
              <Up />
              <p className="font-normal text-lg text-black">32%</p>
              <p className="font-normal text-lg text-black">from last month</p>
            </div>
          </div>
          <div className="bg-white w-full rounded-xl ">
            <div className="flex py-[16px] px-[24px] border-b border-[#F3F4F6]">
              <span />
              <h4 className="text-[#0F172A] font-semibold text-base">
                Total Expenses
              </h4>
            </div>
            <div className="px-[24px] py-[20px]">
              <div>
                <p className="font-semibold text-4xl text-black">120000</p>
              </div>

              <p className="font-normal text-lg text-[#64748B]">
                your income amount
              </p>
            </div>
            <div className="flex px-[24px] pb-[20px] gap-1 items-center">
              <Down />
              <p className="font-normal text-lg text-black">32%</p>
              <p className="font-normal text-lg text-black">from last month</p>
            </div>
          </div>
        </div>
        <div className="flex gap-[24px]">
          <div className="bg-white w-full rounded-xl ">
            <div className="px-[24px] py-[16px] border-b border-[#F3F4F6] text-[#0F172A] font-semibold text-base">
              Income - Expense
            </div>
            <div className="px-[24px] py-[32px]"></div>
          </div>
          <div className="bg-white w-full rounded-xl ">
            <div className="px-[24px] flex justify-between py-[16px] border-b border-[#F3F4F6] ">
              <p className="text-[#0F172A] font-semibold text-base">
                Income - Expense
              </p>
              <p className="text-[#6B7280]">Jun 1 - Nov 30</p>
            </div>
            <div className="px-[24px] py-[32px]"></div>
          </div>
        </div>
        <div className=" bg-white rounded-xl ">
          <h3 className="border-b px-[24px] py-[16px] border-[#F3F4F6] text-[#0F172A] font-semibold text-base">
            Last Records
          </h3>
          <div className="px-[24px]">
            <Record />
          </div>
        </div>
      </div>
    </div>
  );
}
