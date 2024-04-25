import { SocialNetworks } from "./SocialNetworks";

export const Footer: React.FC = () => (
  <footer className="h-24 w-full absolute bg-gray-800 text-white text-sm flex flex-col justify-evenly items-center">
    {/* ICONS */}
    <SocialNetworks />
    {/* TEXT */}
    <p>&#169; {new Date().getFullYear()} Elías Pereyra. All rights reserved</p>
  </footer>
);
