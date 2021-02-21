import React from 'react';
import { Touchable } from 'react-native';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const shippingUI = ({name, next, cancel}) => {

    return (
        <TouchableOpacity onPress={next ? next: cancel} style={styles.container}>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
    },
    text: {
        fontSize: 16,
    }
})

export default shippingUI;