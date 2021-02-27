
import { firebase } from '../../config';

export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const ADD_CARD = 'ADD_CARD';
export const ADD_SHIPPING_METHOD = 'ADD_SHIPPING_METHOD';

export const add_to_cart = (data) => {

    return async (dispatch, getState) => {

        const {userId } = getState().auth;

       try {
            const checkCartExists = 
            await firebase.firestore().collection('users')
            .doc(userId).collection('cart').where('type', '==', 'real cart').get()

            
            //     console.log('[Check] ', checkCartExists.empty)
            // if (checkCartExists.empty) {
                firebase.firestore().collection('users').doc(userId).collection('cart').add({
                    type: 'real cart',
                    ...data,
                })
            // }

       } catch (error) {
           console.log(error);
           throw error;
       }
        // console.log('[CheckCartExists]  ', checkCartExists);
        dispatch({type: ADD_TO_CART})
    }
}


export const add_to_wishlist = (data) => {

    return async (dispatch, getState) => {

        const {userId } = getState().auth;

       try {
            const checkCartExists = 
            await firebase.firestore().collection('users')
            .doc(userId).collection('wishlist').where('type', '==', 'real wishlist').get()

            
                console.log('[Check] ', checkCartExists.empty)
            if (checkCartExists.empty) {
                firebase.firestore().collection('users').doc(userId).collection('wishlist').add({
                    type: 'real cart',
                    ...data,
                })
            }

       } catch (error) {
           console.log(error);
           throw error;
       }
        // console.log('[CheckCartExists]  ', checkCartExists);
        dispatch({type: ADD_TO_CART})
    }
}

export const add_card = (data) => {

    return async (dispatch, getState) => {

        const {userId } = getState().auth;

       try {
            const checkCartExists = 
            await firebase.firestore().collection('users')
            .doc(userId).collection('creditcard').where('type', '==', 'real creditcard').get()

            
                console.log('[Check] ', checkCartExists.empty)
            if (checkCartExists.empty) {
                firebase.firestore().collection('users').doc(userId).collection('creditcard').add({
                    type: 'real creditcard',
                    ...data,
                })
            }

       } catch (error) {
           console.log(error);
           throw error;
       }
        // console.log('[CheckCartExists]  ', checkCartExists);
        dispatch({type: ADD_CARD, creditcard: data})
    }
}

export const add_address = (data) => {

    return async (dispatch, getState) => {

        const {userId } = getState().auth;

       try {
            const checkCartExists = 
            await firebase.firestore().collection('users')
            .doc(userId).collection('adress').where('type', '==', 'real address').get()

            
                console.log('[Check] ', checkCartExists.empty)
            if (checkCartExists.empty) {
                firebase.firestore().collection('users').doc(userId).collection('adress').add({
                    type: 'real address',
                    ...data,
                })
            }

       } catch (error) {
           console.log(error);
           throw error;
       }
        // console.log('[CheckCartExists]  ', checkCartExists);
        dispatch({type: ADD_CARD, address: data})
    }
}

export const add_shipping_method = (data) => {

    return dispatch => {

        dispatch({type: ADD_SHIPPING_METHOD, shippingMethod: data})
    }
}
