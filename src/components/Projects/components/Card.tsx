import { useState } from "react";
import { Modal } from "../../Modal/Modal";

interface CardProps {
  image: string;
  title: string;
  technologies: string[];
  date?: string;
  info: string;
  deploy: string;
  code: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { title, technologies, info, image, deploy, code } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="w-full bg-gray-800 rounded-xl shadow-sm lg:w-[29%] shadow-gray-700 hover:shadow-gray-300 overflow-hidden
      
      opacity-90 hover:opacity-100 duration-300
      "
      >
        {/* IMAGE */}
        <div className="w-full rounded-2xl">
          <a href={deploy} target="_blank">
            <img
              src={image}
              className=" w-full h-52 object-cover rounded-t-2xl "
            />
          </a>
        </div>

        {/* ABOUT */}
        <div className="bg-gray-800 px-3 my-2 rounded-2xl">
          <a href={deploy} target="_blank">
            <h4 className="text-2xl font-medium hover:underline ">{title}</h4>
          </a>

          <div>
            <a href={code} target="_blank">
              <span className="text-xs text-gray-300 hover:underline transition break-words">
                {code}
              </span>
            </a>
          </div>

          {/* TECHNOLOGIES */}
          <div className="flex gap-2 justify-start flex-wrap my-2">
            {technologies.map((technologie) => (
              <span
                key={technologie}
                className=" text-[12px]/[16px] rounded-lg text-gray-400"
              >
                {technologie}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <p className={`text-md font-normal overflow-hidden`}>
              {/* {info} */}
              {info.length > 100 ? `${info.slice(0, 100)}...` : info}
            </p>

            <span
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer px-2 py-0.5 rounded-full border border-gray-400 hover:border-gray-300 break-normal text-center mt-auto bg-black/40 hover:bg-black/30 duration-300"
            >
              See details
            </span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          children={null}
        />
      )}
    </>
  );
};

export default Card;
