import React from "react";

interface ToolCardProps {
  title: React.ReactNode;
  description: string;
  iconSrc: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ title, description, iconSrc }) => {
  return (
    <div className="flex gap-2 items-start pt-10 pl-8 pb-10 w-full text-white bg-white bg-opacity-10 rounded-[30px] max-md:flex-wrap max-md:mt-10">
      <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit">
        <h3 className="text-4xl font-mabry">{title}</h3>
        <p className="mt-2 text-lg">{description}</p>
      </div>
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="z-10 shrink-0 self-end mt-38 aspect-square w-[54px] max-md:mt-10"
      />
    </div>
  );
};

export default ToolCard;
