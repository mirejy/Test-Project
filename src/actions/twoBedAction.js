import { GET_CURRECNCY_PRICE_TWO_B } from "../index";

export const twoBedAction = (payload) => {
  return {
    type: GET_CURRECNCY_PRICE_TWO_B,
    payload: {
      active: payload.active,
      cost: payload.cost,
    },
  };
};
