import React from 'react'
import Style from "./style.module.scss"
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ changingList }) => {
  return (
    <div className={Style.todos}>
      <h1>ToDo's</h1>
      <button onClick={() => changingList()} className={Style.doneBut}>
        Done List
        <FontAwesomeIcon  className={Style.icon} icon={faSquareCheck} />
      </button>
    </div>
  )
}

export default Header
