import { combineReducers } from 'redux';
import { vehiclesGet } from './vehicles';
import { dataSearch } from './search';
import { putVehicle } from './putvehicles';
import { postVehicle } from './vehiclesave';
import {dataForSave} from './data';
const rootReducer = combineReducers({
    vehiclesGet,
    search: dataSearch,
    update: putVehicle,
    postVehicle,
    dataForSave
});
export default rootReducer;