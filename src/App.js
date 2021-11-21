import React from 'react';
import CounterContainerWithHooks from './containers/CounterContainerWithHooks';
import TodosContainer from './containers/TodosContainers';

const App = () => {
  return (
    <div>
      <CounterContainerWithHooks />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
