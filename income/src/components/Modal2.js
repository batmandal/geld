"use client";
import { UnderIcon } from "@/assets/svg/UnderIcon";
import { Button } from "./Button";
import { Exit } from "@/assets/svg/Exit";

import { useState } from "react";
import { useAuth } from "@/components/providers/AuthProviders";
import * as icons from "@/icons/category-icons";

Object.values(icons);

const colorChoice = [
  "#0166FF",
  "#01B3FF",
  "#41CC00",
  "#F9D100",
  "#FF7B01",
  "#AE01FF",
  "#FF0101",
];

export function Modal2(props) {
  const {
    isIcon,
    isColor,
    addCategory,
    setCategoryName,
    categoryName,
    setIsModal,
    isModal,
    setIsShow,
  } = useAuth();
  const [show, setShow] = useState(false);

  const Icon1 = icons[isIcon];

  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
        display: `${isModal == false ? "none" : "block"}`,
        // display: props.display,
      }}
      className="min-w-[494px] bg-white z-20  top-2/4 left-2/4 absolute rounded-xl  shadow-2xl"
    >
      <div className="px-6 py-5 w-full border-b flex justify-between border-[#E2E8F0]">
        <h3 className="font-semibold text-[#0F172A] text-xl">Add Category</h3>
        <button
          onClick={() => {
            setIsModal(false);
            setIsShow(false);
          }}
        >
          <Exit />
        </button>
      </div>
      <div className="p-6 grid gap-8 relative">
        <form className="flex gap-3 ">
          <div className="w-[84px] h-full justify-between bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg p-3 flex ">
            <span style={{ color: isColor }}>
              <Icon1 style={{ fontSize: "24px" }} />
            </span>
            <button
              onClick={(e) => {
                e.preventDefault();
                show === true ? setShow(false) : setShow(true);
              }}
            >
              <UnderIcon />
            </button>
          </div>
          <span className="w-full bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg px-4 py-3 flex">
            <input
              type="text"
              placeholder="Name"
              className="bg-[#F9FAFB] w-full text-black"
              onChange={(event) => {
                setCategoryName(event.target.value);
              }}
            />
            <UnderIcon />
          </span>
        </form>
        <Icons display={`${show ? "block" : "none"}`} />
        <Button
          bg="#16A34A"
          text="Add Category"
          onClick={() => {
            addCategory(categoryName, isIcon, isColor);
            setIsModal(false);
            setIsShow(false);
          }}
        />
      </div>
    </div>
  );
}
export function Icons(props) {
  const { setIsIcon, setIsColor } = useAuth();

  return (
    <div
      className="bg-white p-6 rounded-lg absolute top-2/4 left-6 shadow-2xl"
      style={{ display: props.display }}
    >
      <span className="grid grid-cols-6 gap-6 text-black pb-6">
        {Object.keys(icons).map((key, index) => {
          const Icon = icons[key];
          const style = { fontSize: "24px" };

          return (
            <div
              onClick={() => {
                console.log(key);
                setIsIcon(key);
              }}
              className="flex w-[24px] h-[24px] justify-center items-center ] "
              key={index}
            >
              <Icon style={style} />
            </div>
          );
        })}
      </span>
      <span className="flex gap-4 pt-6 border-t border-[#D1D5DB] justify-center">
        {colorChoice.map((item) => (
          <div
            onClick={() => {
              setIsColor(item);
            }}
            className={`rounded-full w-[24px] h-[24px]`}
            style={{ background: item }}
            key={item}
          ></div>
        ))}
      </span>
    </div>
  );
}
