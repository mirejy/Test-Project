import { GET_CURRECNCY_PRICE_HOSTEL } from "../index";

export const hostelBedAction = (payload) => {
  return {
    type: GET_CURRECNCY_PRICE_HOSTEL,
    payload: {
      active: payload.active,
      cost: payload.cost,
    },
  };
};
