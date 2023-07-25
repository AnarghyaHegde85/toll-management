import { vehicleList } from "./VehicleListAction.js";
import { VEHICLE_LIST, SHOW_DAILOG_VEHICLE, DATA_FILTER, DATA_SEARCH } from "./VehicleListTypes.js";

const initialState = {
  VehicleList: [],
  filteredVehicleList:[],
  search: [],
  showDialogvehicle: false,
};

export const vehicleListReducer = (state = initialState, action) => {
  switch (action.type) {
    case VEHICLE_LIST:
      return {
        ...state,
        VehicleList: [...state.VehicleList, action.payload]
      };
    case SHOW_DAILOG_VEHICLE:
      return {
        ...state,
        showDialogvehicle: !state.showDialogvehicle,

      };
    case DATA_FILTER:
      return {
        ...state,
        filteredVehicleList: action.payload,
      };
     case DATA_SEARCH:
        return{
            ...state,
            filteredVehicleList: action.payload,
        // filteredVehicleList:[...state.search, action.payload]
      



        }
    default:
      return state;
  }
};

export default vehicleListReducer;
