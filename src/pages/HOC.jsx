import React, { Component } from 'react'

function withCount(Com) {

  return class Child extends Component {
    constructor() {
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
          <Com {...this.props} count={this.state.count} />
        </div>
      )
    }
  }
}


class Demo extends Component {
  render() {
    return (
      <div>
        <h3>this.props.count: {this.props.count}</h3>
      </div>
    )
  }
}

export default withCount(Demo)