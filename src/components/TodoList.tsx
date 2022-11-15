import { useState } from 'react';
import { Todo } from '../types/TodoType';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    const addTodo = (text: String | undefined) => {
        if (text === undefined) return
        const newArr: Todo[] = [...todoList, { id: todoList.length, text: text, activate: false }]
        setTodoList(newArr);
    }

    const changeTodo = (activate: boolean, id: number) => {
        const newArr: Todo[] = todoList.map(e => {
            if (id === e.id) e.activate = activate
            return e
        })
        setTodoList(newArr)
    }

    const removeTodo = () => {
        const newArr: Todo[] = todoList.filter(e => e.activate === false)
        setTodoList(newArr)
    }

    return (
        <div className='todolist__main'>
            {todoList.map(e => <TodoItem todo={e} changeActivate={changeTodo} />)}
            <TodoInput upText={addTodo} removeTodos={removeTodo} />
        </div>
    )
}

export default TodoList