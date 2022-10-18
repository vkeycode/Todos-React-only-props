import React from 'react'
import Style from './style.module.scss'

const Done = ({ done }) => {

  return (
    <div className={Style.container} >
      {
        done.map((todo, index) => {
          return (
            <div className={Style.done}>{index+1}.{todo.todo}</div>
            );
        })
      }
    </div>
  )
}

export default Done
