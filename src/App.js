import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import YoutubeSearch from "./components/pages/YoutubeSearch";
import CommentApprovalPage from "./components/pages/CommentApprovalPage";
import Geolocation from "./components/Geolocation";
import ImageSearchPage from "./components/pages/ImageSearchPage";
import Accordion from "./components/Accordion";
import Counter from "./components/Counter";
import Dropdown from "./components/Dropdown";
import WikiSearch from "./components/WikiSearch";
import Translate from "./components/Translate";
import Header from "./components/Header";


class App extends Component {
  options = [
    {
      label: "This color is red",
      value: "red",
    },
    {
      label: "This color is blue",
      value: "blue",
    },
    {
      label: "This color is green",
      value: "green",
    },
  ];

  state = {
    selectedDropdownItem: this.options[0],
  };

  onSelectionChange = (item) => {
    this.setState({ selectedDropdownItem: item });
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/YoutubeSearch" component={YoutubeSearch} />
            <Route
              exact
              path="/commentsapproval"
              component={CommentApprovalPage}
            />
            <Route exact path="/geolocation" component={Geolocation} />
            <Route exact path="/imageSearchPage" component={ImageSearchPage} />
            <Route exact path="/accordion" component={Accordion} />
            <Route exact path="/counter" component={Counter} />
            <Route exact path="/dropdown" component={Dropdown}>
              <Dropdown
                headLabel="Select a Color"
                options={this.options}
                onSelectionChange={this.onSelectionChange}
                selectedOption={this.state.selectedDropdownItem}
              />
            </Route>
            <Route path="/translate" component={Translate}>
              <Translate />
            </Route>
            <Route path="/searchwiki" component={WikiSearch}>
              <WikiSearch />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
