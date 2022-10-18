import React from "react";
import Style from "./style.module.scss"


const Input = (props) => {

  const { value, title, className, setValue, keyDown } = props

  return (
    <div className={Style.container}>
      <input
        className={Style[className]}
        placeholder={title}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={keyDown}
        value={value}
      />
    </div>
  );
};

export default Input;
