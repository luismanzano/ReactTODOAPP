import React from "react";
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {CreateTodoButton} from '../CreateTodoButton';
import {TodoItem} from '../TodoItem';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Curso de intro a react', completed: true },
  { text: 'Llorar con la llorona', completed: false },
]


function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchVaule,
    searchedTodos,
    completeTodos,
    deleteTodos      
}) {
    return (
      <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos}/>
      <TodoSearch searchValue={searchValue} setSearchVaule={setSearchVaule}/>
      <TodoList >
        {searchedTodos.map((todo) => (
        <TodoItem 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed} 
        onComplete={() => completeTodos(todo.text)}
        onDelete={() => deleteTodos(todo.text)}
        />
        ))}
      </TodoList>
      <CreateTodoButton />
      </React.Fragment>
    );
  }

  export {AppUI};