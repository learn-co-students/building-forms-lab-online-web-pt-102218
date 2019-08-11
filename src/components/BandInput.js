// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';
 
class BandInput extends Component {
  constructor() {
    super()
  
    this.state = {
      name: ""
    }
  }
  onChange = event => {
    this.setState({
      name: event.target.value 
    }) 
  }
  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch({ type: 'ADD_BAND', payload: this.state})
  }
  
  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}> 
        <label> Band name </label>
        <input onChange={this.onChange} value={this.state.text} type="text"></input>
        <input type="submit" /> 
        </form> 
      </div>
    )
  }
}

export default connect()(BandInput);
