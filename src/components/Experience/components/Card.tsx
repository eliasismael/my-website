import { useState } from "react";

interface CardProps {
  position: string;
  img: string;
  company: string;
  period: string;
  technologies: string;
  link?: string;
  description: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const [borderColor, setBorderColor] = useState("border-gray-800");

  const { position, img, company, period, technologies, description } = props;
  return (
    <div
      className={`flex flex-col md:flex-row w-full bg-gray-700 rounded-md shadow-md shadow-black cursor-pointer border-2 ${borderColor} duration-300`}
      onMouseEnter={() => setBorderColor("border-violet-500")}
      onMouseLeave={() => setBorderColor("border-gray-800")}
    >
      <div className="w-full md:w-auto h-60 md:h-auto">
        <img
          src={img}
          alt="Company logo"
          className="w-full h-full object-cover rounded-tl-md rounded-bl-md"
        />
      </div>

      {/* INFO */}
      <div className="flex flex-col px-3 sm:px-4 sm:py-2 py-4 w-full sm:w-4/5">
        {/* TITLE */}
        <div className="flex flex-col sm:flex-row items-baseline gap-3">
          <span className="text-white text-2xl/4 text-center sm:text-start">
            {position}
          </span>
          <span className="text-gray-300">{company}</span>
        </div>

        {/* SUBTITLES */}
        <div className="w-full">
          <span className="text-sm text-gray-300 sm:text-start">{period}</span>
        </div>

        <div>
          <span className="text-xs text-gray-100">{technologies}</span>
        </div>

        {/* <div>
          <span className="text-xs text-gray-300 ">www.tateti.com</span>
        </div> */}

        <div className="text-ellipsis overflow-hidden w-full block whitespace-wrap">
          {description}
        </div>
      </div>
    </div>
  );
};
