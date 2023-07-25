import { ADD_LIST ,ADD_TOLL_LIST} from "./TollListTypes";
export const tollList=(data)=>{
    return{
        type:ADD_LIST,
        payload:data
    }
    
}
 export const addTOllList=()=>({
    type:ADD_TOLL_LIST,
 })