import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const deleteBand = bandId => {
  return axios.delete(`http://localhost:3006/bandas/${bandId}`);
};

// Handling Mutation
// const deleteBand = bandId => {
//   return axios.delete(`http://localhost:3006/bandas/${bandId}`, {
//     transformResponse: () => bandId,
//   });
// };

export const useDeleteBand = () => {
  const queryClient = useQueryClient();
  // return useMutation(deleteBand);

  // queryinvalidation (especie de f5)
  // return useMutation(deleteBand, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('bands');
  //   },
  // });
  // handling mutation
  // return useMutation(deleteBand, {
  //   onSuccess: data => {
  //     queryClient.setQueryData('bands', oldQueryData => {
  //       const newQueryData = oldQueryData.data.filter(
  //         band => band.id !== data.data
  //       );
  //       return {
  //         ...oldQueryData,
  //         data: newQueryData,
  //       };
  //     });
  //   },
  // });

  // Optimistic Updates
  return useMutation(deleteBand, {
    onMutate: async bandId => {
      await queryClient.cancelQueries('bands');
      const previousBandsData = queryClient.getQueryData('bands');
      const newQueryData = previousBandsData.data.filter(
        band => band.id !== bandId
      );

      queryClient.setQueryData('bands', oldQueryData => {
        return {
          ...oldQueryData,
          data: newQueryData,
        };
      });

      return { previousBandsData };
    },

    onError: (_err, _newBand, context) => {
      queryClient.setQueryData('bands', context.previousBandsData);
    },

    onSettled: () => {
      queryClient.invalidateQueries('bands');
    },
  });
};
