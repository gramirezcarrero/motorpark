import axios from 'axios';
export const VEHICLES = 'VEHICLES';
export const SEARCH = 'SEARCH';
export const U_VEHICLES = 'U_VEHICLES';
export const SAVE_VEHICLES = 'SAVE_VEHICLES';
export const DATA_VEHICLE = 'DATA_VEHICLE';


let url = `${process.env.REACT_APP_URL}`;

export function dataForSave (data){
  return {
    type:DATA_VEHICLE,
    payload: data
  };
}
export function search (data){
  return {
    type:SEARCH,
    payload: data
  };
}

export function putVehicle(data) {
  return (dispatch) => {
    axios.put(`${url}/api/vehicles/${data.id}`, {status: data.status}).then((response) => {
      dispatch({
        type: U_VEHICLES,
        payload: response.data
      });
    }).catch(() => {
      // dispatch( { type: PLAN, payload: response.data[0] } );
    });
  };
}
export function postVehicle(data) {
  return (dispatch) => {
    axios.post(`${url}/api/vehicles`, data).then((response) => {
      dispatch({
        type: SAVE_VEHICLES,
        payload: response.data
      });
    }).catch(() => {
      // dispatch( { type: PLAN, payload: response.data[0] } );
    });
  };
}
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