"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="w-full h-full relative select-none pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[398px] xl:h-[398px] absolute"
        >
          <Image
            src="/images/photo.png"
            alt="profile photo"
            fill
            sizes="100%,100%"
            priority
            quality={100}
            className="object-contain brightness-[1.3]"
          />
        </motion.div>

        <motion.svg
          className="w-[300px] xl:w-[400px] h-[300px] xl:h-[400px] relative z-10"
          fill="transparent"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="200"
            cy="200"
            r="198"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-accent stroke-[4]"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
