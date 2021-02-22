import React, { Component } from 'react'
import RenderProps from './RenderProps'
import HOCDemo from './HOC'

export default class ReactDemo extends Component {
  render() {
    return (
      <div>
        <RenderProps />
        <hr />
        <HOCDemo />
      </div>
    )
  }
}
