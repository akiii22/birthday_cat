import { motion } from "framer-motion";

function MessageCard({ message, name, image, delay = 0 }) {
  console.log(message, name, image);
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className="flex flex-col bg-white/70 w-[400px] max-h-[700px] justify-between items-center px-6 py-8 rounded-md shadow-md backdrop-blur-md border border-white/30"
    >
      <div className="w-full">
        <p className="font-playfair text-[1.25rem] break-words leading-relaxed text-gray-700">
          Message: {message}
        </p>
      </div>

      <div className="flex flex-col items-center mt-6">
        <h2 className="text-md text-gray-500">{name}</h2>
        <img
          src={image}
          alt="profile"
          className="w-12 h-12 rounded-full mt-2 object-cover"
        />
      </div>
    </motion.div>
  );
}

export default MessageCard;
