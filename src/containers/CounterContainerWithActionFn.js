import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CounterContainerWithActionFn = ({ number, increase, decrease }) => {
  return (
    <Counter
      number={number}
      onIncrease={increase}
      onDecrease={decrease}
    ></Counter>
  );
};
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  // send second parameter as an object, connect() will do the bindActionCreators
  {
    increase,
    decrease,
  },
)(CounterContainerWithActionFn);
