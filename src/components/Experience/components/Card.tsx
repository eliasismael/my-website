import { FaExternalLinkAlt } from "react-icons/fa";

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
  const { position, img, company, period, technologies, description, link } =
    props;
  return (
    <div
      className={`flex flex-col md:flex-row w-full bg-gray-700 rounded-md shadow-md shadow-black border-2 border-gray-800 duration-300 overflow-hidden`}
    >
      <div className="w-full md:w-60 md:h-full overflow-visible ">
        {" "}
        <img
          src={img}
          alt="Company logo"
          className="h-full w-full aspect-square object-cover rounded-tl-md rounded-bl-md"
          style={{ minWidth: "100%", minHeight: "100%" }}
        />
      </div>

      {/* INFO */}
      <div className="flex flex-col px-3 sm:px-4 sm:py-2 w-full sm:w-4/5 mt-2 sm:mt-0">
        {/* TITLE */}
        <div className="flex flex-col sm:flex-row items-baseline gap-3 px-2 mt-2">
          <span className="text-white text-2xl/4 text-center sm:text-start">
            {position}
          </span>
          <span className="text-gray-300 underline underline-offset-2 cursor-pointer hover:text-white duration-300">
            <a
              className="inline-flex items-center gap-2"
              href={link || ""}
              target="_blank"
            >
              {company} <FaExternalLinkAlt className="w-3 h-3" />
            </a>
          </span>
        </div>

        {/* SUBTITLES */}
        <div className="w-full px-2">
          <span className="text-sm text-gray-300 sm:text-start">{period}</span>
        </div>

        <div>
          <div className="text-xs text-center flex itmes-center text-gray-100 px-3 py-1 bg-black/60 border-violet-800 border rounded-full w-fit">
            {technologies}
          </div>
        </div>

        <div className="text-ellipsis overflow-hidden w-full block whitespace-wrap p-2 font-light text-md">
          {description}
        </div>
      </div>
    </div>
  );
};
