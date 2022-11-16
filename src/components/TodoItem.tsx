import {ITodoItem} from '../interfaces/ITodoList';

const TodoItem = ({ todo, changeActivate }: ITodoItem) => {
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