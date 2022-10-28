import axios from 'axios';
import { useState } from 'react';

export const useAxios = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e, character) => {
    e.preventDefault();
    setData(null);
    setError(false);
    setIsLoading(true);

    try {
      let selectedCharacter = character.trim();
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/${selectedCharacter}`
      );
      setData(data);
      console.log(data);
    } catch (error) {
      setError('Buscá bien broderrrrrrrr');
    }
    setIsLoading(false);
  };
  return { data, isLoading, error, handleSubmit };
};
