import React from "react";

const AnimatedBarChart = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[400px] h-[290px] border-[10px] border-gray-200 rounded-[24px] p-4 flex flex-col items-start justify-between shadow-2xl">
        <div className="w-full">
          <h1 className="text-sm font-semibold tracking-wider">
            Animated Bar Chart
          </h1>
        </div>
        <div className="w-full mt-1 h-[79%] relative flex items-end justify-between gap-x-5">
          <div className="flex flex-col items-center justify-between h-full">
            <span className="text-xs text-gray-500">300</span>
            <span className="text-xs text-gray-500">200</span>
            <span className="text-xs text-gray-500">100</span>
            <span className="text-xs text-gray-500">0</span>
          </div>
          <div className="h-[1px] bg-gray-300 absolute w-[90%] right-0"></div>
          <div className="h-[1px] bg-gray-300 absolute w-[90%] right-0 bottom-[33.5%]"></div>
          <div className="h-[1px] bg-gray-300 absolute w-[90%] right-0 bottom-[63.7%]"></div>
          <div className="h-[1px] bg-gray-300 absolute w-[90%] right-0 top-2"></div>
          {/* bar 1 */}
          <div className="w-[9px] h-[179px] rounded-t-full overflow-hidden bg-orange-300 relative">
            <div className="w-[9px] h-[160px] bg-blue-900 rounded-t-full animated-bar"></div>
          </div>
          {/* bar 2 */}
          <div className="w-[9px] h-[135px] rounded-t-full overflow-hidden bg-orange-300 relative">
            <div className="w-[9px] h-[120px] bg-blue-900 rounded-t-full animated-bar2"></div>
          </div>
          {/* bar 3 */}
          <div className="w-[9px] h-[70px] rounded-t-full overflow-hidden bg-orange-300 relative">
            <div className="w-[9px] h-[60px] bg-blue-900 rounded-t-full animated-bar3"></div>
          </div>
          {/* bar 4 */}
          <div className="w-[9px] h-[159px] rounded-t-full overflow-hidden bg-orange-300 relative">
            <div className="w-[9px] h-[120px] rounded-t-full bg-blue-900 animated-bar4"></div>
          </div>
          {/* bar 5 */}
          <div className="w-[9px] h-[149px] rounded-t-full overflow-hidden bg-orange-300 relative">
            <div className="w-[9px] h-[120px] bg-blue-900 rounded-t-full animated-bar5"></div>
          </div>
          {/* bar 6 */}
          <div className="w-[9px] h-[149px] rounded-t-full overflow-hidden bg-orange-300 relative">
            <div className="w-[9px] h-[120px] bg-blue-900 rounded-t-full animated-bar6"></div>
          </div>
          {/* bar 7 */}
          <div className="w-[9px] h-[149px] rounded-t-full overflow-hidden bg-orange-300 relative">
            <div className="w-[9px] h-[120px] bg-blue-900 rounded-t-full animated-bar7"></div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-[84%] float-end flex items-center justify-between pr-[1px]">
            <span className="text-xs text-gray-500">M</span>
            <span className="text-xs text-gray-500">T</span>
            <span className="text-xs text-gray-500">W</span>
            <span className="text-xs text-gray-500">T</span>
            <span className="text-xs text-gray-500">F</span>
            <span className="text-xs text-gray-500">S</span>
            <span className="text-xs text-gray-500">S</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBarChart;
