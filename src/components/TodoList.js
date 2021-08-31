import React, {useEffect, useReducer, useState} from 'react'
import { Todo } from './Todo';
import { TodoForm } from './TodoForm'
import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoList = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    useEffect(() => {
        
        localStorage.setItem('todos', JSON.stringify(todos))
        
    }, [todos])

    const addTodo = (todo) => {
        // RegExp to test whether a string val is empty or only contains spaces
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        dispatch({
            type: "add",
            payload: todo
        });
    }

    const update = (newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }

        dispatch({
            type: "update",
            payload: {
                id: edit.id,
                value: newValue.text
            }
        });

        setEdit({
            id: null,
            value: ''
        });
    }

    const completeTodo = (id) => {
        dispatch({
            type: "toggle",
            payload: id
        });
    }

    const updateTodo = (todoId, todoText) => {
        setEdit({
            id: todoId,
            value: todoText
        })
    }


    const removeTodo = (id) => {
        dispatch({
            type: "delete",
            payload: id
        });
    }

    return (
        <div>
            <h1>Do you have any plans for today?</h1>
            {
                edit.id ? 
                (<TodoForm edit={edit} onSubmit={update}/>)
                :
                (<TodoForm edit={edit} onSubmit={addTodo}/> )

            }   
            <Todo 
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />       
        </div>
    )
}
