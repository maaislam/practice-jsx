import React from 'react';
import Link from './Link'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">
                Home
            </Link>
            <Link href="/commentsapproval" className="item">
                Comments Approval
            </Link>
            <Link href="/geolocation" className="item">
                Geolocation
            </Link>
            <Link href="/search" className="item">
               Search
            </Link>
            <Link href="/accordion" className="item">
                Accordion
            </Link>
            <Link href="/counter" className="item">
                Counter
            </Link>
            <Link href="/dropdown" className="item">
                Dropdown
            </Link>
            <Link href="/translate" className="item">
                Translate
            </Link>
            <Link href="/searchwiki" className="item">
                Wiki Search
            </Link>
        </div>
    );
}

export default Header;
