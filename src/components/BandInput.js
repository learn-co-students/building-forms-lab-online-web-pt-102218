// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = { name: "" }

  submitHandler = e => {
    e.preventDefault()
    this.props.createBand(this.state.name)
  }

  changeHandler = e => {
    this.setState({ name: e.target.value })
  }

  render() {
    return (
      <form onSubmit={e => this.submitHandler(e)} >
        <input
          type="text"
          name="band"
          value={this.state.name}
          onChange={e => this.changeHandler(e)}
        />
        <input type="submit" />
      </form>
    )
  }
}

export default BandInput
