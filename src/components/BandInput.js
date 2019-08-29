// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {


  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  onChange = event => {
    this.state.name = event.target.value 
    this.setState = ({
      name: this.state.name
    })
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState = ({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
          <input type='text' onChange={this.onChange}/> 
          <input type='submit' /> 
          </div>
        </form>
      </div>
    )
  }
}

export default BandInput
