import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CounterContainerWithBinder = ({ number, increase, decrease }) => {
  return (
    <Counter
      number={number}
      onIncrease={increase}
      onDecrease={decrease}
    ></Counter>
  );
};
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     // do the action
//     dispatch(increase());
//   },
//   decrease: () => {
//     // do the action
//     dispatch(decrease());
//   },
// });
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  (dispatch) => ({
    increase: () => {
      // do the action
      dispatch(increase());
    },
    decrease: () => {
      // do the action
      dispatch(decrease());
    },
  }),
)(CounterContainerWithBinder);
