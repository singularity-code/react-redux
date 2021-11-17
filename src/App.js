import Counter from './components/Counter';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Counter number={0}></Counter>
      <hr/>
      <Todos></Todos>
    </div>
  );
}

export default App;
