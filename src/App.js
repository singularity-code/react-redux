import React from 'react';
import CounterContainerWithHooks from './containers/CounterContainerWithHooks';
import TodosContainerWithHooksActions from './containers/TodosContainers';

const App = () => {
  return (
    <div>
      <CounterContainerWithHooks />
      <hr />
      <TodosContainerWithHooksActions />
    </div>
  );
};

export default App;
