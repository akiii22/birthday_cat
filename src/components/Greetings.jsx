function Greetings() {
  return (
    <div className="my-20 flex justify-between items-center px-10">
      <div>
        <h1 className="text-white text-xl my-5">
          Yoooo!!! Someone told me that you are celebrating your 23rd Birthday!
        </h1>
        <button className="bg-white rounded-md px-10 py-5">
          Here is my little surprise for you 😏
        </button>
      </div>
      <img src="/yohan.png" alt="yohan pic" />
    </div>
  );
}

export default Greetings;
