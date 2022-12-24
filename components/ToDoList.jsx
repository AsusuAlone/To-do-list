import React, { useState } from 'react';
import AddList from './AddList';
import AddTask from './AddTask';

const ToDoList = () => {
    const [todoItem, setTodoItem] = useState([])

    const removeTodo = (id) => {
        const removeTask = [...todoItems].filter(todoItem => todoItem.id !== id)
        setTodoItem(removeTask)
    }

    return (
        <>
            <AddList />
            <AddTask />
        </>
    )
}
export default ToDoList