import HeaderButton from "./Button";
import { buttonsInfo } from "../constants/buttonsInfo";

interface MenuProps {
  windowWidth: number;
  isMenuVisible: boolean;
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { setIsMenuVisible, isMenuVisible } = props;

  return (
    <div
      className={`w-11/12 flex flex-col gap-4 items-center bg-black/95 fixed top-24 py-4 left-1/2 rounded-lg shadow-md border border-violet-950 shadow-violet-950
       transform -translate-x-1/2 duration-500
      ${!isMenuVisible && "-translate-y-[30rem]"}
      `}
    >
      {buttonsInfo.map((button) => (
        <HeaderButton
          text={button.text}
          sectionToScroll={button.sectionToScroll}
          onClick={setIsMenuVisible}
        />
      ))}
    </div>
  );
};

export default Menu;
