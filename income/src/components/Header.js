import { SoloLogo } from "@/assets/svg/SoloLogo";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function Header() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const router = useRouter();
  return (
    <div className="w-full px-[120px] py-[16px] flex justify-between bg-white ">
      <div className="flex gap-[24px] items-center justify-between w-fit h-fit">
        <SoloLogo />
        <div
          className="text-[#0F172A] cursor-pointer text-base"
          href="/dashboard"
          onClick={() => {
            setActiveTab("Dashboard"), router.push("/dashboard");
          }}
          style={{ fontWeight: activeTab == "Dashboard" ? 600 : 400 }}
        >
          Dashboard
        </div>
        <div
          className="text-[#0F172A] cursor-pointer text-base"
          href="/records"
          onClick={() => {
            setActiveTab("Records"), router.push("/records");
          }}
          style={{ fontWeight: activeTab == "Records" ? 600 : 400 }}
        >
          Records
        </div>
      </div>
      <div className="flex items-center gap-[24px]">
        <button className=" py-[2px] px-[12px] rounded-[20px] bg-[#0166FF] w-fit text-white font-normal text-base">
          + Record
        </button>
        <img src="/Avatar.svg" />
      </div>
    </div>
  );
}
