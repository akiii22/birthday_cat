function FlowerPage() {
  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center px-6 text-center">
      <img
        src="/bleh.jpg"
        alt="pic"
        className="w-60 h-60 object-cover rounded-md shadow-md mb-6"
      />
      <h1 className="text-3xl font-semibold text-yellow-700 mb-4">
        Happy Birthday!
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl text-gray-700 text-lg leading-relaxed border border-yellow-200">
        <p>
          I hope you appreciate this, even though it’s not a that typical
          birthday gift. My little wish for you is to keep being the same{" "}
          <span className="italic">“kupal”</span> good girl you’ve always been,
          just kidding! 😂
        </p>
        <br />
        <p>
          I know you have big dreams, and I truly hope you achieve whatever your
          heart desires, because you honestly deserve it.
        </p>
        <br />
        <p>
          I genuinely appreciate your kindness (well… most of the time 😅) and
          your thoughtfulness, keep that up.
        </p>
        <br />
        <p>
          I also hope that in the near future, you become the best version of
          yourself. Keep growing, and no matter what happens, stay humble, kind,
          and of course... always{" "}
          <span className=" text-xl text-amber-300 font-bold">PRETTY!</span>
          <br />
          <span className="mt-10 italic">NOW LOOK AT YOUR LEFT!!</span>
        </p>
      </div>
    </div>
  );
}
export default FlowerPage;
