"use client";
import { Header } from "@/components/Header";
import { Modal } from "@/components/Modal";
import { useEffect, useState } from "react";
import { Modal2 } from "@/components/Modal2";
import { ChildRecord } from "@/components/ChildRecord";
import { useAuth } from "@/components/providers/AuthProviders";
import { Eye } from "@/assets/svg/Eye";
import { UnderIcon } from "@/assets/svg/UnderIcon";
import { LeftIcon } from "@/assets/svg/LeftIcon";

import * as icons from "@/icons/category-icons";
Object.values(icons);

export default function Records() {
  const {
    display,
    setDisplay,
    getRecords,
    categories,
    setIsModal,
    isShow,
    setIsShow,
    refresh,
    setRefresh,
    records,
    setRecords,
  } = useAuth();
  // const [isShow, setIsShow] = useState(false);
  const [radio, setRadio] = useState(true);

  // const [isCheck, setIsChecked] = useState(true);

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await getRecords();
  //     setRecords(res);
  //   };
  //   getData();
  // }, [refresh]);

  return (
    <div className={`w-full  bg-[#F3F4F6] h-[100vh] `}>
      <span
        className={`w-screen h-[1150px] bg-black absolute opacity-30 ${
          display ? "flex" : "hidden" && isShow ? "flex" : "hidden"
        }`}
        onClick={() => {
          setDisplay(false);
          setIsShow(false);
          setIsModal(false);
        }}
      />
      <Header
        fontWeight1="600"
        onClick={() => {
          setDisplay(true);
        }}
      />
      <Modal position="absolute" display={display ? "block" : "none"} />
      <Modal2
        onClick={() => {
          setIsShow(false);
        }}
        display={isShow ? "block" : "none"}
      />
      <div className="px-[120px] py-[24px] flex gap-[24px]">
        <div className="min-w-[282px] h-[100%] bg-white rounded-xl border border-[#E5E7EB] px-[16px] py-[24px] flex flex-col gap-[24px]">
          <div className="grid gap-[24px]">
            <h3 className="font-semibold text-2xl text-black">Records</h3>
            <button
              onClick={() => {
                setDisplay(true);
              }}
              className=" py-[4px] flex justify-center rounded-[20px] bg-[#0166FF] w-full text-white font-normal text-base"
            >
              + Add
            </button>
          </div>
          <input
            placeholder="Search"
            className="px-[16px] py-[4px] rounded-lg w-full border border-[#D1D5DB] bg-[#F3F4F6]"
          />
          <div className="flex flex-col gap-[16px]">
            <h4 className="text-[#1F2937] font-semibold text-base">Types</h4>
            <form className="grid gap-1">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="radio"
                  // checked={true}
                  // onClick={set}
                />
                <label htmlFor="all">All</label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="radio" />
                <label htmlFor="income">Income</label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="radio" />
                <label htmlFor="expense">Expense</label>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="flex items-center justify-between">
              <h4 className="text-[#1F2937] font-semibold text-base">
                Category
              </h4>
              <button className="px-[12px] text-base font-normal text-[#D1D5DB]">
                Clear
              </button>
            </div>
            <div>
              {categories.map((item) => {
                return (
                  <div className="px-3 py-[6px] flex justify-between w-full h-fit">
                    <span className="flex items-center gap-2">
                      <Eye />
                      <p className="text-[#1F2937] font-normal text-base">
                        {item.categoryName}
                      </p>
                    </span>
                    <LeftIcon />
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => {
                setIsShow(true);
                setIsModal(true);
              }}
              className="px-[12px] py-[6px] font-normal text-base text-[#1F2937] hover:text-[#0166FF] cursor-pointer"
            >
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
        <div className="w-full">
          <div className="flex justify-between mb-4">
            <span className="flex gap-4 items-center">
              <button className="bg-[#E5E7EB] grid place-content-center w-8 h-8 rounded-lg">
                {"<"}
              </button>
              <p className="font-normal text-base">Last 30 days</p>
              <button className="bg-[#E5E7EB] grid place-content-center w-8 h-8 rounded-lg">
                {">"}
              </button>
            </span>
            <span className="flex px-[16px] min-w-[180px] justify-between py-[12px] border border-[#E5E7EB] rounded-xl bg-white">
              <p className="font-semibold text-base">Newest first</p>
              <button>
                <UnderIcon />
              </button>
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex py-3 px-6 justify-between rounded-xl bg-white border border-[#E5E7EB]">
              <div className="flex gap-4">
                <input className="w-[24px]" type="checkbox" />
                <p className="font-normal text-base text-black">Select all</p>
              </div>
              <p>- 35,500</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-black text-base">Today</p>
              <div className=" h-[30vh] overflow-scroll">
                {records.map((item) => {
                  const Icon2 = icons[item.recordIcon];
                  return (
                    <div className="rounded-xl bg-white px-6 py-3 border border-[#E5E7EB] w-full flex items-center justify-between">
                      <div className="flex gap-4">
                        <input type="checkbox" className="w-[24px] " />
                        <div
                          className={`w-[40px] h-[40px] rounded-full "
                        }"
                        }`}
                          style={{
                            // background:
                            //   item.recordType === "expense" ? "#0166FF" : "#111",
                            background: item.recordColor,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {
                            <Icon2
                              style={{ fontSize: "24px", color: "white" }}
                            />
                          }
                        </div>
                        <div>
                          <p>{item.name}</p>
                          <p className="text-xs font-normal text-[#6B7280]">
                            14:00
                          </p>
                        </div>
                      </div>
                      <div style={{ color: item.recordColor }}>
                        {item.amount}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="font-semibold text-black text-base">Yesterday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
