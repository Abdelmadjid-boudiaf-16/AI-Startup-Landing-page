import React from 'react'

const Planet = () => {
  return (
    <>
      {" "}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 md:h-96 md:w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-purple-500 bg-[radial-gradient(50%_50%_at_23.8%_19.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,64))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]" />
      <div className="absolute h-[344px] w-[344px] md:w-[580px] md:h-[580px] rounded-full border border-white opacity-20">
        <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        <div className="absolute right-0 top-1/2 flex h-5 w-5 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-white">
          <div className="h-2 w-2 rounded-full bg-white" />
        </div>
      </div>
      <div className="absolute h-[444px] md:h-[780px] w-[444px] md:w-[780px] rounded-full border border-white opacity-20"></div>
      <div className="absolute h-[544px] md:h-[980px] w-[544px] md:w-[980px] rounded-full border border-white opacity-20">
        <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white" />
      </div>
    </>
  );
}

export default Planet