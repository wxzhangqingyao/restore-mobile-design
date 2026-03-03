import { motion } from "motion/react";

interface DynamicCircleProgressProps {
  percentage: number;
}

export default function DynamicCircleProgress({ percentage }: DynamicCircleProgressProps) {
  // 计算环形进度的路径
  // 环形图的半径为59，strokeWidth为10
  const radius = 59;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[72.77px] mt-[61.59px] place-items-start relative row-1" data-name="环形图">
      {/* 背景圆环 */}
      <div className="col-1 ml-0 mt-0 relative row-1 size-[118px]" data-name="Ellipse 隐藏">
        <div className="absolute inset-[-4.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 128">
            <circle cx="64" cy="64" fill="var(--fill-0, white)" id="Ellipse_hidden" r="59" stroke="var(--stroke-0, #FFEFE1)" strokeWidth="10" />
          </svg>
        </div>
      </div>
      
      {/* 进度圆环 - 使用motion来动画化strokeDashoffset */}
      <div className="col-1 h-[118px] ml-[51px] mt-0 relative row-1 w-[67px]">
        <div className="absolute inset-[-14.41%_-31.34%_-21.19%_-31.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 109.001 160">
            <g filter="url(#filter0_d_1_2155)" id="Ellipse_284">
              <motion.path
                d="M29.0006 17C41.2261 17 53.1497 20.7978 63.1232 27.8684C73.0967 34.9391 80.6274 44.9333 84.6743 56.4696C88.7213 68.0059 89.0846 80.5144 85.714 92.2661C82.3435 104.018 75.4055 114.432 65.8593 122.07C56.313 129.707 44.63 134.191 32.425 134.901C28.5916 135.123 24.7661 134.971 21.0006 134.455"
                stroke="url(#paint0_linear_1_2155)"
                strokeLinecap="round"
                strokeWidth="10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: percentage / 100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="160" id="filter0_d_1_2155" width="109.001" x="-9.53674e-07" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.392157 0 0 0 0 0.403922 0 0 0 0 0.478431 0 0 0 0.12 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2155" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2155" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2155" x1="27.5006" x2="21.0006" y1="17" y2="135">
                <stop stopColor="#FFA946" />
                <stop offset="1" stopColor="#FE780F" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* 中心圆球 */}
      <div className="col-1 ml-[15px] mt-[15px] relative row-1 size-[88px]">
        <div className="absolute inset-[-18.18%_-27.27%_-36.36%_-27.27%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 136">
            <g filter="url(#filter0_d_1_2050)" id="Ellipse_282">
              <circle cx="68" cy="60" fill="url(#paint0_radial_1_2050)" r="44" />
              <circle cx="68" cy="60" r="42.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
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
      
      {/* 百分比数字 - 使用motion来动画化数字变化 */}
      <div className="col-1 content-stretch flex flex-col items-center ml-[36px] mt-[27px] relative row-1">
        <motion.p
          key={percentage}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="font-['Bebas_Neue:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#fe780f] text-[0px] text-center tracking-[-1.44px] w-full whitespace-pre-wrap"
        >
          <span className="leading-[normal] text-[40px]">{percentage}</span>
          <span className="leading-[normal] text-[36px]">{` `}</span>
          <span className="leading-[normal] text-[20px] tracking-[-0.8px]">%</span>
        </motion.p>
      </div>
      
      <p className="col-1 font-['Alimama_ShuHeiTi:Bold',sans-serif] leading-[18px] ml-[38px] mt-[69px] not-italic relative row-1 text-[#ff8721] text-[11px] text-center">信心指数</p>
    </div>
  );
}
