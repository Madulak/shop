import { ADD_ADDRESS, ADD_CARD, ADD_SHIPPING_METHOD } from "../actions/productActions";


const initialState = {
    cartItems: 0,
    address: null,
    creditcard: null,
    shippingMethod: null,

}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case ADD_SHIPPING_METHOD:
            return {
                ...state,
                shippingMethod: action.shippingMethod
            }
        case ADD_ADDRESS:
            return {
                ...state,
                address: action.address,
            }
        case ADD_CARD:
            return {
                ...state,
                creditcard: action.creditcard
            }
        default:
            return state;
    } 
}

export default productReducer;