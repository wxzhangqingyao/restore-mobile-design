import { useState } from "react";
import { motion } from "motion/react";
import Component from "../imports/视图0226";
import Frame1321320062 from "../imports/Frame1321320062";

// 日期与信心指数数据映射
const confidenceData: Record<string, number> = {
  "2月18日": 52,
  "2月19日": 77,
  "2月20日": 94,
};

// 权力地图人员态度数据
export type Attitude = "积极" | "中立" | "抵触";

export interface PersonPosition {
  attitude: Attitude;
  ml: number;  // margin-left
  mt: number;  // margin-top
}

export interface PowerMapData {
  liMei: PersonPosition;    // 李梅 HR
  wangGong: PersonPosition; // 王工 采购
  xuGong: PersonPosition;   // 许工 技术
  zhaoGong: PersonPosition; // 赵工 销售
}

const powerMapData: Record<string, PowerMapData> = {
  "2月18日": {
    liMei: { attitude: "积极", ml: 28, mt: 177 },
    wangGong: { attitude: "抵触", ml: 219, mt: 212 },
    xuGong: { attitude: "中立", ml: 0, mt: 0 },
    zhaoGong: { attitude: "积极", ml: 207, mt: 15 }
  },
  "2月19日": {
    liMei: { attitude: "中立", ml: 10, mt: 190 },
    wangGong: { attitude: "中立", ml: 190, mt: 190 },
    xuGong: { attitude: "积极", ml: 15, mt: 15 },
    zhaoGong: { attitude: "积极", ml: 190, mt: 30 }
  },
  "2月20日": {
    liMei: { attitude: "积极", ml: 35, mt: 165 },
    wangGong: { attitude: "积极", ml: 175, mt: 175 },
    xuGong: { attitude: "中立", ml: 0, mt: 20 },
    zhaoGong: { attitude: "积极", ml: 180, mt: 25 }
  }
};

function TimeNavigation({ selectedDate, setSelectedDate }: { 
  selectedDate: string; 
  setSelectedDate: (date: string) => void;
}) {
  const dates = ["2月18日", "2月19日", "2月20日"];

  return (
    <div className="bg-white content-stretch flex items-center justify-between p-[2px] absolute bottom-[16px] left-1/2 -translate-x-1/2 rounded-[999px] shrink-0 w-[358px] z-50" data-name="时间轴">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px] shadow-[0px_4px_16px_0px_rgba(100,103,122,0.12)]" />
      {dates.map((date) => (
        <button
          key={date}
          onClick={() => setSelectedDate(date)}
          className="content-stretch flex h-[49px] items-center justify-center px-[24px] py-[10px] relative rounded-[999px] shrink-0 cursor-pointer z-10"
        >
          {selectedDate === date && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-[#fe780f] rounded-[999px]"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <div className={`flex flex-col font-['PingFang_SC',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap transition-colors duration-300 ${
            selectedDate === date ? "text-white" : "text-[#2a2b33]"
          }`}>
            <p className="leading-[22px]">{date}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default function App() {
  const [selectedDate, setSelectedDate] = useState("2月18日");
  const currentPowerMap = powerMapData[selectedDate];

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5f5f5]">
      {/* Mobile container with fixed iPhone 13/14 dimensions */}
      <div className="relative w-[390px] h-[844px] bg-white shadow-2xl overflow-hidden">
        {/* 可滚动内容区 */}
        <div className="absolute inset-0 overflow-y-auto overflow-x-hidden">
          {/* 头部组件 */}
          <div className="relative w-[390px]">
            <Frame1321320062 />
          </div>
          
          {/* 主内容区 - 向下偏移给头部留空间 */}
          <div className="relative w-[390px]" style={{ marginTop: '0px' }}>
            <Component confidence={confidenceData[selectedDate]} powerMap={currentPowerMap} />
          </div>
        </div>
        
        {/* 底部时间导航 - 固定定位 */}
        <TimeNavigation selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>
    </div>
  );
}