import React from "react";

interface titleProps {
  title: string;
}

const TitleBanner: React.FC<titleProps> = ({ title }) => {
  return (
    <div className="mt-20 w-full bg-bg h-24 flex items-center justify-center">
      <h1 className="font-shabnam text-3xl font-bold text-green text-center">{title}</h1>
    </div>
  );
};

export default TitleBanner;
