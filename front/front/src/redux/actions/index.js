import axios from 'axios';
export const VEHICLES = 'VEHICLES';

let url = `${process.env.REACT_APP_URL}`;

export function vehiclesGet(data) {
  return (dispatch) => {
    axios.get(`${url}/api/vehicles/any`, { params: data }).then((response) => {
      dispatch({
        type: VEHICLES,
        payload: response.data
      });
    }).catch(() => {
      // dispatch( { type: PLAN, payload: response.data[0] } );
    });
  };
}