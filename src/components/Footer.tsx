import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";

export const Footer: React.FC = () => (
  <footer className="h-24 bg-gray-800 text-white text-sm flex flex-col justify-evenly items-center">
    <div className="flex justify-center items-center gap-10">
      <a href="https://linkedin.com/in/eliaspereyra" target="_blanck">
        <AiFillLinkedin className="footer_icon" />
      </a>
      <a href="https://twitter.com/eliasismaelp" target="_blanck">
        <AiFillTwitterSquare className="footer_icon" />
      </a>
      <a href="https://github.com/eliasismael" target="_blanck">
        <AiFillGithub className="footer_icon" />
      </a>
    </div>
    <p>&#169; {new Date().getFullYear()} Elías Pereyra. All rights reserved</p>
  </footer>
);
