import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import Done from './components/done/done';
import Header from './components/header/header';
import Input from './components/input/input';
import List from './components/list/list';

function App() {

  const [value, setValue] = useState();
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState([])
  const [changeList, setChangeList] = useState(true)
  const divref = useRef()

  const addTodo = async (e) => {
    if (e.keyCode === 13) {
      if (value) {
        const date = new Date()
        const stringDate = date.toLocaleDateString()
        const newTodo = { todo: value, date: stringDate }

        setTodos([...todos, newTodo])
        setValue("")
      }else {
        alert("Please write a todo")
      }
    }
  }


const changingList = () => {
  setChangeList(!changeList)
}

const doneTodo = (todo, id) => {
  setDone([...done, todo])
  deleteTodo(id)
}

const clearDone = () => {
  localStorage.removeItem("done")
  setDone([])
}

const deleteTodo = (id) => {
  setTodos(todos.filter((todo, index) => index !== id))
  localStorage.setItem("todos", JSON.stringify(todos.filter((todo, index) => index !== id)))
}

const initialAnimation = useSpring({
  from: { opacity: 0, marginTop: "0vh", },
  to: { opacity: 1, marginTop: "10vh", },
  delay: 1000
})

const changeFont = (e) => {
  divref.current.style.fontFamily = e.target.value
}


return (
  <div ref={divref} className='mainDiv'>
    <animated.div style={initialAnimation} className="App">
      <Header
        changingList={changingList}
        changeList={changeList}
        changeFont={changeFont}
      />
      <Input
        type="text"
        title="what will you do ?"
        className="textArea"
        setValue={setValue}
        keyDown={addTodo}
        value={value}
      />
      {
        changeList === true ?
          <List
            todos={todos}
            setTodos={setTodos}
            deleteTodo={deleteTodo}
            setDone={doneTodo}
          /> :
          <Done
            done={done}
            clear={clearDone}
          />
      }
    </animated.div>
  </div>
);
}

export default App;
