"use client";

export const Landing = () => {
  return (
    <div className="bg-[#E7E7E3] h-screen w-screen">
      <div className="flex flex-row place-content-center gap-32 pt-36 ">
        <div className="flex flex-col w-[667.08px] gap-12">
          <h1 className="text-7xl font-semibold leading-snug">
            Improve your speaking skill with native speakers!
          </h1>
          <button className="bg-[#151514] text-white rounded-[20px] py-5 px-9 w-[316px] font-medium text-4xl">
            Start Speaking
          </button>
        </div>
        <div className="flex bg-[#747474] w-[437px] h-[451px] rounded-[59px] items-center justify-center">
          <p className="text-white w-[327px] font-semibold text-7xl">
            Image will come later
          </p>
        </div>
      </div>
    </div>
  );
};
