import IntroGreetings from "./components/IntroGreetings";
import MessageCard from "./components/MessageCard";

function App() {
  return (
    <div className="h-dvh w-full">
      <div className=" bg-black/70">
        <IntroGreetings />
        <MessageCard />
      </div>
    </div>
  );
}

export default App;
