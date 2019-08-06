import { SAVE_VEHICLES } from '../actions';

const initialState = {
  type: "",
  plate: "",
  status: "in"
}
export function postVehicle(state = initialState, action) {
  switch (action.type) {
    case SAVE_VEHICLES:
      {
        return { ...state, ...action.payload };
      }
    default:
      return state;
  }
}