import useWindowWidth from "../hooks/useWindowWidth";

import { Button } from "react-scroll";

interface HeaderButtonProps {
  text: string;
  sectionToScroll: string;
  onClick?: Function;
  windowWidth?: number;
}

const HeaderButton: React.FC<HeaderButtonProps> = (props) => {
  const { windowWidth } = useWindowWidth();
  const { text, sectionToScroll, onClick: hideMenu } = props;

  const handleClick = () => {
    if (typeof hideMenu === "function") hideMenu();
  };

  return (
    <Button
      to={sectionToScroll}
      smooth
      duration={500}
      offset={-100}
      // spy
      className={`cursor-pointer border-2 border-gray-400 sm:border-0 text-center
       hover:border-white text-gray-200 font-normal
     
       duration-500 hover:text-white
       ${windowWidth && windowWidth < 768 && "w-11/12 py-2 rounded-xl"}`}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export default HeaderButton;
