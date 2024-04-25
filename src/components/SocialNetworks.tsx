import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

export const SocialNetworks = () => (
  <div className="flex justify-center items-center gap-10 mt-4 ">
    <a href="https://linkedin.com/in/eliaspereyra" target="_blank">
      <AiFillLinkedin className="footer_icon  hover:scale-125 duration-300" />
    </a>
    <a href="https://twitter.com/eliasismaelp" target="_blank">
      <FaXTwitter className="footer_icon  hover:scale-125 duration-300" />
    </a>
    <a href="https://github.com/eliasismael" target="_blank">
      <AiFillGithub className="footer_icon  hover:scale-125 duration-300 " />
    </a>
  </div>
);
