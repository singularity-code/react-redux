// action types
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// action function
export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

// there will be 2 items in advance
let id = 3; // plus 1 when insert called
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});
export const toggle = (id) => ({
  type: TOGGLE,
  id,
});
export const remove = (id) => ({
  type: REMOVE,
  id,
});

// reducer initial state
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'Redux task 1',
      done: true,
    },
    {
      id: 2,
      text: 'Redux task 2',
      done: false,
    },
  ],
};

// reducer function
function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        input: state.todos.map((todo) =>
          todo.id === action.id
            ? {
                ...todo,
                done: !todo.done,
              }
            : todo,
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}
export default todos;
