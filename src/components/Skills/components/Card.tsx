import { Technologie } from "../constants/technologies";
import { useState } from "react";

interface CardProps {
  title: string;
  technologies: Technologie[];
}

export const Card: React.FC<CardProps> = (props) => {
  const { technologies } = props;
  const [bgColorOnHover, setBgColorOnHover] = useState("");

  return (
    <div
      className={`pointer-events-none duration-500 w-full h-fit mr-auto flex flex-col justify-center items-cemter rounded-3xl border-2 border-violet-700 shadow-lg bg-blue-950/30`}
      style={{
        borderColor: `${bgColorOnHover}`,
        boxShadow: `-2px 2px 10px ${bgColorOnHover || "purple"}`,
      }}
    >
      {/* TECHNOLOGIES */}
      <div
        className="flex flex-wrap justify-center md:items-start"
        onMouseLeave={() => setBgColorOnHover("")}
      >
        {technologies.map((element) => (
          <div
            key={element.name}
            className="pointer-events-auto w-20 h-20 mx-2 flex flex-col justify-evenly items-center m-4 "
            onMouseEnter={() => {
              setBgColorOnHover(element.color);
            }}
          >
            <img
              src={element.src}
              alt={element.alt}
              className="h-12 w-12 object-contain mb-2"
              style={{
                filter: `drop-shadow(2px 2px 5px ${element.color}80)`,
              }}
            />

            <span
              className="px-2 rounded-xl py-0.5 text-xs shadow-sm border border-gray-400 "
              style={{ backgroundColor: element.color + "40" }}
            >
              {element.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
