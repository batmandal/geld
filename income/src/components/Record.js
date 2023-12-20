import { House } from "@/assets/svg/House";

export function Record() {
  return (
    <div className="flex items-center justify-between bg-white border-b border-[#D1D5DB] py-5">
      <div className="flex gap-4 ">
        <House />
        <div>
          <p className="text-black font-normal text-base">Lenging & Rending</p>
          <p className="font-normal text-[#6B7280] text-xs">3 hours ago</p>
        </div>
      </div>
      <p className="font-semibold text-base text-[#84CC16]">1000</p>
    </div>
  );
}
