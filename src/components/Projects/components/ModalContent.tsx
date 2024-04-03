import { ProjectCardProps } from "./ProjectCard";
import { IoCloseCircleOutline } from "react-icons/io5";

interface ModalContentProps extends ProjectCardProps {
  onClose: () => void;
}

export const ModalContent: React.FC<ModalContentProps> = (props) => {
  const { deploy, image, info, technologies, title, code, onClose } = props;

  return (
    <div className="lg:flex rounded-2xl overflow-hidden">
      <section className=" relative lg:w-1/2 overflow-hidden">
        <a href={deploy} target="_blank">
          <img
            src={image}
            className="w-full aspect-square h-full object-cover "
          />
        </a>
      </section>

      {/* ABOUT */}
      <section className="bg-gray-800 p-4 pl-6 flex-1 h-auto flex flex-col ">
        <header className="flex items-center">
          <a href={deploy} target="_blank">
            <h4 className="text-3xl font-medium hover:underline ">{title}</h4>
          </a>

          <button
            className="w-fit ml-auto text-xs rounded-full"
            onClick={onClose}
          >
            <IoCloseCircleOutline className="w-7 h-7 duration-300 rounded-full text-gray-300 hover:text-white" />
          </button>
        </header>

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

        {/* <div className="flex flex-col gap-2 h-max border"> */}
        <p className={`text-md font-normal overflow-hidden`}>{info}</p>
        {/* </div> */}

        <div className="w-full mt-auto mb-2 flex gap-2">
          <a
            href={code}
            target="_blank"
            className="w-1/2 text-center rounded-full shadow-md shadow-black/30 bg-gray-950 hover:bg-gray-900 text-white px-4 py-2 duration-300"
          >
            View code
          </a>
          <a
            href={deploy}
            target="_blank"
            className="w-1/2 text-center rounded-full shadow-md shadow-black/30 bg-violet-800 hover:bg-violet-700  text-white px-4 py-2 duration-300"
          >
            View live app
          </a>
        </div>
      </section>
    </div>
  );
};
