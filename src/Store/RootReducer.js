import { combineReducers } from "redux";
import { vehicleListReducer } from "./VehicleList/VehicleListReducer";
import { tollListReducer } from "./TollList/TollListReducer";
export const reducers=combineReducers({
    toll:tollListReducer,
    vehicle:vehicleListReducer
});