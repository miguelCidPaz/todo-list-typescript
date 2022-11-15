import { useRef, useState } from 'react';
import { ITodoInput } from '../interfaces/ITodoList';

const TodoInput = ({ upText, removeTodos }: ITodoInput) => {
    const myRef = useRef<HTMLInputElement>(null);
    const [myText, setMyText] = useState<string | number | readonly string[] | undefined>("");

    const handleClick = () => {
        upText(myRef.current?.value)
        setMyText("")
    }

    return (
        <div className="todoinput__main">
            <input onChange={e => setMyText(e.target.value)} type="text" ref={myRef} value={myText} />
            <button onClick={() => handleClick()} >Añadir todo</button>
            <button onClick={() => removeTodos()} >Borrar todos completos</button>
        </div>
    )
}

export default TodoInput