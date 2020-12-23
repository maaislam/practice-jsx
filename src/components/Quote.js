//import React, { useState } from 'react'

function Quote({ quote, index, onAuthorClick, classActive }) {
  return (
    <>
      <div
        className={`title ${classActive}`}
        onClick={() => onAuthorClick(index)}
      >
        {quote.author}
        <i
          className={`angle ${classActive === "active" ? "up" : "down"} icon`}
        ></i>
      </div>
      <div className={`content ${classActive}`}>
        <p>{quote.quote}</p>
      </div>
    </>
  );
}

export default Quote;
