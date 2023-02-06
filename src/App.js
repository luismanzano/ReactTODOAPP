import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <TodoCounter />
    <h2>Has completado 2 de 3 TODOS </h2>
    <TodoSearch />
    <TodoList>
      <TodoItem />
    <TodoList />
    <CreateTodoButton />
  );
}

export default App;
