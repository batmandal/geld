"use client";
import { Header } from "@/components/Header";

export default function Records() {
  return (
    <div className="w-full h-screen bg-[#F3F4F6]">
      <Header />
      <div className="px-[120px] py-[24px] flex gap-[24px]">
        <div className="min-w-[282px] bg-white rounded-xl border border-[#E5E7EB] px-[16px] py-[24px] flex flex-col gap-[24px]">
          <div className="grid gap-[24px]">
            <h3 className="font-semibold text-2xl text-black">Records</h3>
            <button className=" py-[4px] flex justify-center rounded-[20px] bg-[#0166FF] w-full text-white font-normal text-base">
              + Add
            </button>
          </div>
          <input
            placeholder="search"
            className="px-[16px] py-[4px] rounded-lg w-full border border-[#D1D5DB] bg-[#F3F4F6]"
          />
          <div className="flex flex-col gap-[16px]">
            <h4 className="text-[#1F2937] font-semibold text-base">Types</h4>
            <form className="grid gap-1">
              <div>
                <input type="radio" className="" name="all" />
                <label htmlFor="all">All</label>
              </div>
              <div>
                <input type="radio" className="bg-white" name="income" />
                <label htmlFor="income">Income</label>
              </div>
              <div>
                <input type="radio" className="bg-white" name="expense" />
                <label htmlFor="expense">Expense</label>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="flex items-center justify-between">
              <h4 className="text-[#1F2937] font-semibold text-base">
                Category
              </h4>
              <button className="px-[12px]">Clear</button>
            </div>
            <div></div>
            <button className="px-[12px] py-[6px] font-normal text-base text-[#1F2937]">
              + Add Category
            </button>
          </div>
          <div className="flex flex-col gap-[16px] w-full">
            <h4 className="text-[#1F2937] font-semibold text-base">
              Amount Range
            </h4>
            <div className="flex flex-col gap-[16px]">
              <div className="flex gap-[16px]">
                <span className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] bg-[#F3F4F6]">
                  0
                </span>
                <span className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] bg-[#F3F4F6]">
                  0
                </span>
              </div>
              <input type="range" min="0" max="1000" className="w-full" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
