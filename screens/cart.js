import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import arrival from '../components/UI/arrival';
import CartCard from '../components/UI/cartCard';

import {arivals} from '../data'

const { width, height } = Dimensions.get('window');

const cart = ({navigation}) => {

    return (
        <View style={styles.container}>
            {arivals.length === 0 ?
                <View style={styles.noContainer}>
                    <Text style={styles.noItemText} >No Items Yet</Text>
                </View>
            :
            <>
                <FlatList
                    data={arivals}
                    keyExtractor={item => item.price}
                    renderItem={({item}) => {
                    return (
                        <CartCard 
                            image={item.image} 
                            price={item.price}
                            dress={item.dress}
                        />
                    );
                }}
            />
                <View style={styles.totalPriceContainer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.totalText}>Total</Text>
                        <Text style={styles.priceText}>R 900.00</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('shipping')} style={styles.continueButton}>
                        <Text style={styles.coninueText}>Continue</Text>
                    </TouchableOpacity>
                </View>

                
            </>

            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    noContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noItemText: {
        fontSize: 20,
    },
    totalPriceContainer: {
        // backgroundColor: 'red',
        width: width,
        height: 100,
        padding: 10,
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
    },
    priceText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    continueButton: {
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    coninueText: {
        fontSize: 16,
        color: 'white',
    }
})

export default cart;