export function Check(props) {
  return (
    <div className="w-60 h-12 grid gap-3 mt-20">
      <div className="px-4 relative flex flex-col justify-center">
        <div className="flex absolute w-52 justify-center">
          <div className="w-[92px] h-[5px] bg-[#E5E7EB]"></div>
          <div className="w-[92px] h-[5px] bg-[#E5E7EB]"></div>
        </div>
        <div className="flex w-52 absolute items-center h-fit justify-between">
          <div
            style={{ background: `${props.color}` }}
            className="w-6 h-6 text-[#0F172A] rounded-full bg-[#E5E7EB] grid place-content-center"
          >
            1
          </div>
          <div
            style={{ background: `${props.color1}` }}
            className="w-6 h-6 text-[#0F172A] rounded-full bg-[#E5E7EB] grid place-content-center"
          >
            2
          </div>
          <div className="w-6 h-6 text-[#0F172A] rounded-full bg-[#E5E7EB] grid place-content-center">
            3
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <p className="w-fit">Currency</p>
        <p className="w-fit">Balance</p>
        <p className="w-fit">Finish</p>
      </div>
    </div>
  );
}
