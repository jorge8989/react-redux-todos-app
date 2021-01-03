import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../../reducer';

const todosSelector = state => state.todos;

const TodosList = () => {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();
  const renderedTodosList = todos.map((todo) => {
    const deleteTodoThunk = deleteTodo(todo.id);
    return <li key={todo.id}>{todo.text} <button onClick={() => dispatch(deleteTodoThunk)}>delete</button></li>
  });

  return (
    <ul>
      {renderedTodosList}
    </ul>
  )
}

export default TodosList;