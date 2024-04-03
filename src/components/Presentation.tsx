import profilePicture from "../assets/img/profile_picture.png";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";

export const Presentation: React.FC = () => {
  return (
    <section
      id="aboutMe"
      className="flex flex-col justify-center items-center w-full my-8"
    >
      {/* IMAGE */}
      <div className="relative rounded-full border-4 border-violet-900/80 shadow-xl shadow-violet-900/30 w-60 ">
        <img
          src={profilePicture}
          alt="Picture of Elías Pereyra"
          className="rounded-full"
        />
      </div>

      {/* NAME */}
      <div className="flex flex-col items-center justify-center mt-8 text-white ">
        <h1 className="text-4xl mb-2 text-center">Hi, I am Elías Pereyra</h1>
        <h2 className="text-3xl text-center" style={{ lineHeight: "1.5" }}>
          <strong className="text-blue-900 bg-blue-950/40 px-2 rounded-md">
            Frontend
          </strong>{" "}
          &{" "}
          <strong className="text-violet-900 bg-violet-950/40 px-2 rounded-md">
            Blockchain
          </strong>{" "}
          Developer
        </h2>
      </div>

      {/* RRSS */}
      <div className="flex justify-center items-center gap-10 mt-4 ">
        <a href="https://linkedin.com/in/eliaspereyra" target="_blank">
          <AiFillLinkedin className="footer_icon  hover:scale-125 duration-300" />
        </a>
        <a href="https://twitter.com/eliasismaelp" target="_blank">
          <AiFillTwitterSquare className="footer_icon  hover:scale-125 duration-300" />
        </a>
        <a href="https://github.com/eliasismael" target="_blank">
          <AiFillGithub className="footer_icon  hover:scale-125 duration-300 " />
        </a>
      </div>

      {/* DESCRIPTION */}
      <div
        className="py-4 px-6 sm:px-16 text-lg text-gray-300 mt-4 
        rounded-md
        w-screen sm:w-full
        tracking-wide
        bg-violet-950/10 
        shadow-2xl
        shadow-violet-950/10"
        style={{ textShadow: "4px 4px 10px rgb(0,0,0,0.3)" }}
      >
        <p className="text-[16px]/[30px] sm:text-[24px]/[40px] text-center">
          Specializing in
          <span className="text-[#00C3DE]"> React </span>
          and
          <span className="text-[#2E79DF]"> TypeScript </span>, I am an
          experienced blockchain and Web3 developer focused on creating
          beautiful and responsive web applications that integrate virtual
          wallets and connect to smart contracts to create secure decentralized
          experiences.
        </p>
        {/* <p className="text-xl text-start tracking-wider">
          Passionate about innovation and technology, I am self-taught developer
          with a focused approach to building quality software with an emphasis
          on scalability, accessibility and user experience.
          <br />
          <br />I bring expertise in the development of diverse web-based
          applications, encompassing:
        </p>

        <ul className="list-none mt-4 text-start">
          <li className="mb-4">
            Crafting{" "}
            <span className="text-violet-600 font-semibold">
              responsive websites
            </span>{" "}
            that deliver seamless user experiences across devices.
          </li>

          <li className="mb-4">
            Creating{" "}
            <span className="text-blue-600">interactive browser games</span> to
            engage and entertain users.
          </li>

          <li className="mb4">
            <span className="text-yellow-500">
              {" "}
              Building decentralized applications
            </span>{" "}
            (DApps) on the Ethereum blockchain, expanding horizons in the world
            of decentralized finance and smart contracts.
          </li>
        </ul> */}
      </div>

      <div className="flex items-center justify-center mt-4">
        <button
          className="bg-gradient-to-tr from-blue-900 to-violet-900
          px-4 py-2 rounded-3xl w-full border-2 border-violet-600
          mt-6 duration-300 shadow-white/20 shadow-sm text-white text-xl
          tracking-wider hover:shadow-lg hover:shadow-violet-500/20
        hover:border-violet-500"
        >
          {" "}
          <a
            // href="https://drive.google.com/file/d/1nNX-nuo4pusEUTR3VKxvPSGo6kdOSZcB/view?usp=sharing"
            href="https://drive.google.com/file/d/1wQw9L3m1cMgmmkQ3JTBVJhfj1KnAK2w5/view?usp=sharing"
            target="_blank"
          >
            Check resume
          </a>
        </button>
      </div>
    </section>
  );
};
