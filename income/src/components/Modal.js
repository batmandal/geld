"use client";

import { Exit } from "@/assets/svg/Exit";
import { Button } from "./Button";

import { useState } from "react";
import { useAuth } from "@/components/providers/AuthProviders";
import { UnderIcon } from "@/assets/svg/UnderIcon";
import { AddIcon } from "@/assets/svg/AddIcon";
import { Modal2 } from "./Modal2";

import * as icons from "../icons/category-icons";

Object.values(icons);

export function Modal(props) {
  const [budget, setBudget] = useState(true);
  const { setDisplay, addRecord, name, setIsModal, recordIcon, recordColor } =
    useAuth();
  const [show, setShow] = useState(false);
  // const [isShow, setIsShow] = useState(false);
  const [payee, setPayee] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const [recordType, setRecordType] = useState("income");

  return (
    <div
      style={{
        position: props.position,
        display: props.display,
        transform: "translate(-50%, -50%)",
      }}
      className="min-w-[792px] bg-white z-20  top-2/4 left-2/4 relative  rounded-xl "
    >
      <div className="px-6 py-5 w-full border-b flex justify-between border-[#D1D5DB]">
        <h3 className="font-semibold text-[#0F172A] text-xl">Add Record</h3>
        <button>
          <Exit
            onClick={() => {
              setDisplay(false);
              setIsModal(false);
            }}
          />
        </button>
      </div>
      <div className="w-full">
        <div className="flex w-full">
          <div className="p-6 w-full grid gap-5 relative ">
            <div className="w-full flex bg-[#F3F4F6] rounded-[100px]">
              <button
                className={`font-normal text-base w-full  rounded-[100px] items-center flex justify-center text-[#1F2937]`}
                style={{
                  background: budget ? "#0166FF" : "",
                  color: budget ? "#F9FAFB" : "",
                }}
                onClick={() => {
                  setBudget(true);
                }}
              >
                Expense
              </button>
              <button
                onClick={() => {
                  setBudget(false);
                  setRecordType("expense");
                }}
                style={{
                  background: budget ? "" : "#16A34A",
                  color: budget ? "" : "#F9FAFB",
                }}
                className="font-normal text-base w-full rounded-[100px] items-center flex text-[#1F2937] justify-center"
              >
                Income
              </button>
            </div>
            <div className="grid gap-2 w-full py-3 px-[16px] rounded-lg border border-[#D1D5DB] bg-[#F3F4F6]">
              <p className="font-normal text-base text-[#1F2937]">Amount</p>
              <input
                type="number"
                onChange={(event) => {
                  setAmount(event.target.value);
                }}
                placeholder="000.00"
                className="bg-[#F3F4F6]"
              />
            </div>
            <div className="grid gap-2 w-full rounded-lg">
              <p className="font-normal text-base text-[#1F2937]">Category</p>
              <div className="py-[12px] px-[16px] w-full rounded-lg border border-[#D1D5DB] bg-[#F3F4F6]">
                <div className=" w-full bg-[#F3F4F6] flex justify-between">
                  Find or choose category
                  <button
                    onClick={() => {
                      show === false ? setShow(true) : setShow(false);
                    }}
                  >
                    <UnderIcon />
                  </button>
                </div>
              </div>
              <FindCategory display={show ? "block" : "none"} />
            </div>
            <form className="flex gap-3">
              <div className="grid gap-2">
                <p className="font-normal text-base text-[#1F2937]">Date</p>
                <input
                  type="date"
                  onChange={(event) => {
                    setDate(event.target.value);
                  }}
                  className="py-[12px] px-[16px] w-full rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] text-[#0F172A]"
                />
              </div>
              <div className="grid gap-2">
                <p className="font-normal text-base text-[#1F2937]">Time</p>
                <input
                  type="time"
                  onChange={(event) => {
                    setTime(event.target.value);
                  }}
                  className="py-[12px] px-[16px] w-full rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] text-[#0F172A]"
                />
              </div>
            </form>
            <Button
              bg={budget ? "#0166FF" : "#16A34A"}
              text="Add Record"
              onClick={() => {
                addRecord(
                  amount,
                  // date,
                  // time,
                  // payee,
                  note,
                  recordType,
                  name,
                  recordIcon,
                  recordColor
                );
                setDisplay(false);
              }}
            />
          </div>
          <div className="p-6 grid gap-[22px] w-full">
            <div className="grid gap-2">
              <p className="font-normal text-base text-[#1F2937]">Payee</p>
              <form className="py-[12px] px-[16px] w-full rounded-lg border border-[#D1D5DB] bg-[#F3F4F6]">
                <select
                  placeholder="Write Here"
                  className=" w-full bg-[#F3F4F6]"
                  onChange={(event) => {
                    setPayee(event.target.value);
                  }}
                >
                  <option>Khan Bank</option>
                  <option>State Bank</option>
                  <option>Golomt Bank</option>
                </select>
              </form>
            </div>
            <div className="grid gap-2 w-full">
              <p className="font-normal text-base text-[#1F2937]">Note</p>
              <textarea
                type="textarea"
                onChange={(event) => {
                  setNote(event.target.value);
                }}
                placeholder="Write here"
                className="py-3 px-4 w-full min-h-[280px] rounded-lg border border-[#D1D5DB] bg-[#F3F4F6]"
              ></textarea>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <Modal2 />
    </div>
  );
}
export function FindCategory(props) {
  const {
    setIsModal,
    getCategories,
    setName,
    categories,
    setCategories,
    setRecordIcon,
    setRecordColor,
  } = useAuth();

  const [activeTab, setActiveTab] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await getCategories();

  //     setCategories(res);
  //   };
  //   getData();
  // }, [refresh]);

  return (
    <div
      className="min-w-[356px] top-[275px] rounded-lg absolute bg-white shadow-2xl"
      style={{ display: props.display }}
    >
      <div
        onClick={() => {
          setIsModal(true);
        }}
        className="flex gap-3 p-4 w-full border-b  border-[#D1D5DB] cursor-pointer"
      >
        <button>
          <AddIcon />{" "}
        </button>
        <p className="font-normal text-base text-black">Add category</p>
      </div>
      <div>
        {categories.map((item) => {
          const Icon = icons[item.isIcon];
          const style = { fontSize: "24px" };

          // console.log(Icon, item.isIcon);

          return (
            <div
              className="p-4 flex items-center gap-3 "
              style={{
                background: item === activeTab ? "#F3F4F6" : "white",
              }}
              onClick={() => {
                setName(item.categoryName);
                setActiveTab(item);
                setRecordIcon(item.isIcon);
                setRecordColor(item.isColor);
              }}
            >
              <span
                style={{ color: item.isColor }}
                className="grid place-content-center"
              >
                <Icon style={style} />
              </span>
              <span>{item.categoryName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
