import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        BandsContainer
        {this.props.bands.map((b, idx) => <Band key={idx} band={b} />)}
        <BandInput />
      </div>
    )
  }
}

const Band = props => {
return ( 
  <li key={props.key} >
    { props.band.name }
  </li>
 )
}

const mapStateToProps = state => {
  return { bands: state.bands }
}
export default connect(mapStateToProps)(BandsContainer)
