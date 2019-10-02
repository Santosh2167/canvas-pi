import React, { Component } from "react";

class ColourSelector extends Component {

  state = { hex: this.props.hex };

  onInputChange(event) {
    this.setState({ hex: event.target.value })
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
          onChange={event => this.onInputChange(event)} />
      </div>
    );
  }
}

ColourSelector.defaultProps = {
  hex: "#ffff00",
}

export default ColourSelector;