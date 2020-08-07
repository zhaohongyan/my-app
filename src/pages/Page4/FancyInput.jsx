import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { Input, Button } from 'antd'

// useImperativeHandle 应当与 forwardRef 一起使用：
let FancyInput = (props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <Input ref={inputRef} style={{ width: 200 }} />;
}

FancyInput = forwardRef(FancyInput);

const Fancy = () => {
  const inputRef = useRef();
  const onButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>useImperativeHandle</h1>
      <FancyInput ref={inputRef} />
      <Button onClick={onButtonClick}>fancy input</Button>
    </div>
  );
}


export default Fancy;