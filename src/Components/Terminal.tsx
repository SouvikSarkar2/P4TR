"use client";
import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

const Terminal = () => {
  const constraintsRef = useRef(null);
  return (
    <motion.div
      className="w-full h-full flex justify-center items-center "
      ref={constraintsRef}
    >
      <motion.div
        className="w-[20%] h-[20%] bg-yellow-400 flex justify-center items-center text-3xl font-bold "
        drag
        dragConstraints={constraintsRef}
      >
        Terminal
      </motion.div>
    </motion.div>
  );
};

export default Terminal;
