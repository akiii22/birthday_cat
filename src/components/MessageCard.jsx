import { motion } from "framer-motion";

function MessageCard({ message, name, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col bg-white/70 w-[400px] max-h-[700px] justify-between items-center px-6 py-8 rounded-md shadow-md backdrop-blur-md border border-white/30"
    >
      <div className="w-full">
        <p className="font-playfair text-[2rem] break-words leading-relaxed text-gray-700">
          Message: {message}
        </p>
      </div>

      <div className="flex flex-col items-center mt-6">
        <h2 className="text-2xl text-slate-800">{name}</h2>
        <img
          src={image}
          alt="profile"
          className="w-20 h-20 rounded-full mt-2 object-cover"
        />
      </div>
    </motion.div>
  );
}

export default MessageCard;
