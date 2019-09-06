// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    input: ''
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state.input)
    this.setState({input:''})
  }
  
  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" id="input" onChange={(e) => this.handleChange(e)} value={this.state.input} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
