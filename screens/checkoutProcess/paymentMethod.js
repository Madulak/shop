import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const paymentMethod = ({navigation}) => {

    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <Text style={styles.shippingHeaderText}>Shipping</Text>
            </View>
            
            <View style={styles.boxContainer}>
                <AntDesign name="creditcard" size={150} color="black" />
            </View>

            <View style={styles.contentContainer}>

                <TouchableOpacity onPress={() => navigation.navigate('add card')} style={styles.buttonContainer}>
                    <Ionicons name="add" size={24} color="grey" />
                    <Text style={styles.addText}>Add New Card</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        padding: 10,
    },
    shippingHeaderText: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    boxContainer: {
        width,
        height: height * 0.36,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'grey',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingVertical: 7,
    },
    addText: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray',
    }
})

export default paymentMethod;