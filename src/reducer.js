import axios from 'axios';

const initialState = {
  todos: []
}

const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/todoAdded': {
      return {
        todos: [
          ...state.todos,
          action.payload,
        ]
      }
    }
    case 'todos/todosLoaded': {
      return {
        todos: action.payload
      }
    }
    case 'todos/todoDeleted': {
      return {
        todos: state.todos.filter(todo => { return todo.id !== action.payload })
      }
    }
    default:
      return state;
  }
}

export async function fetchTodos(dispatch, getState) {
  const response = await axios.get('http://localhost:3010/api/todos')
  if (response.status === 200) {
    dispatch({ type: 'todos/todosLoaded', payload: response.data })
  }
}

export function addNewTodo(text) {
  return async function addNewTodoThunk(dispatch, getState) {
    const response = await axios.post('http://localhost:3010/api/todos', { text });
    if (response.status === 201) dispatch({ type: 'todos/todoAdded', payload: response.data });
  }
}

export function deleteTodo(id) {
  return async function deleteTodoThunk(dispatch, getState) {
    const response = await axios.delete(`http://localhost:3010/api/todos/${id}`)
    if (response.status === 200) dispatch({ type: 'todos/todoDeleted', payload: id });
  }
}

export default TodosReducer;