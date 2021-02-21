import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import ProfileIcon from '../components/UI/profileIcon';

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const { width, height } = Dimensions.get('window');

const profile = () => {

    return (
        <View style={styles.container}>
            
            <View style={styles.headerContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/pexels-pixabay-277390.jpg')} />
                </View>
                <Text style={styles.userText}>Will Kime</Text>
            </View>

            <View style={styles.iconContainer}>
                <ProfileIcon 
                    name='Account Details'
                    icon={<FontAwesome name="user-circle-o" size={24} color="blue" />}
                />

                <ProfileIcon 
                    name='Wishlist'
                    icon={<Entypo name="heart" size={24} color="red" />}
                />

                <ProfileIcon 
                    name='Order History'
                    icon={<MaterialCommunityIcons name="truck-check-outline" size={24} color="grey" />}
                />

                <ProfileIcon 
                    name='Settings'
                    icon={<Feather name="settings" size={24} color="grey" />}
                />

                <ProfileIcon 
                    name='Contact Us'
                    icon={<Feather name="phone-call" size={24} color='green' />}
                />

            </View>

            <TouchableOpacity style={styles.loginContainer}>
                <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: height * 0.03,
    },
    headerContainer: {
        alignSelf: 'center',
    },
    imageContainer: {
        width: width * 0.40,
        height: width * 0.40,
        
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: width * 0.40,
    },
    userText: {
        textAlign: 'center',
        fontSize: 18,
        padding: 10,
        fontWeight: 'bold',
    },
    loginContainer: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 20,
        alignItems: 'center',
        width: width * 0.90,
        alignSelf: 'center',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'darkgray'
    },
    loginText: {
        textAlign: 'center',
        color: 'gray',
    },
})

export default profile;