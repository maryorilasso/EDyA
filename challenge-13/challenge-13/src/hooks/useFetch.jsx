import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setHasError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error fetching the data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setHasError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    
  }, [url]);

  return { data, isLoading, hasError };
};
