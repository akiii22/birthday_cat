import { useState } from "react";
import { motion } from "framer-motion";

function GiftBox() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col items-center my-20">
      <motion.img
        src="/gifts.gif"
        alt="Gift"
        className="w-50 h-50 cursor-pointer rounded-md hover:scale-110 transition-transform duration-300"
        onClick={toggleModal}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-lg p-8 shadow-lg max-w-sm text-center relative"
          >
            <button
              onClick={toggleModal}
              className="absolute top-2 right-3 text-xl text-gray-500 hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">🎉 Happy Birthday!</h2>
            <p className="mb-4 text-gray-700">
              My little gift is... <br />
              <span className="italic">
                "Wala, lagi mo akong kinukupal. Joke 😂"
              </span>
            </p>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://localhost:5173/flower"
              alt="QR Code"
              className="mx-auto"
            />

            <p className="text-sm text-gray-400 mt-2">Scan to me kupal.</p>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default GiftBox;
