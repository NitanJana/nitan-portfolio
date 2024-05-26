import { motion } from "framer-motion";

const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};
const totalStairs = 6;
const reverseIndex = (index: number) => totalStairs - index - 1;

const Stairs = () => {
  return (
    <>
      {[...Array(totalStairs)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full relative bg-white"
        />
      ))}
    </>
  );
};

export default Stairs;
