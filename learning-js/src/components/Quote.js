//import React, { useState } from 'react'

function Quote({quote, index, onAuthorClick, classActive}) {
    
 
    
    return (
        <>
        <div className={`title ${classActive}`} onClick={() => onAuthorClick(index)}>
          <i className="dropdown icon"></i>
          {quote.author}
        </div>
        <div className={`content ${classActive}`}>
          <p>{quote.quote}</p>
        </div>
      </>
    )
}

export default Quote
