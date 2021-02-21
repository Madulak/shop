import { AUTHENTICATION, ONBOARDING } from "../actions/auth";

const initialState = {
    isAuth: false,
    isOnboarding: true,
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

        default:
            return state
    }

    
}

export default authReducer;