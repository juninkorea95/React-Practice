import React from 'react'
import { useState } from 'react';
import "./App.css"
import Button from './components/Button';
import User from './components/User';

const App = () => {

  const [users, setUsers] = useState ([
    { id: 1, age: 30, name: "송중기"},
    { id: 2, age: 24, name: "송강"},
    { id: 3, age: 21, name: "김유정"},
    { id: 4, age: 29, name: "구교환"},
  ])

  const [name, setName] = useState('');
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
      setName(event.target.value);
    }

  const ageChangeHandler = (event) => {
      setAge(event.target.value);
    }  

  const clickButtonHandler = () => {
    // 1. 새로운 형태의 객체를 만든다.
    // 객체 -> { id: 1, age: 30, name: "송중기"}
    // 저 객체를 배열에 더해준다. 

    const newUser = {
      id : users.length +1,
      age,  // 아랫줄처럼 적어줘도 되고, 얘처럼 생략해도 ㅇㅋ
      name: name,
    }

    setUsers([...users, newUser])
  }

  //삭제 버튼 클릭

  const clickRemoveButtonHandler = (id) => {
    const newUsers = users.filter((user) => user.id !== id)
    setUsers(newUsers)
  }


  return (
    <div>
      <div>
        이름 : &nbsp;
        <input 
          value = {name}
          onChange={nameChangeHandler}
        /> <br />
        나이 : &nbsp; 
        <input 
          value = {age}
          onChange ={ageChangeHandler}
        />
        <br />
        <Button clickButtonHandler = {clickButtonHandler}>추가</Button>
      </div>

    <div>
      <div className="app-style">
      {users.map(item => {
      return (
        <User key = {item.id} item = {item} 
        removeFunction = {clickRemoveButtonHandler} />
    )
    })}
    </div>
    
    </div>
    </div>   
  )
};



export default App