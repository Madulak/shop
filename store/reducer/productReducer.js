import { ADD_ADDRESS, ADD_CARD, ADD_SHIPPING_METHOD, ADD_TOTAL_PRICE } from "../actions/productActions";


const initialState = {
    cartItems: 0,
    address: null,
    creditcard: null,
    shippingMethod: null,
    totalprice: null,
    cartproducts: null,
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
        case ADD_TOTAL_PRICE:
            return {
                ...state,
                totalprice: action.totalprice,
                cartproducts: action.cartproducts,
            }

        default:
            return state;
    } 
}

export default productReducer;