import TodosList from './features/todos/TodosList';
import TodosForm from './features/todos/TodosForm';

function App() {
  return (
    <div>
      <h1>TODOS</h1>
      <TodosForm />
      <TodosList />
    </div>
  );
}

export default App;
