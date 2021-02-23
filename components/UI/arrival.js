import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, Image, Animated, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const arrival = ({image, translateY, price}) => {

    return (
        <Animated.View style={{...styles.container, transform: [{scale: translateY}]}}>
            <TouchableOpacity style={styles.imageContainer}>
                <Image style={styles.image} resizeMode='cover' source={{uri: image}} />
            </TouchableOpacity>
            {/* <View style={styles.priceContainer}>
                <Text>{price}</Text>
            </View> */}
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 10,
        // backgroundColor: 'red',
        margin: 10
    },
    imageContainer: {
        shadowOffset: {width: 0, height: 2},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 10,
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        
        // borderRadius: 10,
    },
    priceText: {
        fontSize: 18,
        alignSelf: 'center',
        marginVertical: 10,
    },
    priceContainer: {
        // flex: 0.1
    }
})

export default arrival;