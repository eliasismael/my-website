import HeaderButton from "./HeaderButton";

interface MenuProps {
  windowWidth: number;
  isMenuVisible: boolean;
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { setIsMenuVisible, isMenuVisible } = props;

  return (
    <div
      className={`
      w-11/12 flex flex-col gap-4 items-center bg-black/95 fixed top-24 py-4 left-1/2
      transform -translate-x-1/2 rounded-lg shadow-md border
       border-violet-950 shadow-violet-950 "
      duration-500
      ${!isMenuVisible && "-translate-y-[30rem]"}
      `}
    >
      <HeaderButton
        text="About Me"
        sectionToScroll="aboutMe"
        onClick={setIsMenuVisible}
      />
      <HeaderButton
        text="Projects"
        sectionToScroll="projects"
        onClick={setIsMenuVisible}
      />
      <HeaderButton
        text="Skills"
        sectionToScroll="skills"
        onClick={setIsMenuVisible}
      />
      <HeaderButton
        text="Contact"
        sectionToScroll="contact"
        onClick={setIsMenuVisible}
      />
    </div>
  );
};

export default Menu;
