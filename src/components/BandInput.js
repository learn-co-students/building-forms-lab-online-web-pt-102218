// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: '',
    })
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })

  }




  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="band">Add Band</label>
          <input type="text" onChange={(e) => this.handleChange(e)}
          value={this.state.name} />
          <input type="submit" value="Submit" />
        </form>           
      </div>
    )
  }
}

export default BandInput
