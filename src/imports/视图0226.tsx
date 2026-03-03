import clsx from "clsx";
import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import svgPaths from "./svg-2sgx4hqxfj";
import editIconPaths from "./svg-naxoqjoaqx";
import imgImage175 from "../assets/07884702c16b2420ccbd3eb7d05a5da0915afc98.png";
import imgTarget3DIcon1 from "../assets/a10a93686bfc58f319e9356046d25bdef767d1c3.png";
import imgSubtract from "../assets/82dcf3f1b1ea540b8074ca060eda6f05625ed083.png";
import imgImage105 from "../assets/ecc0f9a35745a3978035995a150c1be89d900c10.png";
import imgImage106 from "../assets/166a6c8c6a76cddac3385fbd5baa5b9e244ba63b.png";
import imgFrame1321320024 from "../assets/46be3417b8ca93a34ed52f87c7d9d9b483abe50b.png";
import imgFrame1321320023 from "../assets/56f6461600e3622bd71c95822ca32a9fcc588a10.png";
import imgFrame1321320022 from "../assets/53b4e82626ea6e704713d868c8cab9ee76edf084.png";
import imgLightBulb3DIcon1 from "../assets/462a8d0577bfc15c359a74c8bafacdc2bb202e11.png";
import { imgImage174 } from "./svg-xo2i3";
import DynamicCircleProgress from "../app/components/DynamicCircleProgress";
import { TrendChart } from "../app/components/TrendChart";
import type { PowerMapData, Attitude } from "../app/App";
import TopTitle from "./顶部标题";

// 数字滚动动画组件
function AnimatedNumber({ value, className }: { value: number; className?: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  const prevValueRef = useRef(value);

  useEffect(() => {
    const prevValue = prevValueRef.current;
    if (prevValue === value) return;

    const duration = 800; // 滚动持续时间
    const startTime = Date.now();
    const diff = value - prevValue;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // 使用缓动函数
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(prevValue + diff * easeOutCubic);
      
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        prevValueRef.current = value;
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <span className={className}>{displayValue}</span>;
}

type Component14BackgroundImageProps = {
  additionalClassNames?: string;
};

function Component14BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<Component14BackgroundImageProps>) {
  return (
    <div className={clsx("absolute size-[12px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-[#ebebf0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_16px_0px_rgba(100,103,122,0.12)]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[20px] relative w-full">{children}</div>
    </div>
  );
}

function FrameBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex gap-[2px] h-full items-center px-[4px] py-px relative">{children}</div>
    </div>
  );
}

function BackgroundImage6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[6px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div className={clsx("relative rounded-[16px] shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-0 border-[#ebebf0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_16px_0px_rgba(100,103,122,0.12)]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center px-[16px] py-[20px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
};

function BackgroundImageAndText3({ text, children }: React.PropsWithChildren<BackgroundImageAndText3Props>) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="h-[12px] relative shrink-0 w-[16.286px]" data-name="Subtract">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2857 12">
          {children}
        </svg>
      </div>
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2a2b33] text-[13px] text-center">{text}</p>
    </div>
  );
}

function FrameBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage5>
      <g id="Frame">{children}</g>
    </BackgroundImage5>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div className={clsx("flex-none", additionalClassNames)}>
      <div className="h-px relative w-[4px]" data-name="Line 1 (Stroke)">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 1">
          {children}
        </svg>
      </div>
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div className="content-stretch flex h-[49px] items-center justify-center px-[24px] py-[10px] relative rounded-[999px] shrink-0">
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2b33] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">{text}</p>
      </div>
    </div>
  );
}

function BackgroundImage2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[12px] relative rounded-[inherit] size-full">
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex font-['PingFang_SC:Medium',sans-serif] gap-[10px] items-start leading-[40px] not-italic p-[8px] relative text-[22px] tracking-[0.44px] w-full whitespace-pre-wrap">
          <p className="[text-decoration-skip-ink:none] absolute decoration-solid left-[8px] text-[#dcdde5] top-[8px] underline w-[206px]">{"在“智在记录”的设计规范中，商业化设计的五个核心原则是什么？"}</p>
          <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#414352]">{"在“智在记录”的设计规范中，商业化设计的五个核心原则是什么？"}</p>
        </div>
      </div>
    </div>
  );
}

function ImageBackgroundImage() {
  return (
    <div className="relative rounded-[1498.5px] shadow-[0px_8px_24px_0px_rgba(100,103,122,0.24)] shrink-0 size-[48px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1498.5px] size-full m-[0px]" src={imgImage106} />
    </div>
  );
}

// 动态态度标签组件
function AttitudeLabel({ attitude }: { attitude: Attitude }) {
  const attitudeConfig = {
    "积极": { color: "#02B342", textColor: "#9092a3" },
    "中立": { color: "#417FFB", textColor: "#9092a3" },
    "抵触": { color: "#F23030", textColor: "#9092a3" }
  };

  const config = attitudeConfig[attitude];

  return (
    <motion.div 
      className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0"
      layout
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <BackgroundImage6>
        <circle cx="3" cy="3" fill={config.color} id="Ellipse 301" r="3" />
      </BackgroundImage6>
      <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] whitespace-nowrap">
        <p 
          className="leading-[18px]"
          style={{
            color: attitude === '中立' ? '#4A90E2' : attitude === '积极' ? '#52C41A' : '#FF4D4F'
          }}
        >
          {attitude}
        </p>
      </div>
    </motion.div>
  );
}

type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <BackgroundImage6>
        <circle cx="3" cy="3" fill="var(--fill-0, #02B342)" id="Ellipse 301" r="3" />
      </BackgroundImage6>
      <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9092a3] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">{text}</p>
      </div>
    </div>
  );
}
type BackgroundImage1Props = {
  text: string;
  text1: string;
};

function BackgroundImage1({ text, text1 }: BackgroundImage1Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#414352] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">{text}</p>
      </div>
      <div className="bg-[#f0f7ff] h-[20px] relative rounded-[4px] shrink-0" data-name="标签/属性标签">
        <BackgroundImage7>
          <p className="font-['PingFang_SC:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#417ffb] text-[12px]">{text1}</p>
        </BackgroundImage7>
        <div aria-hidden="true" className="absolute border-0 border-[#417ffb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <BackgroundImage6>
        <circle cx="3" cy="3" fill="var(--fill-0, #417FFB)" id="Ellipse 301" r="3" />
      </BackgroundImage6>
      <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9092a3] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">{text}</p>
      </div>
    </div>
  );
}
type XItemValueXBackgroundImageAndTextProps = {
  text: string;
};

function XItemValueXBackgroundImageAndText({ text }: XItemValueXBackgroundImageAndTextProps) {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center relative size-full">
          <div className="flex h-[4px] items-center justify-center relative shrink-0 w-px" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <BackgroundImage3 additionalClassNames="rotate-90">
              <path clipRule="evenodd" d="M0 1V0H4V1H0Z" fill="var(--fill-0, #EBEBF0)" fillRule="evenodd" id="Line 1 (Stroke)" />
            </BackgroundImage3>
          </div>
          <p className="font-['PingFang_SC:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9092a3] text-[12px] text-center">{text}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="h-px relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f2f3f5] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}
type YYBackgroundImageAndTextProps = {
  text: string;
};

function YYBackgroundImageAndText({ text }: YYBackgroundImageAndTextProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-end relative w-full">
          <p className="font-['PingFang_SC:Regular',sans-serif] leading-[0px] not-italic relative shrink-0 text-[#9092a3] text-[12px] text-right">{text}</p>
          <div className="flex items-center justify-center relative shrink-0">
            <BackgroundImage3 additionalClassNames="rotate-180">
              <path clipRule="evenodd" d="M4 1H0V0H4V1Z" fill="var(--fill-0, #EBEBF0)" fillRule="evenodd" id="Line 1 (Stroke)" />
            </BackgroundImage3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component({ confidence = 52, powerMap }: { confidence?: number; powerMap?: PowerMapData }) {
  return (
    <div className="bg-white relative w-full min-h-full" data-name="视图0226">
      <div className="absolute h-[515px] left-0 top-0 w-[390px]">
        <div className="absolute contents left-0 top-0" data-name="背景图">
          <div className="absolute blur-[50px] h-[774px] left-[-46px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[46px_234px] mask-size-[390px_515px] top-[-234px] w-[436px]" data-name="image 174" style={{ maskImage: `url('${imgImage174}')` }}>
            
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[4px] items-center left-[99px] top-[20px] w-[192px]">
        <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#2a2b33] text-[24px] w-full whitespace-pre-wrap">政企智慧运营项目</p>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <div className="relative shrink-0 size-[24px]" data-name="Target  3D Icon 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTarget3DIcon1} />
          </div>
          <p className="font-['PingFang_SC:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#2a2b33] text-[0px] text-[14px]">
            <span className="font-['PingFang_SC:Regular',sans-serif] leading-[22px]">项目阶段：</span>
            <span className="leading-[22px]">商务博弈阶段</span>
          </p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[16px] items-start left-1/2 top-[99.86px] pb-[81px] w-[358px]">
        <BackgroundImage8>
          {/* 顶部标题组件 - 橙色渐变背景框，在白色卡片内部，间距16px */}
          <div className="mb-[4px]">
            <TopTitle />
          </div>
          <div className="content-stretch flex flex-col gap-[19px] items-center relative shrink-0 w-full">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="主图形">
              <div className="col-1 ml-[11.77px] mt-[0.59px] relative row-1 size-[240px]">
                <div className="absolute inset-[-25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 360">
                    <g filter="url(#filter0_d_1_2171)" id="Ellipse 286">
                      <circle cx="180" cy="180" fill="#ffffff" r="120" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="360" id="filter0_d_1_2171" width="360" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feMorphology in="SourceAlpha" operator="dilate" radius="20" result="effect1_dropShadow_1_2171" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="20" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.470588 0 0 0 0 0.0588235 0 0 0 0.09 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2171" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2171" mode="normal" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <motion.div 
                className="col-1 h-[239.983px] ml-[11.93px] mt-[0.59px] relative row-1 w-[240.67px]" 
                data-name="外环"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 60, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{ transformOrigin: '50% 50%' }}
              >
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240.67 239.983">
                  <g id="å¤ç¯">
                    <g id="Subtract">
                      <mask fill="#ffffff" id="path-1-inside-1_1_2052">
                        <path d={svgPaths.p7f73c00} />
                      </mask>
                      {/* 底层：白色扇形（始终存在） */}
                      <path 
                        d={svgPaths.p7f73c00} 
                        fill="#ffffff"
                        stroke="#ffffff" 
                        strokeWidth="0.5"
                      />
                      {/* 顶层：淡橙色扇形（飞入动画） */}
                      <motion.path 
                        d={svgPaths.p7f73c00} 
                        fill="#FFD7B9"
                        stroke="#ffffff" 
                        strokeWidth="0.5"
                        initial={{
                          x: confidence >= 60 ? 0 : -80,
                          y: confidence >= 60 ? 0 : -80,
                          scale: confidence >= 60 ? 1 : 1.8,
                          opacity: confidence >= 60 ? 1 : 0
                        }}
                        animate={{
                          x: confidence >= 60 ? 0 : -80,
                          y: confidence >= 60 ? 0 : -80,
                          scale: confidence >= 60 ? 1 : 1.8,
                          opacity: confidence >= 60 ? 1 : 0
                        }}
                        transition={{ 
                          duration: 0.7,
                          ease: [0.34, 1.56, 0.64, 1],
                          scale: { type: "spring", stiffness: 200, damping: 15 },
                          x: { type: "spring", stiffness: 200, damping: 15 },
                          y: { type: "spring", stiffness: 200, damping: 15 }
                        }}
                        style={{
                          transformOrigin: "120px 120px",
                          transformBox: "fill-box"
                        }}
                      />
                      {/* 内部边框动画 */}
                      <motion.path 
                        d={svgPaths.pe7f8280} 
                        mask="url(#path-1-inside-1_1_2052)"
                        animate={{
                          fill: confidence >= 60 ? "#ffffff00" : "#FE780F"
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                    </g>
                    <motion.path 
                      d={svgPaths.p2421b800} 
                      id="Subtract_2" 
                      stroke="#ffffff" 
                      strokeWidth="0.5"
                      animate={{
                        fill: confidence >= 60 ? "#FE780F" : "#FFE4CF"
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    <motion.path 
                      d={svgPaths.p150c6b00} 
                      fill="#FE780F" 
                      id="Subtract_3" 
                      stroke="#ffffff" 
                      strokeWidth="0.5"
                    />
                    <motion.path 
                      d={svgPaths.p223dbd00} 
                      id="Subtract_4" 
                      stroke="#ffffff" 
                      strokeWidth="0.5"
                      animate={{
                        fill: confidence >= 80 ? "#FE780F" : "#FFE4CF"
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    <motion.path 
                      d={svgPaths.p2292c1b0} 
                      fill="#FE780F" 
                      id="Subtract_5" 
                      stroke="#ffffff" 
                      strokeWidth="0.5"
                    />
                  </g>
                  <defs>
                    <radialGradient cx="0" cy="0" gradientTransform="matrix(134.876 48 -37.9942 106.166 123.845 117.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_2052" r="1">
                      <stop stopColor="#FFE4CF" />
                      <stop offset="0.310297" stopColor="#FFF5EE" />
                      <stop offset="0.511839" stopColor="#FFE7D4" />
                      <stop offset="0.730509" stopColor="#FFD6B6" />
                      <stop offset="1" stopColor="#FFE4CF" />
                    </radialGradient>
                    <radialGradient cx="0" cy="0" gradientTransform="matrix(248.693 -66 52.2421 195.757 -125.349 184)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_2052" r="1">
                      <stop stopColor="#FFE4CF" />
                      <stop offset="0.310297" stopColor="#FFF5EE" />
                      <stop offset="0.511839" stopColor="#FFE7D4" />
                      <stop offset="0.730509" stopColor="#FFD6B6" />
                      <stop offset="1" stopColor="#FFE4CF" />
                    </radialGradient>
                  </defs>
                </svg>
              </motion.div>
              <div className="col-1 ml-[80.77px] mt-[69.59px] relative row-1 size-[102px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Ellipse 280" />
                </svg>
              </div>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[72.77px] mt-[61.59px] place-items-start relative row-1" data-name="环形图">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[118px]" data-name="Ellipse 隐藏">
                  <div className="absolute inset-[-4.24%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 128">
                      <circle cx="64" cy="64" fill="var(--fill-0, white)" id="Ellipse éè" r="59" stroke="var(--stroke-0, #FFEFE1)" strokeWidth="10" />
                    </svg>
                  </div>
                </div>
                <div className="col-1 h-[118px] ml-[0px] mt-0 relative row-1 w-[118px]">
                  <div className="absolute inset-[-6.78%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 128" style={{ transform: 'rotate(-90deg)' }}>
                      <g filter="url(#filter0_d_1_2155_circle)" id="Ellipse_284_progress">
                        {/* 红色圆环 - 当信心指数 < 60 时显示 */}
                        <motion.circle
                          cx="64"
                          cy="64"
                          r="54"
                          stroke="#F23030"
                          strokeWidth="10"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={2 * Math.PI * 54}
                          initial={{ 
                            strokeDashoffset: 2 * Math.PI * 54,
                            opacity: confidence < 60 ? 1 : 0
                          }}
                          animate={{ 
                            strokeDashoffset: 2 * Math.PI * 54 * (1 - confidence / 100),
                            opacity: confidence < 60 ? 1 : 0
                          }}
                          transition={{ 
                            strokeDashoffset: { duration: 0.8, ease: "easeInOut" },
                            opacity: { duration: 0.6, ease: "easeInOut" }
                          }}
                        />
                        {/* 橙色渐变圆环 - 当信心指数 60-79 时显示 */}
                        <motion.circle
                          cx="64"
                          cy="64"
                          r="54"
                          stroke="url(#paint0_linear_1_2155_circle)"
                          strokeWidth="10"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={2 * Math.PI * 54}
                          initial={{ 
                            strokeDashoffset: 2 * Math.PI * 54,
                            opacity: (confidence >= 60 && confidence < 80) ? 1 : 0
                          }}
                          animate={{ 
                            strokeDashoffset: 2 * Math.PI * 54 * (1 - confidence / 100),
                            opacity: (confidence >= 60 && confidence < 80) ? 1 : 0
                          }}
                          transition={{ 
                            strokeDashoffset: { duration: 0.8, ease: "easeInOut" },
                            opacity: { duration: 0.6, ease: "easeInOut" }
                          }}
                        />
                        {/* 绿色圆环 - 当信心指数 >= 80 时显示 */}
                        <motion.circle
                          cx="64"
                          cy="64"
                          r="54"
                          stroke="#02B342"
                          strokeWidth="10"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={2 * Math.PI * 54}
                          initial={{ 
                            strokeDashoffset: 2 * Math.PI * 54,
                            opacity: confidence >= 80 ? 1 : 0
                          }}
                          animate={{ 
                            strokeDashoffset: 2 * Math.PI * 54 * (1 - confidence / 100),
                            opacity: confidence >= 80 ? 1 : 0
                          }}
                          transition={{ 
                            strokeDashoffset: { duration: 0.8, ease: "easeInOut" },
                            opacity: { duration: 0.6, ease: "easeInOut" }
                          }}
                        />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="136" id="filter0_d_1_2155_circle" width="136" x="-6" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="8" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.392157 0 0 0 0 0.403922 0 0 0 0 0.478431 0 0 0 0.12 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2155_circle" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2155_circle" mode="normal" result="shape" />
                        </filter>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2155_circle" x1="64" x2="64" y1="10" y2="118">
                          <stop stopColor="#FFA946" />
                          <stop offset="1" stopColor="#FE780F" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="col-1 ml-[15px] mt-[15px] relative row-1 size-[88px]">
                  <div className="absolute inset-[-18.18%_-27.27%_-36.36%_-27.27%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 136">
                      <g filter="url(#filter0_d_1_2050)" id="Ellipse 282">
                        <circle cx="68" cy="60" fill="url(#paint0_radial_1_2050)" r="44" />
                        <circle cx="68" cy="60" r="42.5" stroke="#ffffff" strokeWidth="3" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="136" id="filter0_d_1_2050" width="136" x="0" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="8" />
                          <feGaussianBlur stdDeviation="12" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.470588 0 0 0 0 0.0588235 0 0 0 0.21 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2050" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2050" mode="normal" result="shape" />
                        </filter>
                        <radialGradient cx="0" cy="0" gradientTransform="translate(75.5 -40.5) rotate(88.5856) scale(162.049)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_2050" r="1">
                          <stop stopColor="#FFD7B9" />
                          <stop offset="0.49859" stopColor="#FFFBF8" />
                          <stop offset="1" stopColor="#FFEBDC" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="col-1 content-stretch flex flex-col items-center ml-[36px] mt-[27px] relative row-1">
                  <motion.div 
                    className="font-['Bebas_Neue:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-center tracking-[-1.44px] w-full whitespace-pre-wrap"
                    animate={{ 
                      color: confidence < 60 ? '#F23030' : confidence < 80 ? '#fe780f' : '#02B342'
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <AnimatedNumber value={confidence} className="leading-[normal] text-[40px]" />
                    <span className="leading-[normal] text-[36px]">{` `}</span>
                    <span className="leading-[normal] text-[20px] tracking-[-0.8px]">%</span>
                  </motion.div>
                </div>
                <p className="col-1 font-['Alimama_ShuHeiTi:Bold',sans-serif] leading-[18px] ml-[38px] mt-[69px] not-italic relative row-1 text-[#2A2B33] text-[11px] text-center">
                  信心指数
                </p>
              </div>
              <motion.div 
                className="col-1 h-[179.389px] ml-[calc(50%-94.13px)] mt-[38.48px] relative row-1 w-[185.973px]" 
                data-name="C T N A B"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 60, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{ transformOrigin: '51% 45.8%' }}
              >
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 185.973 179.389">
                  <g id="C T N A B">
                    <path d={svgPaths.p36aede00} fill="var(--fill-0, #2A2B33)" id="Vector" />
                    <path d={svgPaths.p21a512c0} fill="var(--fill-0, #2A2B33)" id="Vector_2" />
                    <path d={svgPaths.p27013900} fill="var(--fill-0, #2A2B33)" id="Vector_3" />
                    <path d={svgPaths.p141a09f0} fill="var(--fill-0, #2A2B33)" id="Vector_4" />
                    <path d={svgPaths.p342d9200} fill="var(--fill-0, #2A2B33)" id="Vector_5" />
                  </g>
                </svg>
              </motion.div>
              <div className="col-1 h-[29.001px] ml-[calc(50%+86.93px)] mt-[17.93px] relative row-1 w-[27.137px] hidden" data-name="（缺失）">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.137 29.0007">
                  <g id="ï¼ç¼ºå¤±ï¼">
                    <path d={svgPaths.p3201df00} fill="var(--fill-0, black)" fillOpacity="0.52" id="Vector" />
                    <path d={svgPaths.p348c3c00} fill="var(--fill-0, black)" fillOpacity="0.52" id="Vector_2" />
                    <path d={svgPaths.p2dc6a600} fill="var(--fill-0, black)" fillOpacity="0.52" id="Vector_3" />
                    <path d={svgPaths.p2973aa00} fill="var(--fill-0, black)" fillOpacity="0.52" id="Vector_4" />
                  </g>
                </svg>
              </div>
              <motion.div 
                className="col-1 h-[261.275px] ml-[calc(50%-134.82px)] mt-0 relative row-1 w-[269.645px]" 
                data-name="竞猜 时间 需求 权力 预算"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 60, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{ transformOrigin: '50% 46.2%' }}
              >
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 269.645 261.275"><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></g><g id="ç«ç æ¶é´ éæ± æå é¢ç®">
                    <path d={svgPaths.p53a5f00} fill="var(--fill-0, #FE780F)" id="Vector" />
                    <path d={svgPaths.p32becd00} fill="var(--fill-0, #FE780F)" id="Vector_2" />
                    <path d={svgPaths.p27cc4200} fill="var(--fill-0, #FE780F)" id="Vector_3" />
                    <path d={svgPaths.p1f985700} fill="var(--fill-0, #FE780F)" id="Vector_4" />
                    <path d={svgPaths.p3a2f7e70} fill="var(--fill-0, #FE780F)" id="Vector_5" />
                    <path d={svgPaths.p32535700} fill="var(--fill-0, #FE780F)" id="Vector_6" />
                    <path d={svgPaths.p38f60700} fill="var(--fill-0, #FE780F)" id="Vector_7" />
                    <path d={svgPaths.p19dacc80} fill="var(--fill-0, #FE780F)" id="Vector_8" />
                    <path d={svgPaths.p2e81b780} fill="var(--fill-0, #FE780F)" id="Vector_9" />
                    <path d={svgPaths.p2b11ce00} fill="var(--fill-0, #FE780F)" id="Vector_10" />
                  </g></svg>
              </motion.div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[159px]">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="指标">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fe780f] text-[0px] w-[50px]">
                      <p className="text-[14px] whitespace-pre-wrap">
                        <span className="leading-[22px]">{` `}</span>
                        <span className="leading-[22px] text-[#9092a3]">较上周</span>
                      </p>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0">
                      <FrameBackgroundImage>
                        <path d={svgPaths.p37cd7d00} fill="var(--fill-0, #FE780F)" id="Vector" />
                      </FrameBackgroundImage>
                      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fe780f] text-[15px] whitespace-nowrap">
                        <p className="leading-[24px]">+12%</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[15.75px]" data-name="Vector">
                    <div className="absolute inset-[0_-25.4%_-50.79%_-25.4%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.75 23.75">
                        <g filter="url(#filter0_d_1_2122)" id="Vector">
                          <path d={svgPaths.p1b5b2f00} fill="url(#paint0_linear_1_2122)" />
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.75" id="filter0_d_1_2122" width="23.75" x="0" y="0">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.576471 0 0 0 0 0.243137 0 0 0 0.14 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2122" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2122" mode="normal" result="shape" />
                          </filter>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2122" x1="11.875" x2="11.875" y1="0" y2="15.75">
                            <stop stopColor="#FFBA84" />
                            <stop offset="1" stopColor="#FE780F" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="图例">
                  <BackgroundImageAndText3 text="明确">
                    <path d={svgPaths.p7db9f00} fill="var(--fill-0, #FE780F)" id="Subtract" />
                  </BackgroundImageAndText3>
                  <BackgroundImageAndText3 text="模糊">
                    <path d={svgPaths.p7db9f00} fill="url(#paint0_radial_1_2106)" id="Subtract" />
                    <defs>
                      <radialGradient cx="0" cy="0" gradientTransform="matrix(-19.5 19 -27.5195 -11.0693 19.1426 -4.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_2106" r="1">
                        <stop stopColor="#FFE4CF" />
                        <stop offset="0.310297" stopColor="#FFF5EE" />
                        <stop offset="0.511839" stopColor="#FFE7D4" />
                        <stop offset="0.730509" stopColor="#FFD6B6" />
                        <stop offset="1" stopColor="#FFE4CF" />
                      </radialGradient>
                    </defs>
                  </BackgroundImageAndText3>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <div className="h-[12px] relative shrink-0 w-[16.286px]" data-name="Subtract">
                      <img alt="" className="absolute block max-w-none size-full" height="12" src={imgSubtract} width="16.286" />
                    </div>
                    <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2a2b33] text-[13px] text-center">缺失</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64677a] text-[13px] whitespace-nowrap">
                    <p className="leading-[20px]">已明确信息</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0">
                    <div className="relative shrink-0 size-[14px]" data-name="Frame">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                        <g id="Frame">
                          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #9092A3)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                    <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9092a3] text-[12px] whitespace-nowrap">
                      <p className="leading-[18px]">展开</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <div className="bg-[#f7f8fa] content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-[326px]">
                    <div aria-hidden="true" className="absolute border-[#fe780f] border-l-2 border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-[14px] w-full">
                      <div className="flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center min-w-full relative shrink-0 text-[#2a2b33] w-[min-content]">
                        <p className="leading-[26px] whitespace-pre-wrap">B 预算</p>
                      </div>
                      <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center relative shrink-0 text-[#414352] whitespace-nowrap">
                        <p className="leading-[26px]">财务总监明确表达由数字化专款拨付，上限50万</p>
                      </div>
                    </div>
                    <div className="-translate-y-1/2 absolute bg-clip-text flex flex-col font-['Quantico:Bold',sans-serif] justify-center leading-[0] left-[277px] not-italic opacity-26 text-[52px] text-[transparent] top-[38px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(194.274deg, rgb(178, 178, 178) 7.824%, rgba(194, 194, 194, 0.17) 116.69%)", WebkitTextFillColor: "transparent" }}>
                      <p className="leading-[48px]">B</p>
                    </div>
                  </div>
                  <div className="bg-[#f7f8fa] content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-[326px]">
                    <div aria-hidden="true" className="absolute border-[#fe780f] border-l-2 border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 w-full">
                      <div className="flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center min-w-full relative shrink-0 text-[#2a2b33] text-[14px] w-[min-content]">
                        <p className="leading-[26px] whitespace-pre-wrap">N 需求</p>
                      </div>
                      <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[#414352] text-[14px] w-[min-content]">
                        <p className="leading-[26px] whitespace-pre-wrap">CEO全权负责本项目，技术负责人是XX..</p>
                      </div>
                      <div className="-translate-y-1/2 absolute bg-clip-text flex flex-col font-['Quantico:Bold',sans-serif] justify-center left-[260px] opacity-26 text-[48px] text-[transparent] top-[26px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(193.893deg, rgb(178, 178, 178) 7.824%, rgba(194, 194, 194, 0.17) 116.69%)", WebkitTextFillColor: "transparent" }}>
                        <p className="leading-[48px]">N</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BackgroundImage8>
        <BackgroundImage8>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="2">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2b33] text-[16px] text-center">成交信心走向</p>
              <div className="content-stretch flex items-center relative shrink-0">
                <FrameBackgroundImage>
                  <path d={svgPaths.p19c7d6f0} fill="var(--fill-0, #FE780F)" id="Vector" />
                </FrameBackgroundImage>
                <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fe780f] text-[15px] whitespace-nowrap">
                  <p className="leading-[24px]">上升</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 w-full">
              <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#9092a3] text-[13px] whitespace-nowrap">
                <p className="leading-[20px]">周期：2026.02.18 - 2026.02.20</p>
              </div>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                <div className="col-1 content-stretch flex gap-[2px] items-center ml-0 mt-0 not-italic relative row-1 text-center whitespace-nowrap">
                  <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center relative shrink-0 text-[#9092a3] text-[13px]">
                    <p className="leading-[20px]">累计拜访：</p>
                  </div>
                  <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center relative shrink-0 text-[#2a2b33] text-[20px] tracking-[1px] uppercase">
                    <p className="leading-[normal]">3</p>
                  </div>
                  <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center relative shrink-0 text-[#9092a3] text-[13px]">
                    <p className="leading-[20px]">次</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start pt-[12px] relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-[200px] items-start min-h-px min-w-px relative" data-name="坐标系">
                <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="坐标系">
                  <div className="content-stretch flex flex-col h-full items-end justify-between pb-[20px] relative shrink-0" data-name="Y轴刻度">
                    <YYBackgroundImageAndText text="100" />
                    <YYBackgroundImageAndText text="75" />
                    <YYBackgroundImageAndText text="50" />
                    <YYBackgroundImageAndText text="25" />
                    <YYBackgroundImageAndText text="0" />
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="内容">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="刻度线">
                      <div className="content-stretch flex flex-col items-start justify-between relative size-full">
                        <BackgroundImage />
                        <BackgroundImage />
                        <BackgroundImage />
                        <BackgroundImage />
                        <div className="h-px relative shrink-0 w-full" data-name="元素/坐标网格线">
                          <div aria-hidden="true" className="absolute border border-[#ebebf0] border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      {/* 真实趋势图 */}
                      <TrendChart confidence={confidence ?? 52} />
                    </div>
                    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="X轴刻度">
                      <XItemValueXBackgroundImageAndText text="2月18日" />
                      <XItemValueXBackgroundImageAndText text="2月19日" />
                      <XItemValueXBackgroundImageAndText text="2月20日" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="3">
            <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2b33] text-[16px] text-center">关键拐点</p>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="bg-[#f7f8fa] relative rounded-[8px] shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
                    <p className="flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#414352] text-[13px] text-ellipsis whitespace-nowrap">2.18 分数上升是因为竞品 B 介入报价</p>
                    <div className="content-stretch flex items-center relative shrink-0">
                      <FrameBackgroundImage1>
                        <g id="Frame">
                          <path d={svgPaths.p2ce3eb2} fill="var(--fill-0, #FE780F)" id="Vector" />
                        </g>
                      </FrameBackgroundImage1>
                      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fe780f] text-[13px] whitespace-nowrap">
                        <p className="leading-[20px]">上升 13%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BackgroundImage8>
        <div className="relative rounded-[16px] shrink-0 w-full bg-white h-[410px]">
          <div aria-hidden="true" className="absolute border-0 border-[#ebebf0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_16px_0px_rgba(100,103,122,0.12)]" />
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[24px] items-center px-[16px] py-[20px] relative w-full">
              <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2b33] text-[16px]">权力地图</p>
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g>
                        <path d={editIconPaths.p38f39800} stroke="#2A2B33" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={editIconPaths.p85cdd00} stroke="#2A2B33" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <div className="col-1 h-[100px] ml-[138px] mt-[123.5px] relative row-1 w-[92px]">
                <div className="absolute inset-[-0.34%_-0.4%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.7359 100.677">
                    <motion.path 
                      d={svgPaths.p2c0ef568} 
                      id="Vector 260" 
                      stroke="var(--stroke-0, #B0B2BF)"
                      strokeDasharray="8 6"
                      animate={{
                        strokeDashoffset: [0, -14]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </svg>
                </div>
              </div>
              <div className="col-1 h-[79px] ml-[54px] mt-[123.5px] relative row-1 w-[84px]">
                <div className="absolute inset-[-0.46%_-0.41%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.6851 79.7285">
                    <motion.path 
                      d={svgPaths.p30e27680} 
                      id="Vector 261" 
                      stroke="var(--stroke-0, #B0B2BF)"
                      strokeDasharray="8 6"
                      animate={{
                        strokeDashoffset: [0, -14]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.2
                      }}
                    />
                  </svg>
                </div>
              </div>
              <div className="col-1 h-[99.5px] ml-[32.5px] mt-[24px] relative row-1 w-[105.5px]">
                <div className="absolute inset-[-0.37%_-0.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106.186 100.227">
                    <motion.path 
                      d={svgPaths.pce201c0} 
                      id="Vector 262" 
                      stroke="var(--stroke-0, #B0B2BF)"
                      strokeDasharray="8 6"
                      animate={{
                        strokeDashoffset: [0, -14]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.4
                      }}
                    />
                  </svg>
                </div>
              </div>
              <div className="col-1 h-[81.5px] ml-[138px] mt-[42px] relative row-1 w-[98px]">
                <div className="absolute inset-[-0.47%_-0.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.6394 82.2689">
                    <motion.path 
                      d={svgPaths.p2598b6c0} 
                      id="Vector 263" 
                      stroke="var(--stroke-0, #B0B2BF)"
                      strokeDasharray="8 6"
                      animate={{
                        strokeDashoffset: [0, -14]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.6
                      }}
                    />
                  </svg>
                </div>
              </div>
              <div className="col-1 h-px ml-[203px] mt-[235px] row-1 w-[2px]" />
              <div className="col-1 ml-[calc(50%-81.5px)] mt-[calc(50%-113px)] relative row-1 size-[144px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 144">
                  <g id="Group 1321317223">
                    <motion.circle 
                      cx="72" 
                      cy="72" 
                      fill="url(#paint0_radial_1_2021)" 
                      id="Ellipse 304" 
                      opacity="0.08" 
                      r="71.5" 
                      stroke="var(--stroke-0, #FE780F)"
                      animate={{
                        r: [71.5, 75, 71.5],
                        opacity: [0.08, 0.12, 0.08]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0
                      }}
                    />
                    <motion.circle 
                      cx="72" 
                      cy="72" 
                      fill="url(#paint1_radial_1_2021)" 
                      id="Ellipse 302" 
                      opacity="0.18" 
                      r="55.5" 
                      stroke="var(--stroke-0, #FE780F)"
                      animate={{
                        r: [55.5, 59, 55.5],
                        opacity: [0.18, 0.25, 0.18]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    />
                    <motion.circle 
                      cx="72" 
                      cy="72" 
                      fill="url(#paint2_radial_1_2021)" 
                      id="Ellipse 303" 
                      opacity="0.18" 
                      r="39.5" 
                      stroke="var(--stroke-0, #FE780F)"
                      animate={{
                        r: [39.5, 43, 39.5],
                        opacity: [0.18, 0.28, 0.18]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                  </g>
                  <defs>
                    <radialGradient cx="0" cy="0" gradientTransform="translate(72 72) rotate(90) scale(72)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_2021" r="1">
                      <stop stopColor="#FE780F" />
                      <stop offset="1" stopColor="#FE780F" stopOpacity="0.34" />
                    </radialGradient>
                    <radialGradient cx="0" cy="0" gradientTransform="translate(72 72) rotate(90) scale(56)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_2021" r="1">
                      <stop stopColor="#FE780F" />
                      <stop offset="1" stopColor="#FE780F" stopOpacity="0.34" />
                    </radialGradient>
                    <radialGradient cx="0" cy="0" gradientTransform="translate(72 72) rotate(90) scale(40)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_2021" r="1">
                      <stop stopColor="#FE780F" />
                      <stop offset="1" stopColor="#FE780F" stopOpacity="0.34" />
                    </radialGradient>
                  </defs>
                </svg>
                {/* 张总CEO - 固定在波纹中心 */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 content-stretch flex flex-col gap-[6px] items-center justify-center">
                  <div className="relative rounded-[1498.5px] shadow-[0px_8px_24px_0px_rgba(100,103,122,0.24)] shrink-0 size-[48px]" data-name="image 105">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1498.5px] size-full" src={imgImage105} />
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                    <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#414352] text-[12px] whitespace-nowrap">
                      <p className="leading-[18px]">张总</p>
                    </div>
                    <div className="bg-[#fffbe6] h-[20px] relative rounded-[4px] shrink-0" data-name="标签/属性标签">
                      <BackgroundImage7>
                        <p className="font-['PingFang_SC:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#faaf0c] text-[12px]">CEO</p>
                      </BackgroundImage7>
                      <div aria-hidden="true" className="absolute border-0 border-[#faaf0c] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    </div>
                  </div>
                  <BackgroundImageAndText text="中立" />
                </div>
              </div>
              {/* 李梅 HR - 动态位置 */}
              <motion.div 
                className="col-1 content-stretch flex flex-col gap-[6px] items-center justify-center relative row-1"
                animate={{
                  marginLeft: powerMap?.liMei.ml ?? 28,
                  marginTop: powerMap?.liMei.mt ?? 177
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <ImageBackgroundImage />
                <BackgroundImage1 text="李梅" text1="HR" />
                <AttitudeLabel attitude={powerMap?.liMei.attitude ?? "积极"} />
              </motion.div>
              {/* 王工 采购 - 动态位置 */}
              <motion.div 
                className="col-1 content-stretch flex flex-col gap-[6px] items-center justify-center relative row-1"
                animate={{
                  marginLeft: powerMap?.wangGong.ml ?? 219,
                  marginTop: powerMap?.wangGong.mt ?? 212
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <ImageBackgroundImage />
                <BackgroundImage1 text="王工" text1="采购" />
                <AttitudeLabel attitude={powerMap?.wangGong.attitude ?? "抵触"} />
              </motion.div>
              {/* 许工 技术 - 动态位置 */}
              <motion.div 
                className="col-1 content-stretch flex flex-col gap-[6px] items-center justify-center relative row-1"
                animate={{
                  marginLeft: powerMap?.xuGong.ml ?? 0,
                  marginTop: powerMap?.xuGong.mt ?? 0
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <ImageBackgroundImage />
                <BackgroundImage1 text="许工" text1="技术" />
                <AttitudeLabel attitude={powerMap?.xuGong.attitude ?? "中立"} />
              </motion.div>
              {/* 赵工 销售 - 动态位置 */}
              <motion.div 
                className="col-1 content-stretch flex flex-col gap-[6px] items-center justify-center relative row-1"
                animate={{
                  marginLeft: powerMap?.zhaoGong.ml ?? 207,
                  marginTop: powerMap?.zhaoGong.mt ?? 15
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <ImageBackgroundImage />
                <BackgroundImage1 text="赵工" text1="销售" />
                <AttitudeLabel attitude={powerMap?.zhaoGong.attitude ?? "积极"} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <BackgroundImage4 additionalClassNames="bg-[#fdecde]">
          <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[#2a2b33] text-[16px] w-[min-content] whitespace-pre-wrap">战术行动</p>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="col-1 h-[320px] ml-[37px] mt-[32px] relative rounded-[20px] row-1 w-[210px]">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
                <div className="absolute bg-white inset-0 rounded-[20px]" />
                <img alt="" className="absolute max-w-none object-cover rounded-[20px] size-full" src={imgFrame1321320024} />
              </div>
              <BackgroundImage2 />
              <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_40px_0px_rgba(255,166,63,0.16)]" />
            </div>
            <div className="col-1 h-[321px] ml-[18px] mt-[16px] relative rounded-[20px] row-1 w-[248px]">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
                <div className="absolute bg-white inset-0 rounded-[20px]" />
                <img alt="" className="absolute max-w-none object-cover rounded-[20px] size-full" src={imgFrame1321320023} />
              </div>
              <BackgroundImage2 />
              <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_40px_0px_rgba(255,166,63,0.16)]" />
            </div>
            <div className="col-1 h-[322px] ml-0 mt-0 relative rounded-[20px] row-1 w-[284px]">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
                <div className="absolute bg-white inset-0 rounded-[20px]" />
                <img alt="" className="absolute max-w-none object-cover rounded-[20px] size-full" src={imgFrame1321320022} />
              </div>
              <div className="content-stretch flex flex-col items-start justify-between overflow-clip px-[16px] py-[20px] relative rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                    <div className="relative shrink-0 size-[20px]" data-name="Light Bulb  3D Icon 1">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLightBulb3DIcon1} />
                    </div>
                    <p className="font-['PingFang_SC:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#2a2b33] text-[16px]">建议策略1：攻坚针对</p>
                  </div>
                  <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#414352] text-[14px] w-full">
                    <p className="leading-[22px] whitespace-pre-wrap">攻坚针对王工担心的“停工损失”，准备一份《无感切换保障协议》</p>
                  </div>
                  <div className="bg-[#f7f8fa] relative rounded-[8px] shrink-0 w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
                        <div className="flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#414352] text-[0px]">
                          <p className="text-[#2a2b33] text-[14px] whitespace-pre-wrap">
                            <span className="font-['PingFang_SC:Semibold',sans-serif] leading-[22px]">出发点：</span>
                            <span className="font-['PingFang_SC:Regular',sans-serif] leading-[22px]">王工是主要技术负责人，需要打消他的担忧，才有可能增加项目胜算</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_40px_0px_rgba(255,166,63,0.16)]" />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
            <BackgroundImage5>
              <g id="Frame">
                <path d={svgPaths.p17163f80} fill="url(#paint0_linear_1_1998)" id="Vector" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1998" x1="13" x2="13" y1="16.5" y2="1">
                  <stop stopColor="#FE780F" stopOpacity="0.35" />
                  <stop offset="1" stopColor="#FE780F" />
                </linearGradient>
              </defs>
            </BackgroundImage5>
            <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2a2b33] text-[13px]">5/10 张战术卡片</p>
          </div>
        </BackgroundImage4>
        <div className="bg-white content-stretch flex items-center justify-between p-[2px] fixed bottom-[16px] left-1/2 -translate-x-1/2 rounded-[999px] shrink-0 w-[358px] z-50 hidden" data-name="时间轴">
          <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px] shadow-[0px_4px_16px_0px_rgba(100,103,122,0.12)]" />
          <div className="bg-[#fe780f] content-stretch flex h-[49px] items-center justify-center px-[24px] py-[10px] relative rounded-[999px] shrink-0">
            <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
              <p className="leading-[22px]">2月18日</p>
            </div>
          </div>
          <BackgroundImageAndText2 text="2月19日" />
          <BackgroundImageAndText2 text="2月20日" />
        </div>
      </div>
    </div>
  );
}