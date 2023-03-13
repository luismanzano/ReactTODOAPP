import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider(props) {

  const [openModal, setOpenModal] = React.useState(false);

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

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

  const completeTodos = (text) => {
    console.log("COMPLETING TODOS");
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
    console.log(todos)
  };

  const deleteTodos = (text) => {
    console.log("COMPLETING TODOS");
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
    console.log(todos)
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text
    });
    saveTodos(newTodos);
  };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchVaule,
            searchedTodos,
            completeTodos,
            deleteTodos,  
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}



export {TodoContext, TodoProvider};