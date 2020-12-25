import React, { useState, useEffect } from "react";
import Quote from "./Quote";
import quotes from "../api/quotes";

export default function Accordion() {
  const [quotesArr, setQuotesArr] = useState([]);

  const [activeIndex, setActiveIndex] = useState(null);

  const onAuthorClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    let mounted =true;
    const loadQuotes = async () => {
      const res = await quotes.get("/quotes.json");
      if(mounted){
        setQuotesArr(res.data.slice(0, 5)) 
      }
    };
    loadQuotes();
    return () => mounted = false
    
  }, []);

  const renderQuotes = quotesArr.map((quote, index) => {
    const active = index === activeIndex ? "active" : "";
   
    return (
      <Quote
        quote={quote}
        index={index}
        key={quote.id}
        onAuthorClick={onAuthorClick}
        classActive={active}
        
      />
    );
  });

  return (
    <div className="ui segment container styled accordion">
      <h1>Programming Quotes</h1>
      {renderQuotes}
    </div>
  );
}
