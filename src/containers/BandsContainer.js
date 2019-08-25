import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import createBand from '../actions/bandActions'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        BandsContainer
        <BandInput createBand={this.props.createBand} />
        <ul>
          {this.props.bands.map(band =>
            <li>{band.name}</li>
          )}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  bands: state.bands
})

export default connect(mapStateToProps, { createBand })(BandsContainer)
