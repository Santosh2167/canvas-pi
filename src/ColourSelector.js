import React, { Component } from "react";

class ColourSelector extends Component {

  onInputChange(event) {
    console.log(event.target.value);
  }
  render() {
    const { hex } = this.props;
    return (
      <div>
        <input
          type="color"
          defaultValue={hex}
          onChange={this.onInputChange} />
      </div>
    );
  }
}

ColourSelector.defaultProps = {
  hex: "#ffff00",
}

export default ColourSelector;