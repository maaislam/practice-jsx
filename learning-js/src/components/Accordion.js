import React, { useState, useEffect} from "react";
import Quote from "./Quote";
import quotes from "../api/quotes";

export default function Accordion() {
 
	const [quotesArr, setQuotesArr] = useState([]);
	
	useEffect(()=>{
		const loadQuotes = async () => {
			const res =	await quotes.get('/quotes.json');
			setQuotesArr(res.data.slice(0,5));
		};
		loadQuotes();
	},[]);


  const renderQuotes = quotesArr.map((quote, index) => {
	

    return (
     <Quote quote={quote} index={index} key={quote.id}/>
    );
  });

  return (
    <div className="ui segment container styled accordion">
      <h1>Programming Quotes</h1>
      {renderQuotes}
    </div>
  );
}
