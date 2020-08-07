import React from 'react'

function sayHello(person: string) {
  return <h1>'Hello' + {person}!</h1>;
}

let user = "Jane User";

function jsxDom () {
  return <h1>Hello, Emma!</h1>;
}

// export default sayHello(user);
export default jsxDom;