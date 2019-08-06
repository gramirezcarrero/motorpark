import { SEARCH } from '../actions';

const initialState = {
  "type": "",
  "plate": "",
  "status": "in"
}
export function dataSearch (state = initialState, action) {

    switch (action.type) {
      case SEARCH:
      {
        return { ...state, ...action.payload };
      }
      default:
        return state;
    }
  
}