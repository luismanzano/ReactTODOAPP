import './App.css';
import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoItem} from './TodoItem';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Curso de intro a react', completed: true },
  { text: 'Llorar con la llorona', completed: false },
]

function App(props) {
  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const [searchValue, setSearchVaule] = React.useState('');

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }


  return (
    <React.Fragment>
    <TodoCounter total={totalTodos} completed={completedTodos}/>
    <TodoSearch searchValue={searchValue} setSearchVaule={setSearchVaule}/>
    <TodoList >
      {searchedTodos.map((todo) => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
    </TodoList>
    <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
