import React, { Component } from "react";

class ColourSelector extends Component {

  state = { hex: this.props.hex };

  onInputChange(event) {
    this.setState({ hex: this.event.target.value })
  }

  componentDidUpdate() {
    console.log(this.state.hex);
  }
  render() {
    const { hex } = this.state;
    return (
      <div>
        <input
          type="color"
          value={hex}
          onChange={this.onInputChange} />
      </div>
    );
  }
}

ColourSelector.defaultProps = {
  hex: "#ffff00",
}

export default ColourSelector;