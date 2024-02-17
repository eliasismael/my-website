import { ProjectCardProps } from "./ProjectCard";

interface ModalContentProps extends ProjectCardProps {
  onClose: () => void;
}

export const ModalContent: React.FC<ModalContentProps> = (props) => {
  const { deploy, image, info, technologies, title, code, onClose } = props;

  return (
    <>
      <div className="w-full rounded-2xl bg-white relative">
        <a href={deploy} target="_blank">
          <img src={image} className=" w-full object-cover " />
        </a>
      </div>

      {/* ABOUT */}
      <div className="bg-gray-800 px-3 py-2">
        <a href={deploy} target="_blank">
          <h4 className="text-3xl font-medium hover:underline ">{title}</h4>
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
          <p className={`text-md font-normal overflow-hidden`}>{info}</p>
          <button
            className=" ml-auto text-xs bg-gray-900 hover:bg-gray-700 duration-300 border border-gray-400 px-2 rounded-lg"
            onClick={onClose}
          >
            close
            {/* <IoClsoseCircleOutline className="w-8 h-8 " /> */}
          </button>
        </div>
      </div>
    </>
  );
};
