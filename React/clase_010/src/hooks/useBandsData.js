import axios from 'axios';
import { useQuery } from 'react-query';

const fetchBands = () => {
  return axios.get('http://localhost:3006/bandas');
};

export const useBandsData = () => {
  return useQuery('bands', fetchBands, {
    staleTime: 30000,
    cacheTime: 40000,
  });
};
