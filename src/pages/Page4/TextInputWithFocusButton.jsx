import React, { useRef } from 'react'
import { Space, Input, Button} from 'antd'

function TextInputWithFocusButton() {
  const inputEl = useRef();

  const onButtonClick = () => {
    inputEl.current.focus();
  }

  return (
    <>
      <h1>useRef</h1>
      <Space>
        <Input ref={inputEl} style={{ width: 200 }} />
        <Button onClick={onButtonClick}>Focus the input</Button>
      </Space>
    </>
  );
}

export default TextInputWithFocusButton;