import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../../reducer';

const TodosForm = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState('');

  const handleOnChange = e => {
    setText(e.target.value);
  }

  const handleKeyDown = e => {
    const trimmedText = e.target.value.trim();

    if (e.which === 13 && trimmedText) {
      const addNewTodoThunk = addNewTodo(trimmedText);
      dispatch(addNewTodoThunk);
      setText('');
    }
  }
  return (
    <input
      type="text"
      placeholder="Add todo"
      onChange={handleOnChange}
      onKeyDown={handleKeyDown}
      value={text}
      autoFocus={true}
    />
  )
}

export default TodosForm;