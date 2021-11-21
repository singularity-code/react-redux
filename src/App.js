import React from 'react';
import CounterContainerWithHooks from './containers/CounterContainerWithHooks';
import TodosContainerWithHooks from './containers/TodosContainers';

const App = () => {
  return (
    <div>
      <CounterContainerWithHooks />
      <hr />
      <TodosContainerWithHooks />
    </div>
  );
};

export default App;
