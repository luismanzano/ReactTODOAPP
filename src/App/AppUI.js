import React from "react";
import {TodoCounter} from '../TodoCounter';
import { TodoContext } from "./TodoContext";
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {CreateTodoButton} from '../CreateTodoButton';
import {TodoItem} from '../TodoItem';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Curso de intro a react', completed: true },
  { text: 'Llorar con la llorona', completed: false },
]


function AppUI() {
  const {error, loading, searchedTodos, completeTodos, deleteTodos, openModal, setOpenModal} = React.useContext(TodoContext);
    return (
      <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
        <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
                {searchedTodos.map(todo => (
                  <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete={() => completeTodos(todo.text)}
                    onDelete={() => deleteTodos(todo.text)}
                  />
                ))}
              </TodoList>
      {
        !!openModal && (
          <Modal setOpenModal={setOpenModal}>
        <TodoForm/>
      </Modal>
        )
      }
      <CreateTodoButton setOpenModal={setOpenModal}/>
      </React.Fragment>
    );
  }

  export {AppUI};