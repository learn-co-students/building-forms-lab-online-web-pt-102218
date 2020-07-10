// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange(event) {
    // event.preventDefault();
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <h3>Create a New Band:</h3>
          <label className="band" name="band">Band Name: </label>
          <input type="text" className="band" name="band"
            onChange={this.handleOnChange} value={this.state.name} />
          <br />
          <button type="submit">Submit Band</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(BandInput)
