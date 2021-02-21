import React from 'react';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { onboardingarray } from '../data';

import { useDispatch } from 'react-redux';
import * as onboardingActions from '../store/actions/auth';

const onboarding = () => {

    const dispatch = useDispatch();
    const onboardHandler = () => {
        dispatch(onboardingActions.onboarding());
    }

    return (
        <Onboarding
            onDone={onboardHandler}
            onSkip={onboardHandler}
            subTitleStyles={{fontWeight: 'bold'}}
            pages={onboardingarray}
        />
    )
}

export default onboarding;