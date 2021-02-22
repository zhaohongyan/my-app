import React, { Component } from 'react'

class Child extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  add = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.add}>add 1</button>
        {this.props.render(this.state.count)}
      </div>
    )
  }
}

class Demo extends Component {
  render() {
    return (
      <div>
        <Child render={(count) => {
          return <h3>this is parent: {count}</h3>
        }}/>
      </div>
    )
  }
}

export default Demo