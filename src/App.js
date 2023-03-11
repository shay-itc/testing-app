import Counters from "./components/Counters";
import './App.css';
import { useState } from "react";

function App({ helloWorld }) {

  const [counters, setCounters] = useState([{ value: 10 }, { value: 10 }, { value: 10 }]);

  function onIncrement(index) {
    counters[index].value++;
    setCounters([...counters]);
  }

  function onDecrement(index) {
    counters[index].value--;
    setCounters([...counters]);
  }

  function onDelete(index) {
    console.log('onDelete', index);
    counters.splice(index, 1);
    setCounters([...counters]);
  }

  function refresh() {
    setCounters([{ value: 10 }, { value: 10 }, { value: 10 }]);
  }

  return (
    <div className="App">
      <Counters counters={counters} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete} />
      <button className="refresh" onClick={refresh}>Refresh</button>

      <button data-testid="test-text" className="hello-button" onClick={() => {
        helloWorld();
      }}><span className="inner-elem">Hello World!</span></button>
    </div>
  );
}

export default App;
