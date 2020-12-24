import "./App.css";
import Counters from "./components/counters";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counters />
      </div>
    );
  }
}

export default App;
