function FlowerPage() {
  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center px-6 text-center">
      <img
        src="/flowers.gif"
        alt="Sunflower"
        className="w-60 h-60 object-cover rounded-md shadow-md mb-6"
      />
      <h1 className="text-3xl font-semibold text-yellow-700 mb-2">
        Happy Birthday!
      </h1>
      <p className="text-lg text-gray-700">
        I hope that you appreciate this even though it is not real flowers. What
        I mean is that, not this flower on the screen, LOOK AT YOUR LEFT!g
      </p>
    </div>
  );
}

export default FlowerPage;
