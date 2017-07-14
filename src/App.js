import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';
import actions from './actions';

export const App = props => (
  <div>
    <h1>Todo List</h1>
    <AddTodo submitTodo={props.submitTodo} />
    <TodoList
      todos={props.todos}
      deleteTodo={props.deleteTodo}
      undeleteTodo={props.undeleteTodo}
    />
  </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  undeleteTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text));
    }
  },

  deleteTodo: (id) => {
    dispatch(actions.deleteTodo(id));
  },

  undeleteTodo: () => {
    dispatch(actions.undeleteTodo());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
