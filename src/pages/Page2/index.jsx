import React, { useState } from 'react'
import { Input, Button, Divider } from 'antd';
import { useStore, useDispatch, useSelector } from "react-redux";
// import { addTodo } from "./actions";


function Page2 () {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  let [inputValue, changeInput] = useState('');

  function change (e) {
    console.log(e.target.value)
    changeInput(e.target.value);
  }  

  function add () {
    dispatch({ 
      type: 'addTodo', 
      payload: inputValue 
    })
    changeInput("");
  }
  
  const store = useSelector((state) => state.Page2Reducers);
  const list = store.list;
  console.log("list", store.list);

  // const store = useStore();
  // const allData = store.getState();
  // console.log("allData", allData);

  return (
    <div>
      <span>You clicked {count} times</span>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>

      <Divider />

      <Input
        placeholder="请输入"
        style={{ width: 200 }}
        value={inputValue}
        onChange={(e) => change(e)}
      />
      <Button onClick={() => add()}>add</Button>

      <ul>
        {list.map(item => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  );
  
}

export default Page2;
