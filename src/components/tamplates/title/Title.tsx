import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="bg-bg w-full h-32 mt-36 flex items-center justify-center"> 
      <p className="text-green font-bold font-shabnam text-3xl">
         {title}
      </p>
    </div>
  );
}

export default Title;
