import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TextInput } from 'react-native';
import { Octicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const shippingAddress = () => {

    return (
        <View style={styles.container}>
            {/* <Text>Shipping</Text> */}
            <ScrollView contentContainerStyle={{paddingBottom: 20}}>

                <View style={styles.headerContainer}>
                    <Text style={styles.shippingHeaderText}>Shipping</Text>
                </View>

                <View style={styles.boxContainer}>
                    <Octicons name="package" size={150} color="black" />
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.shippingText}>Shipping Address</Text>

                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder='Name' />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder='Email' />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder='Address' />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder='City' />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder='State' />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder='Zip Code' />
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
        height: height * 0.32,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    shippingText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    formContainer: {
        width: width * 0.95,
        alignSelf: 'center',
    },
    inputContainer: {
        padding: 5,
        borderColor: 'gray',
        // borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    
})

export default shippingAddress;