import React, { useReducer } from 'react'
import { Space, Button } from 'antd'

const initialState = { count: 0, list: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1};
    case 'decrement':
      return { ...state, count: state.count - 1};
    case 'reset':
      return initialState;
    default:
      throw new Error()
  }
}

function Counter () {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h1>useReducer</h1>
      <Space>
        Count: {state.count}
        <Button onClick={() => dispatch({ type: "increment" })}>+</Button>
        <Button onClick={() => dispatch({ type: "decrement" })}>-</Button>
        <Button onClick={() => dispatch({ type: "reset" })}>reset</Button>
      </Space>
    </>
  );
}

export default Counter;