function MessageCard() {
  return (
    <div className="my-20 mx-10 px-20 py-10">
      <div className="flex flex-col bg-white/80 w-[400px] max-h-[500px] justify-between items-center px-6 py-8 rounded-md shadow-md">
        <div className="w-full">
          <p className="font-caveat text-[1.5rem] break-words leading-relaxed text-gray-700">
            Message: sac; sanc;
            ankcasklnsajbjkckasbkasbkcbakbcjksabcjkasbjckasbjkcbaskjbcajbcjkabcjkasbcjasbcjkabjksb
          </p>
        </div>

        <div className="flex flex-col items-center mt-6">
          <h2 className="text-sm text-gray-500">Name</h2>
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-12 h-12 rounded-full mt-2 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default MessageCard;
