import TodosContainer from './components/Todos';
import CounterContainerWithBinder from './containers/CounterContainer';

function App() {
  return (
    <div>
      <CounterContainerWithBinder></CounterContainerWithBinder>
      <hr />
      <TodosContainer></TodosContainer>
    </div>
  );
}

export default App;
