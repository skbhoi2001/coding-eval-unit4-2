import { ADD_ITEM, REMOVE_ITEM } from "./actionType"

export const addItem = ({id,name,price})=>{
    return{
        type:ADD_ITEM,
        payload:{
            id,name,price
        }
    }
}

export const removeItem = (id)=>{
    return{
        type:REMOVE_ITEM,
        payload:{
            id
        }
    }
}