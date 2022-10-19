import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated, to } from 'react-spring';
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

  const addTodo = (e) => {
    if (e.keyCode === 13) {
      const date = new Date()
      setValue("")
      setTodos(
        [...todos, {
          todo: value,
          date: date,
        }])
    }
  }

  

  const changingList = () => {
    setChangeList(!changeList)
  }

  const doneTodo = (todo, id) => {
    setDone([...done, todo])
    deleteTodo(id)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id))
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
      <animated.div  style={initialAnimation} className="App">
        <Header
          changingList={changingList}
          changeList={changeList}
          changeFont = {changeFont}
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
            />
        }
      </animated.div>
    </div>
  );
}

export default App;
