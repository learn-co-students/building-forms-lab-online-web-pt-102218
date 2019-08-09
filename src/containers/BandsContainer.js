import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'


class BandsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bands: []
    }
  }


  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
        {this.props.bands.map((band) => <li>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({bands}) => ({bands})
const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (band) => dispatch({type: 'ADD_BAND', band: band })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

// const mapDispatchToProps = dispatch => {
//   return {
//     // dispatching actions returned by action creators
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//     reset: () => dispatch(reset())
//   }

// const increment = () => ({ type: 'INCREMENT' })
