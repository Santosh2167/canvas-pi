import React, { Component } from "react";
import ColourSelector from "./ColourSelector";

export default class Canvas extends Component {
  state = { hex: "#0000ff", width: 400, height: 400 };



  onColourSelectorChange = (hex) => {
    this.setState({ hex })
  }

  render() {
    const { hex, width, height } = this.state;
    return (
      <div>
        <div>
          <ColourSelector hex={hex} onColourSelectorChange={this.onColourSelectorChange} />
        </div>
        <canvas
          width={width}
          height={height}
          style={{ border: "2px solid brown" }}
        />
      </div>
    )
  }
}