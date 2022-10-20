import React from 'react'
import { faSquareCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./style.module.scss"

const Todo = ({ id, todo, deleteTodo, setDone }) => {

    return (
        <div className={Style.content} >
            <div className={Style.todo}>
                {id + 1}.{todo.todo}
            </div>
            <div className={Style.info}>
                <span className={Style.date}>
                    {todo.date}
                </span>
                <span className={Style.options}>
                    <FontAwesomeIcon onClick={() => { deleteTodo(id) }} className={Style.trash} icon={faTrash} />
                    <FontAwesomeIcon onClick={() => { setDone( todo, id) }} className={Style.check} icon={faSquareCheck} />
                </span>
            </div>
        </div>
    )
}

export default Todo
