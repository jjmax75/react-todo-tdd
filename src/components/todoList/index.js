import React from 'react';
import PropTypes from 'prop-types';

const TodoList = (props) => {
  const todoItems = (todos, deleteTodo) =>
    todos.map(todo => (
      <li key={todo.id}>
        <button
          type='button'
          className='todo-delete'
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>

        <span className='todo-text'>
          {todo.text}
        </span>

      </li>
    ));

  return (
    <div>
      <ul>
        {todoItems(props.todos, props.deleteTodo)}
      </ul>
      <button
        type='button'
        className='todo-undelete'
        onClick={() => props.undeleteTodo()}
      >
        Undelete last Todo
      </button>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  undeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
