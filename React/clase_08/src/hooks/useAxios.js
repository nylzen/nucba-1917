import { useState } from 'react';
import axios from 'axios';
import { initialPokemon } from '../data/initialPokemon';

export const useAxios = () => {
  // Con estos 3 estados vamos a manejar toda la app
  const [data, setData] = useState(initialPokemon);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // Crear un handler para cuando busquemos algo en el form
  const handleSubmit = async (e, pokemon) => {
    e.preventDefault();

    setData(null);
    setError(false);
    setIsLoading(true);

    try {
      let selectedPokemon = pokemon.toLowerCase().trim();

      // declaramos la data
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
      );
      setData(data);
    } catch (error) {
      setError('Pokemon no encontrado, busca bien broderr');
    }

    setIsLoading(false);
  };

  return { data, isLoading, error, handleSubmit };
};
