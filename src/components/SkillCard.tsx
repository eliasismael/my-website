interface SkillCardProps {
  title: string;
  technologies: Technologie[];
}

import { Technologie } from "../constants/technologies";
import { useState } from "react";

const SkillCard: React.FC<SkillCardProps> = (props) => {
  const { technologies } = props;

  const [bgColorOnHover, setBgColorOnHover] = useState("");

  return (
    <div
      className={`
      pointer-events-none duration-500
      w-full flex flex-col justify-between 
      rounded-2xl px-6 border-2 border-violet-700 shadow-lg
      bg-blue-950/30
      
      `}
      style={{
        borderColor: `${bgColorOnHover}`,
        boxShadow: `-2px 2px 10px ${bgColorOnHover || "purple"}`,
      }}
    >
      {/* TECHNOLOGIES */}
      <div
        className="flex flex-wrap justify-center 
        md:items-start
        "
        onMouseLeave={() => setBgColorOnHover("")}
      >
        {technologies.map((element) => (
          <div
            key={element.name}
            className="pointer-events-auto w-20 h-20  mx-2 
            flex flex-col justify-evenly items-center
            m-4
          hover:scale-110
          duration-500
          "
            onMouseEnter={() => {
              setBgColorOnHover(element.color);
            }}
          >
            <img
              src={element.src}
              alt={element.alt}
              className="h-12 w-12 object-contain mb-2 hover:group-pepe-bg-black"
            />

            <p>{element.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
