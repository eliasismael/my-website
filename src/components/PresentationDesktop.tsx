import profilePicture from "../assets/img/profile_picture.png";
import { SocialNetworks } from "./SocialNetworks";
import { ButtonCheckResume } from "./ButtonCheckResume";

export const PresentationDesktop: React.FC = () => {
  return (
    <>
      <section
        id="aboutMe"
        className="flex justify-center items-center w-full mt-8 "
      >
        <section className="w-1/2 flex flex-col items-center">
          {/* IMAGE */}
          <div className="relative rounded-full border-4 border-violet-900/80  w-60 ">
            <img
              src={profilePicture}
              alt="Picture of Elías Pereyra"
              className="rounded-full"
            />
          </div>

          {/* NAME */}
          <div className="flex flex-col items-center justify-center mt-8 text-white font-thin ">
            <h1 className="text-4xl font-thin mb-2 text-center">
              Hi, I am Elías Pereyra
            </h1>
            <h2
              className="text-2xl text-center font-thin"
              style={{ lineHeight: "1.5" }}
            >
              <strong className="text-blue-80 underline underline-offset-8 px-2 rounded-md font-light">
                Frontend
              </strong>{" "}
              &{" "}
              <strong className="text-violet-70 bg-violet-950/4 px-2 rounded-md underline underline-offset-8 font-light">
                Blockchain
              </strong>{" "}
              Developer
            </h2>
          </div>

          {/* RRSS */}

          <SocialNetworks />
        </section>

        {/* DESCRIPTION */}

        <section className="w-1/2 flex flex-col ">
          <div
            className="py-4 text-gray-300
        rounded-md
        w-screen sm:w-full
        tracking-wide
       break-words
        "
            style={{ textShadow: "4px 4px 10px rgb(0,0,0,0.3)" }}
          >
            <p className="text-[18px]/[36px] px-8 text-center break-inside-avoid">
              Specializing in
              <span className="text-[#00C3DE] underline underline-offset-4 bg-[#00c4de31 x-2 rounded-full mx-1">
                {" "}
                React{" "}
              </span>
              and
              <span className="text-[#2E79DF] underline underline-offset-4 bg-[#2e78df4f x-2 rounded-full mx-1">
                {" "}
                TypeScript
              </span>
              , I am an experienced blockchain and Web3 developer focused on
              creating beautiful and responsive web applications that
              <span className="text-violet-600 bg-violet-950/0 rounded-full x-2 underline underline-offset-4 whitespace-nowrap">
                {" "}
                integrate virtual wallets{" "}
              </span>
              and
              <span className="text-violet-600 underline underline-offset-4 bg-violet-950/0 rounded-full x-2   whitespace-nowrap">
                {" "}
                connect to smart contracts{" "}
              </span>
              to create secure decentralized experiences.
            </p>
          </div>
        </section>
      </section>

      <div className="flex items-center justify-center">
        <ButtonCheckResume />
      </div>
    </>
  );
};
