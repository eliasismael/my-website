import { useState } from "react";
import { Modal } from "../../Modal/Modal";
import { ModalContent } from "./ModalContent";

export interface ProjectCardProps {
  image: string;
  title: string;
  technologies: string[];
  date?: string;
  info: string;
  deploy: string;
  code: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { title, technologies, info, image, deploy, code } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="w-full h-auto bg-gray-800 rounded-xl shadow-sm lg:w-[29%] shadow-gray-700 hover:shadow-gray-300 overflow-hidden
      opacity-90 hover:opacity-100 duration-300
      "
      >
        {/* IMAGE */}
        <div className=" w-full rounded-2xl">
          <a href={deploy} target="_blank">
            <img
              src={image}
              className="w-full h-52 object-cover rounded-t-2xl "
            />
          </a>
        </div>

        {/* ABOUT */}
        <div className="bg-gray-800 flex flex-col px-3 mt-2 rounded-2xl">
          <a href={deploy} target="_blank">
            <h4 className="text-2xl font-medium hover:underline ">{title}</h4>
          </a>

          <div className="mt-2">
            <a href={code} target="_blank">
              <span className="text-xs text-gray-300 hover:underline transition overflow-hidden text-ellipsis w-full block whitespace-nowrap">
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

          <div className="">
            <p className={`text-md font-normal overflow-hidden`}>
              {info.length > 60 ? `${info.slice(0, 60)}...` : info}
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer px-2 py-0.5 my-2 rounded-full border border-gray-400 hover:border-gray-300 break-normal text-center bg-black/40 hover:bg-black/30 duration-300"
          >
            See details
          </button>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          children={
            <ModalContent {...props} onClose={() => setIsModalOpen(false)} />
          }
        />
      )}
    </>
  );
};

export default ProjectCard;
