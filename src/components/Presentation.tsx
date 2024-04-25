import profilePicture from "../assets/img/profile_picture.png";
import { ButtonCheckResume } from "./ButtonCheckResume";
import { SocialNetworks } from "./SocialNetworks";

export const Presentation: React.FC = () => {
  return (
    <section
      id="aboutMe"
      className="flex flex-col justify-center items-center w-full my-8"
    >
      {/* IMAGE */}
      <div className="relative rounded-full border-4 border-violet-900/80  w-60 ">
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
          <strong className="text-blue-90 font-thin underline underline-offset-4 bg-blue-950/4 x-2 rounded-md">
            Frontend
          </strong>{" "}
          &{" "}
          <strong className="text-violet-90 font-thin underline underline-offset-4 bg-violet-950/4 x-2 rounded-md">
            Blockchain
          </strong>{" "}
          Developer
        </h2>
      </div>

      {/* RRSS */}
      <SocialNetworks />

      {/* DESCRIPTION */}
      <div
        className="py-4 px-6 sm:px-16 text-lg text-gray-300 mt-4 
        rounded-md
        w-screen sm:w-full
        tracking-wide
        bg-violet-950/10 
        shadow-2xl
        shadow-violet-950/10
        break-words
         whitespace-break-spaces
        "
        style={{ textShadow: "4px 4px 10px rgb(0,0,0,0.3)" }}
      >
        <p className="text-[18px]/[36px] px-8 text-center ">
          Specializing in
          <span className="text-[#00C3DE] bg-[#00c4de31 underline underline-offset-4 x-2 rounded-full mx-1 whitespace-nowrap">
            {" "}
            React{" "}
          </span>
          and
          <span className="text-[#2E79DF] bg-[#2e78df4f underline underline-offset-4 x-2 rounded-full mx-1 whitespace-nowrap">
            {" "}
            TypeScript
          </span>
          , I am an experienced blockchain and Web3 developer focused on
          creating beautiful and responsive web applications that
          <span className="text-violet-600 bg-violet-950/5 underline underline-offset-4 rounded-full px-2  whitespace-nowra">
            {" "}
            integrate virtual wallets{" "}
          </span>
          <span>and</span>
          <span className="text-violet-600 bg-violet-950/5 rounded-full px-2 underline underline-offset-4 whitespace-nowra">
            {" "}
            connect to smart contracts{" "}
          </span>
          to create secure decentralized experiences.
        </p>
      </div>

      <div className="flex items-center justify-center mt-4">
        <ButtonCheckResume />
      </div>
    </section>
  );
};
