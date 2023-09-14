// create your App component here
import React, { useState, useEffect } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dogImage, setDogImage] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://dog.ceo/api/breeds/image/random'
      );
      const data = await response.json();
      setDogImage(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <img src={dogImage.message} alt="A Random Dog"></img>;
};

export default App;
