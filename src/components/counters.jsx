import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="bt btn-primary btn-sm">
          Reset
        </button>
        {counters.map((i) => (
          <Counter
            key={i.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={i}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
