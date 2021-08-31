import React, {useEffect, useState} from 'react'

export const TodoForm = ({edit, onSubmit}) => {

    const [input, setInput] = useState({text: ''});

    useEffect(() => {
        setInput({
            text: edit.value
        });
    }, [edit])
    
    const {text} = input;

    const handleInputChange = ({target}) => {
        setInput({
            ...input,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text,
            isComplete: false
        });
        setInput({
            text: ''
        });
    }

    return (
        <form
            className="todo-form"
            onSubmit={handleSubmit}
        >
            {
                edit.id ? (
                    <>
                    <input 
                        className="todo-input edit"
                        type="text"
                        placeholder="Update task"
                        autoComplete="off"
                        name="text"
                        value={text}
                        onChange={handleInputChange}
                    />

                    <button 
                        className="todo-button edit"
                        type="submit"
                    >
                        Update 
                    </button>
                    </>
                )
                : (
                    <>
                    <input 
                        className="todo-input"
                        type="text"
                        placeholder="Add a task"
                        autoComplete="off"
                        name="text"
                        value={text}
                        onChange={handleInputChange}
                    />

                    <button 
                        className="todo-button"
                        type="submit"
                    >
                        Add Todo
                    </button>
                    </>
                )
            }
        </form>
    )
}
