import { Todo } from "../types/TodoType"
import React from 'react';
import {ITodoItem} from '../interfaces/ITodoList';

const TodoItem: React.FC<ITodoItem> = ({ todo, changeActivate }) => {
    const { id, text, activate } = todo

    const handleActivate = () => {
        changeActivate(!activate, id)
    }

    return (
        <div className="todoitem__main">
            <button className={activate ? "todoitem__activate" : "todoitem__desactivate"} onClick={() => handleActivate()} ></button>
            <p>{text}</p>
        </div>
    )
}

export default TodoItem