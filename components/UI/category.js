import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const category = ({image, name, navigateDetail}) => {

    return (
        
            <TouchableOpacity onPress={navigateDetail}>
                <ImageBackground imageStyle={{borderRadius: 5,}} resizeMode='cover' style={styles.container} source={image} >
                    <Text style={styles.textName}>{name}</Text>
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.5)']}
                        style={styles.background}
                    />
                </ImageBackground>
            </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    container: {
        width: 130,
        height: 80,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        // opacity: 0.6,
    },
    backroundImage: {
        width: '100%',
        height: '100%',
        // opacity: 0.6,
    },
    textName: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 10,
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        bottom: 0,
        borderRadius: 5,
    }
})

export default category;