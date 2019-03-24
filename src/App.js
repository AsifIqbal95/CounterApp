import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 9 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  onIncrement = counter => {
    let counters = [...this.state.counters];
    let index = this.state.counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  onDecrement = counter => {
    let counters = [...this.state.counters];
    let index = this.state.counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };

  onReset = () => {
    let counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    // console.log("counters", counters);
    this.setState({ counters });
  };

  onDelete = id => {
    let counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
            onReset={this.onReset}
            onDelete={this.onDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
