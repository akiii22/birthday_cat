import { motion } from "framer-motion";

function IntroGreetings() {
  return (
    <div className="flex items-center justify-around px-10 min-h-screen bg-black/70">
      <motion.h1
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white/80 font-extrabold text-[3.5rem] uppercase tracking-widest mt-[5rem]"
      >
        Happy Birthday Cat 🎉🥳
      </motion.h1>

      <motion.img
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="w-[550px] mt-[5rem]"
        src="/intro_pic.gif"
        alt="showing pic"
      />
    </div>
  );
}

export default IntroGreetings;
