import { useState } from "react";
import ModalGreetings from "./ModalGreetings";

function Greetings() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBtn = () => setIsOpen((prev) => !prev);
  return (
    <div className="my-20 flex justify-around items-center px-10">
      <div>
        <h1 className="text-white text-[2rem] font-playfair my-10">
          Yoooo!!! Someone told me that you are celebrating your 23rd Birthday!
        </h1>
        <button
          className="text-white tracking-widest rounded-md text-2xl font-caveat bg-[#E75480] px-10 py-5 hover:bg-[#FC4C4E] transition-all duration-200"
          onClick={toggleBtn}
        >
          Here is my little surprise for you 😏
        </button>
        {isOpen && <ModalGreetings onClose={() => setIsOpen(false)} />}
      </div>
      <img src="/yohan.png" alt="yohan pic" />
    </div>
  );
}

export default Greetings;
