import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    const { onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
