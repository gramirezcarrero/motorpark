import { VEHICLES } from '../actions';

const initialState = {
  "success": "true",
  "message": "vehicles retrieved successfully",
  "vehicles": [
  ]
}
export function vehiclesGet(state = initialState, action) {
  switch (action.type) {
    case VEHICLES:
      {
        return { ...state, ...action.payload };
      }
    default:
      return state;
  }
}