import MessageCard from "./MessageCard";

const dummyData = [
  {
    message: "Happy birthday! katttt, wag masyado malulong sa bl bwhaha",
    name: "Patty",
    image: "/patrick.jpg",
  },
  {
    message: "Progress, not perfection.",
    name: "Annyy",
    image: "anne.jpg",
  },
  {
    message: "You are stronger than you think.",
    name: "Accyy",
    image: "/ace.jpg",
  },
  {
    message: "Happy birthday God bless.",
    name: "Redzzy",
    image: "/redz.jpg",
  },
];

function MessageRow() {
  return (
    <div className="flex my-10 gap-6 px-10 py-10">
      {dummyData.map((data, index) => (
        <MessageCard
          key={index}
          message={data.message}
          image={data.image}
          name={data.name}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}

export default MessageRow;
