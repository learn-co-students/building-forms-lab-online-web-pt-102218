// Add BandInput component
import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandInput extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default BandInput
