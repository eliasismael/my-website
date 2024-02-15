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
  const { title, technologies, info, image, deploy } = props;
  return (
    <div className="w-full bg-gray-800 rounded-2xl shadow-md shadow-gray-900 duration-500 hover:shadow-xl hover:shadow-gray-950 hover:-translate-y-2 md:w-[45%]">
      {/* IMAGE */}
      <div className="w-full rounded-2xl">
        <a href={deploy} target="_blank">
          <img
            src={image}
            className=" w-full h-52 object-cover rounded-t-2xl"
          />
        </a>
      </div>

      {/* ABOUT */}
      <div className="bg-gray-800 px-3 my-2 rounded-2xl">
        <a href={deploy} target="_blank">
          <h4 className="text-2xl font-medium hover:underline ">{title}</h4>
        </a>
        {/* <span className="text-xs text-gray-400">{date}</span> */}

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

        <p className="text-md font-normal">{info}</p>
      </div>
    </div>
  );
};

export default Card;
