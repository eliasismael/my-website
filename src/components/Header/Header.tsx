import HeaderButton from "./components/Button";
import Menu from "./components/Menu";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import { buttonsInfo } from "./constants/buttonsInfo";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { windowWidth } = useWindowWidth();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className="w-full  sticky h-20 top-0 z-50 bg-gradient-to-r from-black/95 to-black/95 flex justify-end sm:gap-8 sm:pr-8 items-center shadow-blue-950/80 shadow-[inset_0_-2px_6px_rgba(0,0,0)]">
      {/* DESKTOP */}
      {windowWidth >= 768 && (
        <>
          {buttonsInfo.map((button) => (
            <HeaderButton
              text={button.text}
              sectionToScroll={button.sectionToScroll}
              onClick={setIsMenuVisible}
            />
          ))}
        </>
      )}

      {/* MOBILE */}
      {windowWidth < 768 && (
        <>
          <AiOutlineMenu
            className="menu_logo"
            onClick={() => setIsMenuVisible((prevState) => !prevState)}
          />

          <Menu
            isMenuVisible={isMenuVisible}
            windowWidth={windowWidth}
            setIsMenuVisible={setIsMenuVisible}
          />
        </>
      )}
    </div>
  );
};

export default Header;
