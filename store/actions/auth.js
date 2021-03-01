
import { firebase } from '../../config';

export const ONBOARDING = 'ONBOARDING';
export const AUTHENTICATION = 'AUTHENTICATION';
export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const ERROR = 'ERROR';
export const LOGOUT = 'LOGOUT';
export const AUTO_LOGIN = 'AUTO_LOGIN';
export const LOADING = 'LOADING';

export const onboarding = () => {

    return dispatch => {

        dispatch({type: ONBOARDING, isOnboarding: false})
    }
}

export const authentication = () => {

    return dispatch => {
        dispatch({type: AUTHENTICATION, isAuth: true})
    }
}

export const signup = (data) => {
    return async dispatch => {
        
        const { phonenumber, fullname, email, password} = data

        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
            console.log(user.user.email);
            const isNewUser = user.additionalUserInfo.isNewUser;
            if (isNewUser) {
                let newUser = await firebase.firestore().collection('users').add({
                    email: email,
                    phonenumber,
                    fullname,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                })

                const { id } = newUser
                const createWishlist = await firebase.firestore().collection('users').doc(id).collection('wishlist').add({type: 'dummy wishlist'});
                const createCart = await firebase.firestore().collection('users').doc(id).collection('cart').add({type: 'dummy cart'});
                const createCard = await firebase.firestore().collection('users').doc(id).collection('creditcard').add({type: 'dummy card'});
                const createAddress = await firebase.firestore().collection('users').doc(id).collection('adress').add({type: 'dummy address'});
                const createOrder = await firebase.firestore().collection('users').doc(id).collection('orders').add({type: 'dummy order'});
            }
        } catch (error) {
            console.log(error)
            throw error;
        }

        dispatch({type: SIGNUP,  })
    }
}

export const login = (email, password) => {
    return async dispatch => {
        let usermail;
        let user;
        let userId
        dispatch({type: ERROR, error: null})
        try {
            user = await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log('[User]',user);
            usermail = user.user.email;
            const querySnapshot = await firebase.firestore().collection('users').where('email', '==', usermail).get()
            if(!querySnapshot.empty) {
                const user = querySnapshot.docs[0].data()
                const id = querySnapshot.docs[0].id
                console.log('[USER__DB]  ', id);
                // rest of your code 
                userId = id;
            }
            

         dispatch({type: LOGIN, user: user.user, isAuth: true, userId: userId})   
        } catch (error) {
            console.log(error.message);
            dispatch({type: ERROR, error: error.message})
            throw error;
        }

        
    }
}

export const auto_login = () => {

    return async dispatch => {
        try {
            dispatch({type: LOADING, loading: true})
            let userId;
            await firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    // console.log('[LOGGED IN] ', user);
                   firebase.firestore().collection('users').where('email', '==', user.email).get()
                        .then(querySnapshot => {
                            if(!querySnapshot.empty) {
                                const user = querySnapshot.docs[0].data()
                                const id = querySnapshot.docs[0].id
                                console.log('[USER__DB]  ', id);
                                // rest of your code 
                                userId = id;
                                dispatch({type: AUTO_LOGIN, user: user, userId: id, isAuth: true})
                            }
                        })
                    // auth()
                } else {
                    console.log('[NOT LOGGED IN] ')
                }
            })
            dispatch({type: LOADING, loading: false})

            

            

        } catch (error) {
            console.log(error);
            throw error;
        }

        
    }
}

export const logout = () => {

    return async dispatch => {

        try {
            firebase.auth().signOut();

            dispatch({type: LOGOUT, isAuth: false, user: null})
        } catch (error) {
            console.log('[ERROR] ', error);
            throw error;    
        }
    }
}