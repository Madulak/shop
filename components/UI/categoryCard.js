import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const categoryCard = ({image, text, navigateDetail}) => {

    return (
        <TouchableOpacity onPress={navigateDetail}>
            <ImageBackground imageStyle={{borderRadius: 5,}} resizeMode='cover' style={styles.container} source={image} >
                <Text style={styles.textName}>{text}</Text>
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
        width: width * 0.93,
        height: height * 0.20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 7,
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

export default categoryCard;