import React, { Component } from "react";
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
class Geolocation extends Component {
  state = { lat: null, errMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errMsg: error.message })
    );
	}
	
	renderContent() {
		 if (this.state.errMsg && !this.state.lat) {
      return <div>Error: {this.state.errMsg}</div>;
    } else if (this.state.lat && !this.state.errMsg) {
      return <SeasonDisplay lat={this.state.lat}/>
    } else {
      return <Loader />;
    }
	}

  render() {
   return (
		<div className="ui segment container" style={{minHeight: '100px'}}>{this.renderContent()}</div>
	 )
  }
}

export default Geolocation;
