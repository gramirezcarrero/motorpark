
import { DATA_VEHICLE } from '../actions';

const initialState = {
  type: "",
  plate: "",
  status: "in"
}
export function dataForSave(state = initialState, action) {
  switch (action.type) {
    case DATA_VEHICLE:
      {
        return { ...state, ...action.payload };
      }
    default:
      return state;
  }
}

