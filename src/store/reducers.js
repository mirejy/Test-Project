import {
  GET_CURRECNCY_PRICE_ONE_B,
  GET_CURRECNCY_PRICE_TWO_B,
  GET_CURRECNCY_PRICE_HOSTEL,
} from "../index";

const initialState = {
  oneBed: {
    active: false,
    cost: 15,
  },
  twoBed: {
    active: false,
    cost: 24,
  },
  hostelBed: {
    active: false,
    cost: 5,
  },
};

export const rootReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case GET_CURRECNCY_PRICE_ONE_B:
      return {
        ...state,
        oneBed: action.payload,
      };
    case GET_CURRECNCY_PRICE_TWO_B:
      return {
        ...state,
        twoBed: action.payload,
      };
    case GET_CURRECNCY_PRICE_HOSTEL:
      return {
        ...state,
        hostelBed: action.payload,
      };
  }
  return state;
};
