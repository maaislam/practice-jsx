import React, { useState } from 'react'

function Quote({quote, index}) {
    
    const [activeIndex, setActiveIndex] = useState(null);

    const onAuthorClick = (index) => {
        if (activeIndex === index) {
          setActiveIndex(null);
        } else {
          setActiveIndex(index);
        }
        };
    const active = index === activeIndex ? "active" : "";
    
    return (
        <>
        <div className={`title ${active}`} onClick={() => onAuthorClick(index)}>
          <i className="dropdown icon"></i>
          {quote.author}
        </div>
        <div className={`content ${active}`}>
          <p>{quote.quote}</p>
        </div>
      </>
    )
}

export default Quote
