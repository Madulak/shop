import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions  } from 'react-native';

const { width, height } = Dimensions.get('window')

const featured = ({image, price, best, modalHandler}) => {

    return (
        <TouchableOpacity onPress={modalHandler} style={{...styles.container, margin: best ? 5: 10}}>
            
                <Image style={styles.image} resizeMode='cover' source={image} />
                <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>{price}</Text>
                    <Text style={styles.description}>classic ramper</Text>
                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width > 400 ? 195: 150,
        height: 250,
        margin: 10,
    },
    image: {
        width: width > 400 ? 195: 150,
        height: 200,
    },
    priceContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 5,
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        color: 'gray',
        fontSize: 15,
    }
})

export default featured;