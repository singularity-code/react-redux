import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo 를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo 를 체크/체크해제 함
const REMOVE = 'todos/REMOVE'; // todo 를 제거함

export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3; // insert 가 호출 될 때마다 1씩 더해집니다.
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'React Test 1',
      done: true,
    },
    {
      id: 2,
      text: 'React Test 2',
      done: false,
    },
  ],
};

// use immer (produce)
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, draft => {
        draft.input = input;
      }),
    // some simple action do not need to use immer lib
    [INSERT]: (state, { payload: todo }) =>
      ({
        ...state,
        todos: state.todos.concat(todo),
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, draft => {
        const index = draft.todos.findIndex(todo => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState,
);

export default todos;