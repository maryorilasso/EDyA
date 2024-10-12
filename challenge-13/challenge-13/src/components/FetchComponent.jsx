// src/components/FetchComponent.js

import React from 'react';
import { useFetch } from '../hooks/useFetch';

const FetchComponent = () => {
  const { data, isLoading, hasError } = useFetch('https://api.example.com/data');

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (hasError) {
    return <h2>Error: {hasError}</h2>;
  }

  return (
    <div>
      <h1>Data fetched successfully:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchComponent;
