import { AUTHENTICATION, ONBOARDING, LOGIN, LOGOUT, AUTO_LOGIN } from "../actions/auth";

const initialState = {
    isAuth: false,
    isOnboarding: true,
    user: null,
    userId: null

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
                user:  action.user,
                isAuth: action.isAuth,
                userId: action.userId,
            }

        case AUTO_LOGIN:
            return {
                ...state,
                user:  action.user,
                isAuth: action.isAuth,
                userId: action.userId,
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