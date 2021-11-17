import React from 'react';

const TodoItem = ({ todo, ontoggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>Sample Text</span>

      <button>Delete</button>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input/>
            <button type="submit">SUBMIT</button>
        </form>
        <div>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
        </div>
    </div>
  );
};

export default Todos;
