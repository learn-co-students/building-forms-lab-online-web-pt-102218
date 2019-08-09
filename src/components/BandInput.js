// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Band Name</label>
          <input onChange={this.handleOnChange}/>
          <button type="submit" >Add Band</button>
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//       addBand: () => dispatch(this.props.addBand())
//     }
// }

export default BandInput
