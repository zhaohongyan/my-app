import React, { useState, useEffect } from "react";
import { Input, Button, Divider } from 'antd';
import { uniqueId } from 'lodash'
import { useStore, useDispatch, useSelector } from "react-redux";
// import { addTodo } from "./actions";


function Page2 () {
  const dispatch = useDispatch();

  // state 有两个变量
  const [count, setCount] = useState(0);
  const [inputValue, changeInput] = useState('');

  const change = (e) => {
    changeInput(e.target.value);
  }  

  // 只有inputvalue改变的时候才会执行
  useEffect(() => {
    console.log('input value change')
  }, [inputValue]);

  const add = () => {
    dispatch({ 
      type: 'addTodo', 
      payload: inputValue 
    })
    changeInput("");
  }
  
  const store = useSelector((state) => state.Page2Reducers);
  const list = store.list;

  // const store = useStore();
  // const allData = store.getState();
  // console.log("allData", allData);

  return (
    <div>
      <h1>useState</h1>
      <span>You clicked {count} times</span>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>

      <Divider />

      <h1>useState useEffect</h1>
      <Input
        placeholder="请输入"
        style={{ width: 200 }}
        value={inputValue}
        onChange={(e) => change(e)}
      />
      <Button onClick={() => add()}>add</Button>

      <ul>
        {list.map((item, index) => {
          return <li key={uniqueId("li_")}>{item}</li>;
        })}
      </ul>
    </div>
  );
  
}

export default Page2;
