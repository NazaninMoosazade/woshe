import React from "react";

interface BoxProps {
  title: string;
  value: number;
  color?: string; 
  icon?: React.ReactNode; 
}

const Box: React.FC<BoxProps> = ({ title, value, color , icon }) => {
  return (
  
<div
  className="relative w-[280px] mx-auto p-5 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border-t-4 bg-white"
  style={{ borderTopColor: color }}
>
    
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-500 font-shabnam text-lg">{title}</h3>
        {icon && <div className="text-[22px]">{icon}</div>}
      </div>
      <span
        className="text-3xl font-bold text-gray-900"
        style={{ color }}
      >
        {value}
      </span>
      <div
        className="mt-2 h-1 rounded-full"
        style={{ backgroundColor: color, width: "60%" }}
      ></div>
    </div>
  );
};

export default Box;
