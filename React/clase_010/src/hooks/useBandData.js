import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const fetchBand = ({ queryKey }) => {
  const bandId = queryKey[1];
  return axios.get(`http://localhost:3006/bandas/${bandId}`);
};

export const useBandData = bandId => {
  const queryClient = useQueryClient();

  return useQuery(['bands', bandId], fetchBand, {
    initialData: () => {
      const band = queryClient
        .getQueryData('bands')
        ?.data?.find(band => band.id === parseInt(bandId));

      if (band) {
        return { data: band };
      } else {
        return undefined;
      }
    },
  });
};
