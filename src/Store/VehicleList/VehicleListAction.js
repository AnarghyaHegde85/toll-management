import { type } from "@testing-library/user-event/dist/type/index.js";
import { VEHICLE_LIST,SHOW_DAILOG_VEHICLE, DATA_FILTER, DATA_SEARCH } from "./VehicleListTypes.js";

export const vehicleList=(vehicles)=>{
    return{
        type:VEHICLE_LIST,
        payload:vehicles
    }
}

export const showDialogVehicle=()=>({
        type:SHOW_DAILOG_VEHICLE,
})

// export const dataFilter=(filteredData)=>{
//     return{
// type: DATA_FILTER,
// payload: filteredData,
//     }
// }


export const searchData=(search)=>{
    console.log();
    return{
    type: DATA_SEARCH,
    payload: search,

    }
}