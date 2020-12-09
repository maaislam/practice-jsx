import React from "react";

import ReactDOM from "react-dom";

import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Geolocation from "./Geolocation";

const App = () => {
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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
