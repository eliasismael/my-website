import { ReactNode } from "react";
import nodes from "../assets/video/nodes.mp4";

export const Layout = ({ children }: { children?: ReactNode }) => (
  <div className="layout flex flex-col relative px-12 sm:px-20  md:px-40 lg:px-64 gap-8">
    {/* VIDEO CONTAINER */}
    <div className="video-container">
      <video autoPlay muted loop>
        <source src={nodes} type="video/mp4" />|
      </video>
    </div>

    {children}
  </div>
);
