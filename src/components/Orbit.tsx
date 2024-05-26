"use client";

import { motion } from "framer-motion";

const Orbit = () => {
  return (
    <div className="h-full w-full relative flex justify-center items-center">
      <motion.div
        className="m-0 p-0 bg-accent text-white overflow-hidden w-20 h-20 xl:w-40 xl:h-40 my-12"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
};

export default Orbit;
