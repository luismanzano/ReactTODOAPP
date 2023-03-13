import './App.css';
import React from 'react';
import { TodoProvider } from './TodoContext';
import { AppUI } from './AppUI';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Curso de intro a react', completed: true },
  { text: 'Llorar con la llorona', completed: false },
]



function App(props) {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

// get users open tabs

export default App;
