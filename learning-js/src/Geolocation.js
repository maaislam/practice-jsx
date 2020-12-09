
import React, { Component } from 'react';

class Geolocation extends Component {
    
    state = {lat: null};



    render() {
        
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (error) => console.log(error)
        );

        return (
            <div>
                Latitude: {this.state.lat}
            </div>
        );
    }
}

export default Geolocation;