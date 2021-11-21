import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

const CounterContainerWithHooks = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  // component optimization
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  //return <Counter number={number} onIncrease={() => dispatch(increase())} onDecrease={() => dispatch(decrease())} />;
  // optimization
  return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />;
};

export default CounterContainerWithHooks;
