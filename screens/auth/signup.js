import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useDispatch } from 'react-redux';
import * as signupActions from '../../store/actions/auth';

const { width, height } = Dimensions.get('window');

const signup = ({navigation}) => {

    const dispatch = useDispatch();

    const [fullname, setFullname] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signup = () => {
        const data = {
            fullname,
            phonenumber,
            email,
            password,
        }
        dispatch(signupActions.signup(data))
        setFullname('');
        setPhonenumber('');
        setEmail('');
        setPassword('');
    }

    return (
        
        <View style={styles.container}>
            
            <ScrollView>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
                        <MaterialCommunityIcons style={styles.icon} name="keyboard-backspace" size={32} color="black" />
                    </TouchableOpacity>
                    <View style={{flex: 1}} />
                </View>

                <View style={styles.wrapper}>
                    <View style={styles.signinContainer}>
                        <Text style={styles.signinText}>Create new account</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <TextInput placeholder='Full Name' 
                            style={{...styles.textInput}}
                            onChangeText={(e) => setFullname(e)}
                            value={fullname}
                        />

                        <TextInput placeholder='Phone Number' 
                            style={{...styles.textInput}}
                            keyboardType='phone-pad'
                            onChangeText={(e) => setPhonenumber(e)}
                            value={phonenumber}
                        />

                        <TextInput placeholder='Email Address' 
                            style={{...styles.textInput}}
                            onChangeText={(e) => setEmail(e)}
                            value={email}
                            keyboardType='email-address'
                            autoCapitalize='none'
                        />

                        <TextInput placeholder='Password' 
                            secureTextEntry={true} 
                            style={{...styles.textInput}}
                            onChangeText={(e) => setPassword(e)}
                            value={password}
                            autoCapitalize='none'
                        />
                        
                        <TouchableOpacity onPress={signup} style={styles.loginContainer}>
                            <Text style={styles.loginText}>Sign up</Text>
                        </TouchableOpacity>

                    </View>

                    
                </View>
            </ScrollView>
            
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
        fontSize: 22,
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

export default signup;