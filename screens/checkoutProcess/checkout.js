import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('window');

const checkout = () => {
    
    const order_info = useSelector(state => state.product);
    console.log('[ORDER FROM THE STATE] ', order_info);

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.checkoutText}>Checkout</Text>

                <View style={styles.paymentSummary}>
                    <View style={styles.individualSummary}>
                        <Text style={styles.paymentText}>Payment</Text>
                        <Text style={styles.cardText}>Visa 4242</Text>
                    </View>

                    <View style={styles.individualSummary}>
                        <Text style={styles.paymentText}>Shipping</Text>
                        <Text style={styles.cardText}>UPS Ground</Text>
                    </View>

                    <View style={styles.individualSummary}>
                        <Text style={styles.paymentText}>Total</Text>
                        <Text style={styles.cardText}>R 900.00</Text>
                    </View>
                </View>
            </View>

            <View style={styles.orderContainer}>
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
        paddingVertical: 15,
        
    },
    checkoutText: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    paymentSummary: {
        backgroundColor: 'white',
        marginVertical: 20,
        // paddingVertical: 10,
    },
    individualSummary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'gray',
        borderBottomWidth: 1,
        padding: 10,
    },
    paymentText: {
        fontSize: 20,
    },
    cardText: {
        fontSize: 20,
    },
    orderContainer: {
        padding: 10,

    },
    placeOrderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'gray',
        padding: 15,
    },
    orderText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    }

})

export default checkout;