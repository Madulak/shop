import React from 'react';
import { StatusBar } from 'react-native';
import MainNavigation from './mainNavigation';

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import Auth from './store/reducer/auth';
import ProductReducer from './store/reducer/productReducer';
import { enableScreens } from 'react-native-screens';

// import firebase from 'firebase';
// import { firebaseConfig } from './config';
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig)
// }
enableScreens();

const root = combineReducers({
  auth: Auth,
  product: ProductReducer
})

const store = createStore(root, applyMiddleware(ReduxThunk));



export default function App() {
  return (
    <Provider store={store}>
        <StatusBar />
        <MainNavigation />
    </Provider>
  );
}

