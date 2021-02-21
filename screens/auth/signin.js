import React, { useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import * as authActions from '../../store/actions/auth';

const { width, height } = Dimensions.get('window');


const signin = ({navigation}) => {

    //472505486503-jnds042k3dgp9qvqfiggjj3s2h8kv13a.apps.googleusercontent.com

    const dispatch = useDispatch();
    const auth = () => {
        dispatch(authActions.authentication());
    }

    useEffect(() => {
        checkIfLoggedIn()
    },[])

    const checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log('[LOGGED IN] ');
            } else {
                console.log('[NOT LOGGED IN] ')
            }
        }) 
    }

    async function signInWithGoogleAsync() {
        try {
          const result = await Google.logInAsync({
            // behavior: 'web',
            androidClientId: '472505486503-jnds042k3dgp9qvqfiggjj3s2h8kv13a.apps.googleusercontent.com',
            // iosClientId: YOUR_CLIENT_ID_HERE,
            scopes: ['profile', 'email'],
          });
     
          if (result.type === 'success') {
              console.log('[RESULTS] ',result);
              onSignIn(result)
              auth()
            return result.accessToken;
          } else {
              console.log('[CANCELLED]')
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      }


      const isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
          const providerData = firebaseUser.providerData;
          for (let i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.getBasicProfile().getId()) {
              // We don't need to reauth the Firebase connection.
              return true;
            }
          }
        }
        return false;
      }

    const onSignIn = (googleUser) => {
        console.log('Google Auth Response', googleUser);
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
          unsubscribe();
          // Check if we are already signed-in Firebase with the correct user.
          if (!isUserEqual(googleUser, firebaseUser)) {
            // Build Firebase credential with the Google ID token.
            const credential = firebase.auth.GoogleAuthProvider.credential(
                googleUser.idToken, googleUser.accessToken);
      
            // Sign in with credential from the Google user.
            firebase.auth().signInWithCredential(credential).catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              const credential = error.credential;
              // ...
            });
          } else {
            console.log('User already signed-in Firebase.');
          }
        });
      }

    const signInWithGoogleAsyncs = async () => {
        // try {
        //     console.log('Trying to Work')
        //   const result = await Google. logInAsync({
        //     // behavior: 'web',
        //     issuer: 'https://accounts.google.com',
  
        //     androidClientId: '184694901004-r02o8fkbqgvpv4ohh7u4br0qt3klf8ti.apps.googleusercontent.com',
        //     // iosClientId: YOUR_CLIENT_ID_HERE,
        //     scopes: ['openid', 'profile'],
        //   })
        //   let authState = await AppAuth.authAsync(config);
        //   await cacheAuthAsync(authState);
        //   console.log('signInAsync', authState);
        //   return authState;
        //   console.log('Fixing the ')

        //   console.log(result)
        //       if (result.type === 'success') {
        //         onSignIn(result);
                
        //       return result.accessToken;
        //     } else {
        //       return { cancelled: true };
        //     }
          
        // } catch (e) {
        //   return { error: true };
        // }
      //   console.log('Trying to Work')
       Google.logInAsync({
          // behavior: 'web',
          androidClientId: '472505486503-jnds042k3dgp9qvqfiggjj3s2h8kv13a.apps.googleusercontent.com',
          // iosClientId: YOUR_CLIENT_ID_HERE,
          scopes: ['profile', 'email'],
        })
        .then(result => {
            if (result.type === 'success') {
              console.log('[Results]')
                // onSignIn(result);
              // return result.accessToken;
            } else {
              return { cancelled: true };
            }
        })
        .catch(error => console.log(error));
        console.log('Fixing the ')

        
      }
      

    return (
        <View style={styles.container}>
            
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
                    <MaterialCommunityIcons style={styles.icon} name="keyboard-backspace" size={32} color="black" />
                </TouchableOpacity>
                <View style={{flex: 1}} />
            </View>

            <View style={styles.wrapper}>
                <View style={styles.signinContainer}>
                    <Text style={styles.signinText}>Sign In</Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput placeholder='Email or Phone Number' 
                        style={{...styles.textInput}}
                    />
                    <TextInput placeholder='Password'
                        secureTextEntry={true}
                        style={{...styles.textInput}}
                    />
                    
                    <TouchableOpacity onPress={auth} style={styles.loginContainer}>
                        <Text style={styles.loginText}>Log In</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.orContainer}>
                    <Text style={styles.orText}>OR</Text>
                </View>

                <View>
                <SocialIcon
                        // light
                        // raised={true}
                        title='Sign In With Google'
                        button
                        type='google'
                        style={styles.googleButton}
                        // onPress={onSignIn}
                        onPress={signInWithGoogleAsync}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 0,
        
    },
    iconContainer: {
        padding: 15,
        marginVertical: 10,
    },
    icon: {

    },
    wrapper: {
        marginVertical: height * 0.02,
    },
    signinContainer: {
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    signinText: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    formContainer: {},
    textInput: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'darkgray',
        marginVertical: 10,
        width: width * 0.90,
        alignSelf: 'center',
        padding: 7,
    },
    loginContainer: {
        backgroundColor: 'darkgray',
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        width: width * 0.80,
        alignSelf: 'center',
        marginVertical: 10,
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18
    },
    orContainer: {
        marginVertical: 10,
        alignItems: 'center',
    },
    orText: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'gray',
        
    },
    googleButton: {
        borderRadius: 5,
        width: width * 0.80,
        alignSelf: 'center',
    }
})

export default signin;