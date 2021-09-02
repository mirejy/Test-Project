import { GET_CURRECNCY_PRICE_ONE_B } from "../index";

export const oneBedAction = (payload) => {
  return {
    type: GET_CURRECNCY_PRICE_ONE_B,
    payload: {
      active: payload.active,
      cost: payload.cost,
    },
  };
};
