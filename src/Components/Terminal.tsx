"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable, InertiaPlugin } from "gsap/all";

gsap.registerPlugin(Draggable, InertiaPlugin);

const Terminal = () => {
  return (
    <div className="w-[20%] h-[20%] bg-yellow-400 flex justify-center items-center text-3xl font-bold container">
      Terminal
    </div>
  );
};

export default Terminal;
