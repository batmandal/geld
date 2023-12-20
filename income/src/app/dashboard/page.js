"use client";

import { Down } from "@/assets/svg/Down";
import { Up } from "@/assets/svg/Up";
import { Header } from "@/components/Header";
import { Record } from "@/components/Record";

export default function Dashboard() {
  return (
    <div className="w-full h-screen bg-[#F3F4F6]">
      <Header />
      <div className="px-[120px] flex flex-col gap-[24px] py-[32px]">
        <div className="flex gap-[24px]">
          <div className="bg-white w-full rounded-xl "></div>
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
              <p>Jun 1 - Nov 30</p>
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
