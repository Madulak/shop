import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const auth = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>S</Text>
            </View>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Welcome to Shopertino</Text>
                <Text style={styles.shopText}>Shop & get updates on new products and sales with our mobile app</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => navigation.push('sign in')} style={styles.loginContainer}>
                    <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('sign up')} style={{...styles.loginContainer, ...styles.signupContainer}}>
                    <Text style={{...styles.loginText, ...styles.signupText }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoText: {
        fontSize: 100,
        fontWeight: 'bold',
    },
    welcomeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    shopText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'darkgray',
        marginVertical: 10,
    },
    buttonsContainer: {
        marginVertical: 10,
    },
    loginContainer: {
        backgroundColor: 'darkgray',
        borderRadius: 5,
        padding: 20,
        alignItems: 'center',
        width: width * 0.80,
        alignSelf: 'center',
        marginVertical: 10,
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
    },
    signupContainer: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'darkgray',
    },
    signupText: {
        color: 'darkgray',
    }
})

export default auth;