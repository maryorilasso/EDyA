
import React, { useState, useEffect } from 'react';

const QuoteComponent = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://breakingbadapi.com/api/quotes/1');
        const data = await response.json();
        setQuote(data[0]); 
        setIsLoading(false); 
      } catch (error) {
        console.error("Error fetching the quote: ", error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <blockquote>
          "{quote.quote}" - {quote.author}
        </blockquote>
      )}
    </div>
  );
};

export default QuoteComponent;
