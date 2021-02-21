
export const ONBOARDING = 'ONBOARDING';
export const AUTHENTICATION = 'AUTHENTICATION';

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