import Confetti from "react-confetti";
import { useEffect, useState } from "react";

function ModalGreetings({ onClose }) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <Confetti width={dimensions.width} height={dimensions.height} />
      <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center border-4 border-pink-300 z-10">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
        >
          ×
        </button>

        <img
          src="/cake.gif"
          alt="cake"
          className="mx-auto w-40 h-40 rounded-full shadow-md mb-4"
        />
        <h1 className="text-2xl font-caveat text-pink-600 leading-snug">
          Damin Arte, jokeee 🎉
          <br />
          Happy Birthday babygirl 💖
          <br />
          Enjoy your day!
        </h1>
      </div>
    </div>
  );
}

export default ModalGreetings;
