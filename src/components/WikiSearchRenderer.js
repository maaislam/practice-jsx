import React from "react";

const WikiSearchRenderer = (props) => {
  const sanitizedSnippet = (str) => {
    return str.replace(/(<([^>]+)>)/gi, "");
  };

  const results = props.searchRes.map((res) => {
    return (
      <div className="item" key={res.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`http://en.wikipedia.org/?curid=${res.pageid}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GO
          </a>
        </div>
        <div className="content">
          <div className="header">{res.title}</div>
          {sanitizedSnippet(res.snippet)}
        </div>
      </div>
    );
  });

  return (
    <div className="ui segment container celled list">
      <h1>Wiki Search Results</h1>
      {results}
    </div>
  );
};

export default WikiSearchRenderer;
