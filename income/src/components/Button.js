"use client";
import { pageContext } from "@/app/layout";
import { useContext } from "react";

export function Button(props) {
  const { page, setPage } = useContext(pageContext);
  console.log(page);
  return (
    <button
      onClick={() => {
        setPage(page + 1);
      }}
      className=" py-[10px] rounded-[20px] bg-[#0166FF] w-full text-white"
    >
      {props.text}
    </button>
  );
}
