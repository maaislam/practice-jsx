import React, { Component } from "react";
import SeasonDisplay from './SeasonDisplay'
class Geolocation extends Component {
  state = { lat: null, errMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errMsg: error.message })
    );
  }

  render() {
    if (this.state.errMsg && !this.state.lat) {
      return <div>Error: {this.state.errMsg}</div>;
    } else if (this.state.lat && !this.state.errMsg) {
      return <SeasonDisplay lat={this.state.lat}/>
    } else {
      return <div>Loading!</div>;
    }
  }
}

export default Geolocation;
