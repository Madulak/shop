import { AUTHENTICATION, ONBOARDING, LOGIN, LOGOUT } from "../actions/auth";

const initialState = {
    isAuth: true,
    isOnboarding: false,
    user: null,

}

const authReducer = (state = initialState, action) => {

    switch(action.type) {

        case ONBOARDING:
            return {
                ...state,
                isOnboarding: action.isOnboarding
            }

        case AUTHENTICATION:
            return {
                ...state,
                isAuth: action.isAuth
            }

        case LOGIN:
            return {
                ...state,
                user: action.user,
                isAuth: action.isAuth
            }

        case LOGOUT:
            return {
                ...state,
                user: action.user,
                isAuth: action.isAuth,
            }

        default:
            return state
    }

    
}

export default authReducer;