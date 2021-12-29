import { ADD_ITEM, REMOVE_ITEM } from "./actionType";

const initial = {
    prod:[]
}

function reducer(state= initial,action){
    switch (action.type){
        case ADD_ITEM:{
            return{...state,prod:[...state.prod,action.payload]}
        }
        case REMOVE_ITEM:{
            return{
                ...state,
                prod:state.prod.filter((item)=>item.id !== action?.payload?.id)
            }
        }
        default:
            return state
    }
}

export default reducer