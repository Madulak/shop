
import { firebase } from '../../config';

export const ONBOARDING = 'ONBOARDING';
export const AUTHENTICATION = 'AUTHENTICATION';
export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const ERROR = 'ERROR';
export const LOGOUT = 'LOGOUT';

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
                await firebase.firestore().collection('users').add({
                    email: email,
                    phonenumber,
                    fullname,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                })
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
        dispatch({type: ERROR, error: null})
        try {
            user = await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log('[User]',user);
            usermail = user.user.email;
            
        } catch (error) {
            console.log(error.message);
            dispatch({type: ERROR, error: error.message})
            throw error;
        }

        dispatch({type: LOGIN, user: user.user, isAuth: true})
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