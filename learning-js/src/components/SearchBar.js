import React, { Component } from "react";

class SearchBar extends Component {
  state = { searchText: "" };

  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  };
  onFormSubmit = (e) => {
   
    e.preventDefault();
    this.props.onSearchSubmit(this.state.searchText)
   
  };

  render() {
    return (
      <div className=" ui container">
        <form className="ui segment form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Image</label>
            <input
              type="text"
              value={this.state.searchText}
              placeholder="Search..."
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
