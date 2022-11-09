import { Categories } from '../../data';

const INITIAL_STATE = {
  categories: Categories,
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoriesReducer;
