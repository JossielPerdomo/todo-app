import React from 'react';
import {AiFillDelete} from 'react-icons/ai';
import {AiFillEdit} from 'react-icons/ai';
import {AiFillCheckCircle} from 'react-icons/ai';

export const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {

    return todos.map((todo, index) => (
        <div 
            className={
                todo.isComplete ? 'todo-row complete'
                : 'todo-row'
            }
            key={index}
        >
            <div key={todo.id}
            >
                {todo.text}
            </div>
            <div className="icons">

                <AiFillCheckCircle 
                    className="check-icon"
                    onClick={() => completeTodo(todo.id)}
                />
                <AiFillEdit 
                    onClick={() => updateTodo(todo.id, todo.text)}
                    className="edit-icon"
                />
                <AiFillDelete 
                    onClick={() => removeTodo(todo.id)}
                    className="delete-icon"
                />
            </div>
        </div>
    ))
}
