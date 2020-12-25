import React from 'react';
//import Link from './Link'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/YoutubeSearch" className="item">Youtube Search</Link>
            <Link to="/" className="item">
                Home
            </Link>
            <Link to="/commentsapproval" className="item">
                Comments Approval
            </Link>
            <Link to="/geolocation" className="item">
                Geolocation
            </Link>
            <Link to="/imageSearchPage" className="item">
               Image Search
            </Link>
            <Link to="/accordion" className="item">
                Accordion
            </Link>
            <Link to="/counter" className="item">
                Counter
            </Link>
            <Link to="/dropdown" className="item">
                Dropdown
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
}

export default Header;
