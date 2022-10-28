import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Card from '../../components/card/Card';
// import Search from '../../components/Search/Search';
// import { useAxios } from '../../hooks/useAxios';

const Fetch = () => {
  //* Usando CustomHook para fetchear con un buscador por id
  //   const { data, isLoading, error, handleSubmit } = useAxios();

  //   return (
  //     <>
  //       <div>
  //         <h1>Fetch</h1>
  //         <Search handleSubmit={handleSubmit} />
  //         {isLoading && <p>Cargando</p>}
  //         {error && <p style={{ color: 'red' }}>{error}</p>}
  //         {data && <Card {...data} />}
  //       </div>
  //     </>
  //   );

  // * Usando useEffect para fetchear
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch(err => console.log(err));
  }, [setData]);

  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {data.map(character => (
        <div key={character.name} style={{ width: '200px' }}>
          <img
            src={character.image}
            alt={character.name}
            style={{ width: '150px' }}
          />
          <h2>{character.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Fetch;
