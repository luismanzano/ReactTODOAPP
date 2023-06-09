import React from "react";
import { TodoContext } from "../App/TodoContext";
import "./TodoForm.css";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState("");
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setNewTodoValue("");
        setOpenModal(false);
    };


    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar cebolla para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
            <button
                type="button"
                onClick={onCancel}
            >
                Cancelar
            </button>
            <button
                type="submit"
            >
                Añadir
            </button>
            </div>
        </form>
    )
}

export { TodoForm };