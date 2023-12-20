import { LoadingLogo } from "@/assets/svg/LoadingLogo";
export default function Loading() {
  return (
    <div className="bg-white w-full h-screen flex flex-col justify-center items-center gap-[48px]">
      <LoadingLogo />
      <div className="flex flex-col gap-[16px] items-center justify-center">
        <span className="loading loading-spinner text-info"></span>
        <p className="text-base text-[#0F172A] font-semibold">
          Түр хүлээнэ үү...
        </p>
      </div>
    </div>
  );
}
