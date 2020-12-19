import React, { Component } from "react";
import unsplash from "./api/unsplash";
import faker from "faker";

import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";
import Geolocation from "./components/Geolocation";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import Accordion from "./components/Accordion";
import Counter from "./components/Counter";
import WikiSearch from "./components/WikiSearch";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";


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
    images: [],
    selectedDropdownItem: this.options[0],
  };

  onSelectionChange = (item) => {
    this.setState({ selectedDropdownItem: item });
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
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
        <ImageList images={this.state.images} />
        <Accordion />
        <Counter />
        <Dropdown
          headLabel="Select a Color"
          options={this.options}
          onSelectionChange={this.onSelectionChange}
          selectedOption={this.state.selectedDropdownItem}
        />
        <Translate/>
        <WikiSearch />
      </>
    );
  }
}

export default App;
