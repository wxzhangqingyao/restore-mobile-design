import clsx from "clsx";
import svgPaths from "./svg-7tz83jkil8";
import imgJimeng2025110495841211 from "../assets/ac9c87560ccfab84f260d9e116d4c160a57573ce.png";
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative rounded-[99px]", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[4px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <Wrapper>
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#414352] text-[15px]">{text}</p>
    </Wrapper>
  );
}
type ComponentProps = {
  className?: string;
  property2?: "图片" | "文字" | "链接" | "文档" | "视频" | "原始录音" | "导入音频" | "录音笔记-尚未播放，点击播放" | "录音笔记-正在播放，点击暂停" | "录音笔记-无播放" | "录音卡" | "综合分析" | "智能";
};

function Component({ className, property2 = "录音笔记-无播放" }: ComponentProps) {
  const is = property2 === "综合分析";
  const is1 = property2 === "文档";
  const is2 = property2 === "链接";
  const is3 = property2 === "录音笔记-正在播放，点击暂停";
  const is4 = property2 === "文字";
  const is5 = property2 === "图片";
  const isOr = ["文字", "图片"].includes(property2);
  return (
    <div className={className || "relative size-[16px]"}>
      {["录音笔记-无播放", "录音卡", "录音笔记-正在播放，点击暂停", "录音笔记-尚未播放，点击播放", "视频", "综合分析", "文档", "链接", "智能", "原始录音"].includes(property2) && (
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          {["录音笔记-无播放", "录音卡", "录音笔记-正在播放，点击暂停", "录音笔记-尚未播放，点击播放", "视频", "综合分析", "文档", "链接", "智能"].includes(property2) && <path d={svgPaths.p17c85340} fill={is2 ? "var(--fill-0, #4797F6)" : is1 ? "var(--fill-0, #58B2F7)" : is ? "var(--fill-0, #5FC2B2)" : ["录音笔记-正在播放，点击暂停", "录音笔记-尚未播放，点击播放", "智能"].includes(property2) ? "var(--fill-0, #FE780F)" : "var(--fill-0, #7F81FF)"} fillOpacity="0.1" id="Vector" />}
          {property2 === "原始录音" && (
            <g id="vuesax/outline/microphone">
              <path d={svgPaths.p133c7a00} fill="var(--fill-0, #9092A3)" id="Vector" />
              <path d={svgPaths.p2b4c3400} fill="var(--fill-0, #9092A3)" id="Vector_2" />
              <path d={svgPaths.p35d9c6f0} fill="var(--fill-0, #9092A3)" id="Vector_3" />
              <path d={svgPaths.p28b91780} fill="var(--fill-0, #9092A3)" id="Vector_4" />
              <g id="Vector_5" opacity="0" />
            </g>
          )}
        </svg>
      )}
      {["录音笔记-尚未播放，点击播放", "文字", "图片", "链接"].includes(property2) && (
        <div className={`absolute ${is2 ? "-translate-y-1/2 aspect-[10/8] left-[18.75%] right-[18.75%] top-1/2" : isOr ? "-translate-x-1/2 aspect-[14.333333969116211/14.333333969116211] bottom-0 left-1/2 top-0" : "inset-[28.13%_28.13%_28.13%_31.25%]"}`} data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is2 ? "0 0 10 8" : isOr ? "0 0 16 16" : "0 0 6.5 7"}>
            <path d={is2 ? svgPaths.p2d5c1680 : isOr ? svgPaths.p17c85340 : svgPaths.p14afa880} fill={is2 ? "var(--fill-0, #4797F6)" : isOr ? "var(--fill-0, #60D178)" : "var(--fill-0, #FE780F)"} fillOpacity={isOr ? "0.1" : undefined} id="Vector" />
          </svg>
        </div>
      )}
      {["录音笔记-无播放", "录音笔记-正在播放，点击暂停", "文字", "图片", "文档"].includes(property2) && (
        <div className={`absolute ${is1 ? "inset-[44.17%_27.08%_25.41%_22.92%]" : is5 ? "inset-[18.75%_18.75%_18.76%_18.75%]" : is4 ? "inset-[18.75%_18.75%_21.84%_18.75%]" : is3 ? "inset-[31.25%]" : "bottom-1/4 left-[18.75%] right-[18.75%] top-1/4"}`} data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is1 ? "0 0 8 4.86719" : is5 ? "0 0 9.99969 9.99902" : is4 ? "0 0 10 9.50488" : is3 ? "0 0 6 6" : "0 0 10 8"}>
            <path d={is1 ? svgPaths.p3255ae00 : is5 ? svgPaths.p2a4b8080 : is4 ? svgPaths.p25fb0000 : is3 ? svgPaths.p3a8dc160 : svgPaths.p13753600} fill={is1 ? "var(--fill-0, #58B2F7)" : isOr ? "var(--fill-0, #60D178)" : is3 ? "var(--fill-0, #FE780F)" : "var(--fill-0, #7F81FF)"} id="Union" />
          </svg>
        </div>
      )}
      {property2 === "录音卡" && (
        <div className="absolute inset-[12.5%]" data-name="卡">
          <div className="absolute inset-[5.21%_11.46%]" data-name="vuesax/linear/money">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.25 10.75">
              <g id="vuesax/linear/money">
                <path d={svgPaths.p2a572a80} fill="var(--fill-0, #7F81FF)" id="Subtract" />
              </g>
            </svg>
          </div>
        </div>
      )}
      {property2 === "视频" && (
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="vuesax/outline/video-square">
            <path d={svgPaths.p20125100} fill="var(--fill-0, #7F81FF)" id="Union" />
          </g>
        </svg>
      )}
      {is && (
        <div className="absolute contents inset-[6.25%]" data-name="vuesax/bold/share">
          <div className="absolute inset-[6.25%]" data-name="share">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <g id="share">
                <path d={svgPaths.p203ed400} fill="var(--fill-0, #5FC2B2)" id="Vector" />
                <path d={svgPaths.p10ed3e00} fill="var(--fill-0, #5FC2B2)" id="Vector_2" />
                <path d={svgPaths.p231b2a00} fill="var(--fill-0, #5FC2B2)" id="Vector_3" />
                <path d={svgPaths.p1a512700} fill="var(--fill-0, #5FC2B2)" id="Vector_4" />
                <path d={svgPaths.p3c6d5080} fill="var(--fill-0, #5FC2B2)" id="Vector_5" />
                <path d={svgPaths.p374c5600} fill="var(--fill-0, #5FC2B2)" id="Vector_6" />
                <g id="Vector_7" opacity="0" />
              </g>
            </svg>
          </div>
        </div>
      )}
      {property2 === "智能" && (
        <div className="absolute inset-[12.5%]" data-name="magicpen">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <g id="magicpen">
              <path d={svgPaths.p37a1a300} fill="var(--fill-0, #FE780F)" id="Vector" />
              <path d={svgPaths.p3d313800} fill="var(--fill-0, #FE780F)" id="Vector_2" />
              <path d={svgPaths.p30100cc0} fill="var(--fill-0, #FE780F)" id="Vector_3" />
              <path d={svgPaths.p10354a80} fill="var(--fill-0, #FE780F)" id="Vector_4" />
              <path d={svgPaths.pfdc2400} fill="var(--fill-0, #FE780F)" id="Vector_5" />
              <g id="Vector_6" opacity="0" />
            </g>
          </svg>
        </div>
      )}
      {property2 === "导入音频" && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="vuesax/outline/voice-square">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="vuesax/outline/voice-square">
              <path d={svgPaths.p17c85340} fill="var(--fill-0, #F09844)" fillOpacity="0.1" id="Vector" />
              <path d={svgPaths.p5c2d800} fill="var(--fill-0, #F09844)" id="Subtract" />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}
type Component1Props = {
  className?: string;
  propValue?: string;
  propValue1?: string;
  propValue2?: "手机" | "平板";
  propValue3?: boolean;
};

function Component1({ className, propValue = "9:41", propValue1 = "Mon Jun 10", propValue2 = "手机", propValue3 = false }: Component1Props) {
  const isAndTrue = propValue2 === "平板" && propValue3;
  return (
    <div className={className || `relative ${isAndTrue ? "w-[1000px]" : propValue2 === "平板" && !propValue3 ? "bg-white w-[1000px]" : "h-[52px] w-[390px]"}`}>
      {propValue2 === "手机" && [false, true].includes(propValue3) && (
        <div className="absolute left-0 top-0 w-[390px]" data-name="Status bar - iPhone">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[154px] items-center justify-center pb-[14px] pt-[16px] px-[24px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pt-[1.5px] relative" data-name="Time">
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                  9:41
                </p>
              </div>
              <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Levels">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[7px] items-center justify-center pr-px pt-px relative size-full">
                    <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
                        <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
                      </svg>
                    </div>
                    <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
                        <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
                      </svg>
                    </div>
                    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Frame">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
                        <g id="Frame">
                          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
                          <path d={svgPaths.p7a14d80} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
                          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {propValue2 === "平板" && [false, true].includes(propValue3) && (
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[17px] relative w-full">
            <div className={`content-stretch flex font-["SF_Pro:Medium",sans-serif] font-[510] gap-[8px] items-center leading-[normal] py-[2px] relative shrink-0 text-[12px] ${isAndTrue ? "text-white" : "text-black"}`} data-name="Left">
              <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                {propValue}
              </p>
              <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                {propValue1}
              </p>
            </div>
            <div className="content-stretch flex gap-[4px] items-center py-[5px] relative shrink-0" data-name="Right">
              <div className="h-[10px] relative shrink-0 w-[16.5px]" data-name="Combined Shape">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 10">
                  <g id="Combined Shape">
                    <path d={svgPaths.p1ced3f00} fill={isAndTrue ? "var(--fill-0, white)" : "var(--fill-0, black)"} />
                    <path d={svgPaths.p44cab80} fill={isAndTrue ? "var(--fill-0, white)" : "var(--fill-0, black)"} />
                    <path d={svgPaths.p3e431e00} fill={isAndTrue ? "var(--fill-0, white)" : "var(--fill-0, black)"} />
                    <path d={svgPaths.p3a664300} fill={isAndTrue ? "var(--fill-0, white)" : "var(--fill-0, black)"} />
                  </g>
                </svg>
              </div>
              <div className="h-[10px] relative shrink-0 w-[14.053px]" data-name="Combined Shape">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0534 9.99998">
                  <g id="Combined Shape">
                    <path d={svgPaths.p263a2c00} fill={isAndTrue ? "var(--fill-0, white)" : "var(--fill-0, black)"} />
                    <path d={svgPaths.p412b251} fill={isAndTrue ? "var(--fill-0, white)" : "var(--fill-0, black)"} />
                    <path d={svgPaths.p31425800} fill={isAndTrue ? "var(--fill-0, white)" : "var(--fill-0, black)"} />
                  </g>
                </svg>
              </div>
              <p className={`font-["SF_Pro:Medium",sans-serif] font-[510] leading-[14px] relative shrink-0 text-[12px] text-right ${isAndTrue ? "text-white" : "text-black"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                100%
              </p>
              <div className="h-[12px] relative shrink-0 w-[26.5px]" data-name="Battery Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.5 12">
                  <g id="Battery Icon">
                    <g id="Combined Shape" opacity="0.4">
                      <mask fill="white" id={isAndTrue ? "path-1-inside-1_61_833" : "path-1-inside-1_61_771"}>
                        <path d={svgPaths.p303e8640} />
                      </mask>
                      <path d={svgPaths.p29c93100} fill={isAndTrue ? "var(--stroke-0, white)" : "var(--stroke-0, black)"} mask={isAndTrue ? "url(#path-1-inside-1_61_833)" : "url(#path-1-inside-1_61_771)"} />
                    </g>
                    <rect fill={isAndTrue ? "var(--fill-0, white)" : "var(--fill-0, black)"} height="8" id="Capacity" rx="1.5" width="20" x="2" y="2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full">
      <div className="bg-white content-stretch flex flex-col items-start shrink-0 fixed top-0 w-[390px] z-50" data-name="头部">
        <Component1 className="h-[52px] overflow-clip relative shrink-0 w-full" />
        <div className="relative shrink-0 w-[390px]" data-name="标题栏">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[16px] py-[4px] relative w-full">
              <button className="bg-white content-stretch cursor-pointer flex gap-[4px] items-center pl-[8px] pr-[12px] py-[8px] relative rounded-[99px] shrink-0 w-[36px]" data-name="返回">
                <Wrapper1 additionalClassNames="relative shrink-0 size-[20px]">
                  <g id="arrow-left">
                    <path d={svgPaths.p3a43fe80} id="Vector" stroke="var(--stroke-0, #414352)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
                    <g id="Vector_2" opacity="0" />
                  </g>
                </Wrapper1>
              </button>
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="右侧">
                <div className="relative shrink-0 size-[36px]" data-name="助手">
                  <div className="absolute left-0 size-[36px] top-0" data-name="logo">
                    <div className="absolute h-[33px] left-[-1px] top-0 w-[38px]">
                      <div className="absolute inset-[0_7.09%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.6079 33">
                          <path d={svgPaths.p3cd3a9c0} fill="var(--fill-0, white)" id="Rectangle 346241167" />
                        </svg>
                      </div>
                    </div>
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[36px] top-1/2">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" fill="var(--fill-0, white)" id="Ellipse 182" r="18" />
                      </svg>
                    </div>
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[36px] top-1/2" data-name="jimeng-2025-11-04-9584-角色参考图1，站姿参考图2，嘴巴笑起来 (1) 1">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[148.45%] left-[-6.75%] max-w-none top-[-36.93%] w-[109.52%]" src={imgJimeng2025110495841211} />
                      </div>
                    </div>
                    <div className="-translate-x-1/2 absolute bg-gradient-to-b content-stretch flex from-[#fe780f] items-center justify-center left-1/2 px-[4px] py-[2px] rounded-[99px] to-[#ff6b4f] top-[22px]">
                      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-center text-white">问小智</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[99px] shrink-0 w-[36px]" data-name="搜索">
                  <div className="relative shrink-0 size-[20px]" data-name="分享">
                    <div className="absolute inset-[13.17%_4.29%_13.2%_5.21%]" data-name="Vector (Stroke)">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1017 14.726">
                        <path d={svgPaths.p32884000} fill="var(--fill-0, #414352)" id="Vector (Stroke)" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[99px] shrink-0 w-[36px]" data-name="搜索">
                  <div className="relative shrink-0 size-[20px]" data-name="更多">
                    <Wrapper1 additionalClassNames="absolute contents inset-0">
                      <g id="more-circle">
                        <path d={svgPaths.p18f22980} fill="var(--fill-0, #414352)" id="Vector" />
                        <path d={svgPaths.pa32f200} fill="var(--fill-0, #414352)" id="Vector_2" />
                        <path d={svgPaths.p2ac6100} fill="var(--fill-0, #414352)" id="Vector_3" />
                        <path d={svgPaths.p342f6680} fill="var(--fill-0, #414352)" id="Vector_4" />
                        <g id="Vector_5" opacity="0" />
                      </g>
                    </Wrapper1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[88px] relative shrink-0 w-full mt-[96px]" data-name="项目信息">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2b33] text-[22px] w-full">
                <p className="leading-[28px] whitespace-pre-wrap">AI生财之道讨论会</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[16px]" data-name="vuesax/outline/calendar">
                  <div className="absolute contents inset-0" data-name="vuesax/outline/calendar">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="calendar">
                        <path d={svgPaths.p16bee5a0} fill="var(--fill-0, #B0B2BF)" id="Vector" />
                        <path d={svgPaths.p2ebc8d00} fill="var(--fill-0, #B0B2BF)" id="Vector_2" />
                        <path d={svgPaths.p1f1a9c00} fill="var(--fill-0, #B0B2BF)" id="Vector_3" />
                        <path d={svgPaths.pad3f000} fill="var(--fill-0, #B0B2BF)" id="Vector_4" />
                        <path d={svgPaths.p1966dd00} fill="var(--fill-0, #B0B2BF)" id="Vector_5" />
                        <path d={svgPaths.p2ee04430} fill="var(--fill-0, #B0B2BF)" id="Vector_6" />
                        <path d={svgPaths.p854a80} fill="var(--fill-0, #B0B2BF)" id="Vector_7" />
                        <path d={svgPaths.p1d9a5ff0} fill="var(--fill-0, #B0B2BF)" id="Vector_8" />
                        <path d={svgPaths.p31c9f680} fill="var(--fill-0, #B0B2BF)" id="Vector_9" />
                        <path d={svgPaths.p3db4c300} fill="var(--fill-0, #B0B2BF)" id="Vector_10" />
                        <g id="Vector_11" opacity="0" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#64677a] text-[12px]">2025-08-11</p>
                <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#64677a] text-[12px]">24:45</p>
              </div>
              <div className="content-stretch flex gap-[4px] h-[20px] items-center justify-center relative rounded-[4px] shrink-0" data-name="类型标签-录音">
                <Component className="relative shrink-0 size-[16px]" property2="综合分析" />
                <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5fc2b2] text-[12px]">综合分析</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[36px] items-start relative shrink-0 w-[358px]" data-name="切换">
        <div className="bg-[#f7f8fa] flex-[1_0_0] min-h-px min-w-px relative rounded-[999px]">
          <div className="content-stretch flex gap-[4px] items-start p-[2px] relative w-full">
            <Text text="AI 总结" />
            <Wrapper additionalClassNames="bg-white shadow-[0px_1px_4px_0px_rgba(100,103,122,0.06)]">
              <p className="font-['PingFang_SC:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fe780f] text-[15px]">分析看板</p>
            </Wrapper>
          </div>
        </div>
        <div className="bg-[#f7f8fa] content-stretch flex items-start p-[2px] relative rounded-[999px] shrink-0 w-[116px]">
          <Text text="参考笔记" />
        </div>
      </div>
    </div>
  );
}