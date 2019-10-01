import React, { Component } from "react";

class ColourSelector extends Component {
  render() {
    const { hex } = this.props;
    return (
      <div>
        <input type="color" defaultValue={hex} />
      </div>
    );
  }
}

ColourSelector.defaultProps = {
  hex: "#ffff00",
}

export default ColourSelector;