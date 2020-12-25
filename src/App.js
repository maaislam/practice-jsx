import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import YoutubeSearch from "./components/pages/YoutubeSearch";
import ImageSearchPage from "./components/pages/ImageSearchPage";
import RandomPractice from "./components/pages/RandomPractice";
import WikiSearch from "./components/WikiSearch";
import Translate from "./components/Translate";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/YoutubeSearch" component={YoutubeSearch} />
            <Route exact path="/imageSearchPage" component={ImageSearchPage} />
            <Route exact path="/components" component={RandomPractice} />
            <Route path="/translate" component={Translate} />
            <Route path="/searchwiki" component={WikiSearch} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
