import React, { useState, useEffect } from 'react';
import { useCounter } from '../hooks/useCounter';

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://breakingbadapi.com/api/quotes/${counter}`);
        const data = await response.json();
        
        if (data.length > 0) {
          setQuote(data[0]);
        } else {
          setQuote(null);
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching the quote: ", error);
        setQuote(null);
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, [counter]);

  return (
    <div>
      <button onClick={increment}>Next Quote</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : quote ? (
        <blockquote>
          "{quote.quote}" - {quote.author}
        </blockquote>
      ) : (
        <p>No quote found</p>
      )}
    </div>
  );
};

export default MultipleCustomHooks;
