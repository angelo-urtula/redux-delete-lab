import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';
import Bands from '../components/Bands'

class BandsContainer extends Component {
  render() {
    return(
      <ul>
        <BandInput addBand={this.props.addBand}/>
        <Bands delete={this.props.delete} bands={this.props.bands}/>
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {bands: state.bands}
}
const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (name) => dispatch({type: "ADD_BAND", name: name}),
    delete: (bandName) => dispatch({type: "DELETE_BAND", name: bandName})
}}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer); 
