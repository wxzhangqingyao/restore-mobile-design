import svgPaths from "./svg-3v3ui3r3it";

export default function Component() {
  return (
    <div className="relative w-[326px] h-[76px] mx-auto" data-name="顶部标题">
      <style>{`
        @keyframes ecg-wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-29px);
          }
        }
        .ecg-animation {
          animation: ecg-wave 1.5s linear infinite;
        }
      `}</style>
      <div className="-translate-x-1/2 absolute h-[56px] left-1/2 top-0 w-[326px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 56">
          <path d={svgPaths.pbf5fc80} fill="url(#paint0_linear_2010_112)" id="Rectangle 346241245" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2010_112" x1="163" x2="163" y1="0" y2="53">
              <stop stopColor="#FFBD93" />
              <stop offset="0.282352" stopColor="#FFA15E" />
              <stop offset="0.561912" stopColor="#FE913F" />
              <stop offset="1" stopColor="#FE780F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bg-[#02b342] content-stretch flex h-[24px] items-center justify-center left-[262px] px-[10px] py-[2px] rounded-[24px] top-[16px]">
        <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">健康</p>
      </div>
      <div className="absolute h-[20.99px] left-[16px] top-[17px] w-[58px] overflow-hidden">
        <div className="absolute inset-[-0.55%_0] ecg-animation">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 21.2213">
            <path d={svgPaths.pf1cec00} id="Vector 267" stroke="var(--stroke-0, white)" strokeWidth="1.10476" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-[#ffa466] h-[20px] left-0 opacity-15 to-[rgba(255,164,102,0)] top-[56px] w-[326px]" />
      <p className="-translate-x-1/2 absolute font-['YouSheBiaoTiHei:Regular',sans-serif] leading-[22px] left-1/2 not-italic text-[22px] text-center text-white top-[17px] whitespace-nowrap">实时信心呼吸舱</p>
    </div>
  );
}