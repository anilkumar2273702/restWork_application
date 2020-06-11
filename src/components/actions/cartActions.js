
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING} from './action-types/cart-actions'

//add cart action
export const addToCart= (products)=>{
    return{
        type: ADD_TO_CART,
        products
    }
}
//remove item action
export const removeItem=(products)=>{
    return{
        type: REMOVE_ITEM,
        products
    }
}
//subtract qt action
export const subtractQuantity=(products)=>{
    return{
        type: SUB_QUANTITY,
        products
    }
}
//add qt action
export const addQuantity=(products)=>{
    return{
        type: ADD_QUANTITY,
        products
    }
}
