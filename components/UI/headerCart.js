import React from 'react';
import { Touchable } from 'react-native';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const headerCart = ({go_to_cart}) => {

    const cartItems = useSelector(state => state.product.cartItems);

    return (
        <TouchableOpacity onPress={go_to_cart} style={{...styles.container,}}>
            <FontAwesome  name="shopping-bag" size={24} color="black" />
             
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    text: {
        padding: 0,
        backgroundColor: 'red',
        borderRadius: 20,
        position: 'absolute',
        top: 0,
        right: 12,
    }
})

export default headerCart;