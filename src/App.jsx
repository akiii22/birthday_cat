import Greetings from "./components/Greetings";
import IntroGreetings from "./components/IntroGreetings";
import MessageRow from "./components/MessageRow";

function App() {
  return (
    <div className="h-dvh w-full">
      <div className=" bg-black/90">
        <IntroGreetings />
        <MessageRow />
        <Greetings />
      </div>
    </div>
  );
}

export default App;
