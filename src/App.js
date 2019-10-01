import React, { Component } from "react";
import ColourSelector from "./ColourSelector";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to your drawing pad!!!</h1>
        <ColourSelector />
      </div>
    )
  }
}

export default App;