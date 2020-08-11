import React from 'react'

function sayHello(person: string) {
  return "Hello, " + person;;
}

enum Direction {
    Up,
    Down,
    Left,
    Right,
}

let user = "Jane User";

function jsxDom () {
  return (
    <>
      <h1>Hello, Emma!</h1>
      Direction: {Direction.Up}
    </>
  );
}

export default jsxDom;
