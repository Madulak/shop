import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Touchable } from 'react-native';

const { width, height } = Dimensions.get('window');

const shippingMethod = () => {

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.shippingHeaderText}>Shipping</Text>
            </View>
            <View style={styles.boxContainer}>
                <Octicons name="package" size={150} color="black" />
            </View>

            <View style={styles.contentContainer}>
                <View>
                    <Text style={styles.shippingText}>Shipping Method</Text>
                </View>
                
                <TouchableOpacity style={styles.buttonContainer}>
                    <View>
                        <Text style={styles.boldText}>UPS Ground</Text>
                        <Text style={styles.smallText}>Arrives in 3 - 5 days</Text>
                    </View>
                    <View>
                        <Text style={styles.boldText}>Free</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer}>
                    <View>
                        <Text style={styles.boldText}>FedEx</Text>
                        <Text style={styles.smallText}>Arrives Tommorow</Text>
                    </View>
                    <View>
                        <Text style={styles.boldText}>$5.99</Text>
                    </View>
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
        height: height * 0.35,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    contentContainer: {
        paddingHorizontal: 10,
    },
    shippingText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderColor: 'grey',
        borderBottomWidth: 1,
        
    },
    boldText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',

    },
    smallText: {
        color: 'grey',
    }
})

export default shippingMethod;