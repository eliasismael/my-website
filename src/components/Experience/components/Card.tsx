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
  const { position, img, company, period, technologies, description } = props;
  return (
    <div
      className={`flex flex-col md:flex-row w-full bg-gray-700 rounded-md shadow-md shadow-black border-2 border-gray-800 duration-300 overflow-hidden`}
      // onMouseEnter={() => setBorderColor("border-violet-500")}
      // onMouseLeave={() => setBorderColor("border-gray-800")}
    >
      {/* <div className="w-60 h-60 md:w-auto h- md:h-auto ">
        <img
          src={img}
          alt="Company logo"
          className="w-full h-full aspect-square object-cover rounded-tl-md rounded-bl-md"
        />
      </div> */}

      <div className="w-full md:w-60 md:h-full overflow-visible ">
        {" "}
        <img
          src={img}
          alt="Company logo"
          className="h-full w-full aspect-square object-cover rounded-tl-md rounded-bl-md"
          style={{ minWidth: "100%", minHeight: "100%" }}
          /* Aseguramos que la imagen ocupe todo el espacio del contenedor */
        />
      </div>

      {/* INFO */}
      <div className="flex flex-col px-3 sm:px-4 sm:py-2 w-full sm:w-4/5 mt-2 sm:mt-0">
        {/* TITLE */}
        <div className="flex flex-col sm:flex-row items-baseline gap-3 px-2 mt-2">
          <span className="text-white text-2xl/4 text-center sm:text-start">
            {position}
          </span>
          <span className="text-gray-300">{company}</span>
        </div>

        {/* SUBTITLES */}
        <div className="w-full px-2">
          <span className="text-sm text-gray-300 sm:text-start">{period}</span>
        </div>

        <div>
          <span className="text-xs text-gray-100 px-3 py-0.5 bg-black/60 border-violet-800 border rounded-full">
            {technologies}
          </span>
        </div>

        {/* <div>
          <span className="text-xs text-gray-300 ">www.tateti.com</span>
        </div> */}

        <div className="text-ellipsis overflow-hidden w-full block whitespace-wrap p-2 font-light text-md">
          {description}
        </div>
      </div>
    </div>
  );
};
