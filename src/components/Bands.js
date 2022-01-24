import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
    renderBands = () => {
        return this.props.bands.map((band) => (
            <Band delete={this.props.delete} band={band} key={band.id}/>
        ))
    }
    render(){
        return(
            <ol>
                {this.renderBands()}
            </ol>
        )
    }
}

export default Bands