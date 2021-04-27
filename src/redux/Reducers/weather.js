import {STORE_CITIES} from '../Types';

export const initialState = {
  cityList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_CITIES: {
      return {
        ...state,
        cityList: action.payload,
      };
    }
    default:
      return state;
  }
};
