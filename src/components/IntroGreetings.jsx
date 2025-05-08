import { motion } from "framer-motion";

function IntroGreetings() {
  return (
    <div className="relative flex items-center justify-around px-10 mb-10  bg-black/70 overflow-hidden">
      <div className="absolute w-[400px] h-[400px] rounded-full bg-pink-400 blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>

      <motion.h1
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1, scale: [1, 1.05, 1] }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white font-playfair text-[4.5rem] uppercase tracking-widest mt-[5rem] drop-shadow-lg"
      >
        Happy Birthday Cat!
      </motion.h1>

      <motion.img
        initial={{ x: 200, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.3,
        }}
        className="w-[550px] mt-[5rem] drop-shadow-2xl"
        src="/intro_pic.gif"
        alt="birthday gif"
      />
    </div>
  );
}

export default IntroGreetings;
