import React from 'react'
import Style from './style.module.scss'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Done = ({ done }) => {

  return (
    <div className={Style.container} >
      {
        done.map((todo, index) => {
          return (
            <div className={Style.done}>{index+1}.{todo.todo}<FontAwesomeIcon className={Style.icon} icon={faCheck} /></div>
            );
        })
      }
    </div>
  )
}

export default Done
