import MessageCard from "./MessageCard";

const dummyData = [
  {
    message: "You're amazing. Keep going!",
    name: "Alice",
    image: "/last2.jpg",
  },
  {
    message: "Believe in yourself!",
    name: "Bob",
    image: "/last2.jpg",
  },
  {
    message: "Never give up on your dreams.",
    name: "Charlie",
    image: "/last2.jpg",
  },
  {
    message: "Progress, not perfection.",
    name: "Diana",
    image: "/last2.jpg",
  },
  {
    message: "You are stronger than you think.",
    name: "Eve",
    image: "/last2.jpg",
  },
  {
    message: "Take one step at a time.",
    name: "Frank",
    image: "/last2.jpg",
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
