"use client";

export function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className=" py-[10px] rounded-[20px] bg-[#0166FF] w-full text-white"
      style={{ background: props.bg }}
      onSubmit={props.onSubmit}
    >
      {props.text}
    </button>
  );
}
