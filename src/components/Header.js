import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/YoutubeSearch" className="item">
        Youtube Search
      </Link>
      <Link to="/imageSearchPage" className="item">
        Image Search
      </Link>
      <Link to="/components" className="item">
        Components
      </Link>
      <Link to="/translate" className="item">
        Translate
      </Link>
      <Link to="/searchwiki" className="item">
        Wiki Search
      </Link>
      <Link to="/signup" className="item">
        Signup Form
      </Link>
    </div>
  );
};

export default Header;
