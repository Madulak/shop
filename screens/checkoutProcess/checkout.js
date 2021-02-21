import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const checkout = () => {

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text>Checkout</Text>

                <View style={styles.paymentSummary}>
                    <View style={styles.individualSummary}>
                        <Text>Payment</Text>
                        <Text>Visa 4242</Text>
                    </View>
                </View>
            </View>

            <View>
                <TouchableOpacity style={styles.placeOrderContainer}>
                    <Text>Place Order</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flexGrow: 1, 
        // backgroundColor: 'red'
    },
    paymentSummary: {
        backgroundColor: 'white',
    },
    individualSummary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

})

export default checkout;