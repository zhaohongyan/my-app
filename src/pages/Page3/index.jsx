import React, { useState, useEffect } from "react";
import { Button } from 'antd'

function Page3() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log(count);
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  // 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组
  useEffect(() => {
    console.log("useEffect");
    return () => {
      console.log("clear up");
    };
  }, []);

  return (
    <div>
      <h1>useState useEffect</h1>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  );
}

export default Page3;
