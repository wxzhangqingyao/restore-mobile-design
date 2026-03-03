// 真实趋势图数据配置和渲染逻辑
// 此组件将静态图表替换为动态趋势图

import { motion } from "motion/react";

interface TrendChartProps {
  confidence: number;
}

export function TrendChart({ confidence }: TrendChartProps) {
  // 数据点定义：每个日期对应的信心指数和位置
  const dataPoints = [
    { date: "2月18日", value: 52, xPercent: 16.53, yPercent: 48 },  // 52% 位置
    { date: "2月19日", value: 77, xPercent: 50, yPercent: 23 },      // 77% 位置
    { date: "2月20日", value: 94, xPercent: 83.47, yPercent: 6 }     // 94% 位置
  ];
  
  // 找到当前选中日期的索引
  const currentIndex = dataPoints.findIndex(point => point.value === confidence) || 0;
  const currentPoint = dataPoints[currentIndex] || dataPoints[0];
  
  // 生成SVG路径
  const generatePath = () => {
    let path = `M ${dataPoints[0].xPercent} ${dataPoints[0].yPercent}`;
    for (let i = 1; i < dataPoints.length; i++) {
      path += ` L ${dataPoints[i].xPercent} ${dataPoints[i].yPercent}`;
    }
    return path;
  };
  
  // 生成填充区域路径
  const generateFillPath = () => {
    let path = `M ${dataPoints[0].xPercent} ${dataPoints[0].yPercent}`;
    for (let i = 1; i < dataPoints.length; i++) {
      path += ` L ${dataPoints[i].xPercent} ${dataPoints[i].yPercent}`;
    }
    path += ` L ${dataPoints[dataPoints.length - 1].xPercent} 100`;
    path += ` L ${dataPoints[0].xPercent} 100 Z`;
    return path;
  };
  
  return (
    <>
      {/* 趋势线 */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d={generatePath()}
          fill="none"
          stroke="#FE780F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>
      
      {/* 填充区域 */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FE780F" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FE780F" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d={generateFillPath()}
          fill="url(#trendGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </svg>
      
      {/* 所有数据点 */}
      {dataPoints.map((point, index) => {
        const isActive = index === currentIndex;
        
        return (
          <motion.div
            key={point.date}
            className="absolute"
            style={{
              left: `${point.xPercent}%`,
              top: `${point.yPercent}%`,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
          >
            {isActive ? (
              // 当前激活点 - 大圆+光晕
              <>
                <div className="absolute size-[50px] -translate-x-1/2 -translate-y-1/2">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                    <motion.circle 
                      cx="25" 
                      cy="25" 
                      fill="#FE780F" 
                      fillOpacity="0.1" 
                      r="25"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.15, 0.1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </svg>
                </div>
                <div className="absolute size-[12px] -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute inset-[-33.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g filter="url(#filter0_d_active)">
                        <circle cx="10" cy="10" fill="white" r="6" />
                        <circle cx="10" cy="10" r="5" stroke="#FE780F" strokeWidth="2" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20" id="filter0_d_active" width="20" x="0" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feMorphology in="SourceAlpha" operator="dilate" radius="4" result="effect1_dropShadow" />
                          <feOffset />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.470588 0 0 0 0 0.0588235 0 0 0 0.2 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </>
            ) : (
              // 非激活点 - 小圆点
              <div className="size-[12px] -translate-x-1/2 -translate-y-1/2">
                <svg className="block size-full" fill="none" viewBox="0 0 12 12">
                  <circle cx="6" cy="6" fill="white" r="5" stroke="#FE780F" strokeWidth="2" />
                </svg>
              </div>
            )}
          </motion.div>
        );
      })}
      
      {/* 当前数据提示框 */}
      <motion.div 
        key={`tooltip-${currentPoint.value}`}
        className="absolute bg-white content-stretch flex flex-col items-center justify-center leading-[0] not-italic px-[12px] py-[5px] rounded-[8px] shadow-[0px_8px_24px_0px_rgba(100,103,122,0.24)] text-center whitespace-nowrap pointer-events-none"
        style={{
          left: `${currentPoint.xPercent}%`,
          top: `${currentPoint.yPercent}%`
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: 1, 
          y: 40,
          x: '-50%'
        }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center relative shrink-0 text-[#9092a3] text-[13px]">
          <p className="leading-[20px]">成交信心指数</p>
        </div>
        <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center relative shrink-0 text-[#414352] text-[16px] tracking-[1px] uppercase">
          <p className="leading-[20px]">{currentPoint.value}%</p>
        </div>
      </motion.div>
    </>
  );
}