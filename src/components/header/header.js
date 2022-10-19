import React from 'react'
import Style from "./style.module.scss"
import { faSquareCheck, faListOl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ changingList, changeList, changeFont }) => {


  return (
    <div className={Style.todos}>
      <h1>ToDo's</h1>
      <div className={Style.options}>
        <div className={Style.selected}>
          <h5 htmlFor="font-style">Choise Font</h5>
          <select onChange={e => changeFont(e)} id="font-style">
            <option value="'Lobster', cursive">'Lobster', cursive</option>
            <option value="'IBM Plex Serif', serif">'IBM Plex Serif', serif</option>
            <option value="'Teko', sans-serif">'Teko', sans-serif</option>
          </select>
        </div>
        <button onClick={() => changingList()} className={Style.doneBut}>
          {
            changeList === true ? "Done List" : "Todo List"
          }
          <FontAwesomeIcon className={Style.icon} icon={changeList === true ? faSquareCheck : faListOl} />
        </button>
      </div>
    </div>
  )
}

export default Header
