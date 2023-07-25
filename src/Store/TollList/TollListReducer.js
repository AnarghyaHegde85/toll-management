import { ADD_LIST,ADD_TOLL_LIST } from "./TollListTypes";
const initialState={
    TollList:[],
    showDialogToll:false,
}
export const tollListReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_LIST:
            return{
                ...state,
                TollList:[...state.TollList, action.payload]
            }

        case ADD_TOLL_LIST:
            return{
                ...state,
                showDialogToll:!state.showDialogToll,
            }
            default:
                return state
    }
}