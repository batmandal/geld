import { House } from "@/assets/svg/House";

export function ChildRecord() {
  return (
    <div className="rounded-xl bg-white px-6 py-3 border border-[#E5E7EB] w-full flex items-center justify-between">
      <div className="flex gap-4">
        <input type="checkbox" className="w-[24px] " />
        <House />
        <div>
          <p>Lending & Renting</p>
          <p className="text-xs font-normal text-[#6B7280]">14:00</p>
        </div>
      </div>
      <div>- 1000</div>
    </div>
  );
}
