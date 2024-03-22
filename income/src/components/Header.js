import { SoloLogo } from "@/assets/svg/SoloLogo";

import { useRouter } from "next/navigation";

export function Header(props) {
  const router = useRouter();

  return (
    <div className="w-full px-[120px] py-[16px] flex justify-between bg-white ">
      <div className="flex gap-[24px] items-center justify-between w-fit h-fit">
        <SoloLogo />
        <div
          className="text-[#0F172A] cursor-pointer font-normal text-base"
          href="/dashboard"
          onClick={() => {
            router.push("/dashboard");
          }}
          style={{ fontWeight: `${props.fontWeight}` }}
        >
          Dashboard
        </div>
        <div
          className="text-[#0F172A] cursor-pointer font-normal text-base"
          href="/records"
          onClick={() => {
            router.push("/records");
          }}
          style={{ fontWeight: `${props.fontWeight1}` }}
        >
          Records
        </div>
      </div>
      <div className="flex items-center gap-[24px]">
        <button
          onClick={props.onClick}
          className=" py-[2px] px-[12px] rounded-[20px] bg-[#0166FF] w-fit text-white font-normal text-base"
        >
          + Record
        </button>

        <img src="/Avatar.svg" />
      </div>
    </div>
  );
}
