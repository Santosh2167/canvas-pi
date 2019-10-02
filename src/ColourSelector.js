import React, { Component } from "react";

class ColourSelector extends Component {

  onInputChange = (event) => {
    const { onColourSelectorChange } = this.props;
    onColourSelectorChange(event.target.value);
  }
  // componentDidUpdate() {
  //   console.log(this.state.hex);
  // }

  render() {
    const { hex } = this.props;
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