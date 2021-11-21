import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { changeInput } from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainerWithHooks = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  const dispatch = useDispatch();
  const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [dispatch]);
  const onInsert = useCallback((text) => dispatch(changeInput(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(changeInput(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(changeInput(id)), [dispatch]);

  return <Todos input={input} todos={todos} onChangeInput={onChangeInput} onInsert={onInsert} onToggle={onToggle} onRemove={onRemove}></Todos>;
};

export default TodosContainerWithHooks;
