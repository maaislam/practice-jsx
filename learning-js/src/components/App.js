import React, { Component } from "react";
import unsplash from "../api/unsplash";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Geolocation from "./Geolocation";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Accordion from "./Accordion";
import Counter from "./Counter";
import WikiSearch from "./WikiSearch";
class App extends Component {
  state = {
    images: []
  
  };

  onSearchSubmit = async (term) => {
    
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    
    this.setState({ images: response.data.results });
  };

  
 

  render() {
    return (
      <>
        <div className="ui segment container comments">
          <ApprovalCard>
            <CommentDetail
              author="Sam"
              date="Today at 6:00PM"
              comment="awesome blog post"
              userImg={faker.image.image()}
            />
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail
              author="Ben"
              date="Today at 9:00PM"
              comment="Excellent blog post"
              userImg={faker.image.image()}
            />
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail
              author="Sally"
              date="Today at 7:00PM"
              comment="Good blog post"
              userImg={faker.image.image()}
            />
          </ApprovalCard>
        </div>
        <Geolocation />
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images = {this.state.images}/>
        <Accordion/>
        <Counter/>
        <WikiSearch/>
      </>
    );
  }
}

export default App;
