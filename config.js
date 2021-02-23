
import * as firebase from 'firebase';
import 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyDwqBFskp9HBk57rNBjJpwTjnZGYSnSaq8",
    authDomain: "shop-ui-42fb3.firebaseapp.com",
    projectId: "shop-ui-42fb3",
    storageBucket: "shop-ui-42fb3.appspot.com",
    messagingSenderId: "472505486503",
    appId: "1:472505486503:web:c6c2720e4f6c8365fe1f82",
    measurementId: "G-JRB8E0NV98"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export  { firebase } ;