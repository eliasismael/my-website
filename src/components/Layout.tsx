import { ReactNode } from "react";
import nodes from "../assets/video/nodes.mp4";

export const Layout = ({ children }: { children?: ReactNode }) => (
  <div className="layout flex flex-col relative px-12 sm:px-20  md:px-40 lg:px-64 gap-8 z-0">
    {/* VIDEO CONTAINER */}
    <div className="fixed inset-0 w-full h-screen bg-black -z-10">
      <video
        autoPlay
        muted
        loop
        className="fixed inset-0 w-screen h-screen object-cover -z-10 opacity-30"
      >
        <source src={nodes} type="video/mp4" />|
      </video>
    </div>

    {children}
  </div>
);
