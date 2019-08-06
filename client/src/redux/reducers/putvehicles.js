import { U_VEHICLES } from '../actions';

const initialState = {
  "success": "true",
  "message": "vehicles retrieved successfully",
  "vehicles": [
  ]
}
export function putVehicle(state = initialState, action) {
  switch (action.type) {
    case U_VEHICLES:
      {
        return { ...state, ...action.payload };
      }
    default:
      return state;
  }
}