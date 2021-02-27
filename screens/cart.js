import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import arrival from '../components/UI/arrival';
import CartCard from '../components/UI/cartCard';

import {arivals} from '../data'
import { useSelector } from 'react-redux';
import { firebase } from '../config';

const { width, height } = Dimensions.get('window');

const cart = ({navigation}) => {

    const id = useSelector(state => state.auth.userId);
    const [cartData, setCartData] = useState();
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        let unsubscribe;

            unsubscribe = firebase.firestore().collection('users').doc(id)
                .collection('cart').where('type', '==', 'real cart').onSnapshot(snapshot => {
            
            setCartData(snapshot.docs.map(doc => ({
                id: doc.id,
                product: doc.data()})))
        }) 
        
        
        
        return () => {
            unsubscribe ();
        }
    },[])

    useEffect(() => {
        if (cartData) {
            console.log('[CART DATA] ', cartData);
            let mapArray = [];
            cartData.map(el => mapArray.push(el.product.price));
            setTotalPrice(mapArray.reduce((acumulator, last) => acumulator + last))
        }
    
    },[cartData])
  

    console.log('--')
    return (
        <>
            {cartData && 
                <View style={styles.container}>
                {cartData.length === 0 ?
                    <View style={styles.noContainer}>
                        <Text style={styles.noItemText} >No Items Yet</Text>
                    </View>
                :
                <>
                    <FlatList
                        data={cartData && cartData}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => {
                        return (
                            <CartCard 
                                image={item.product.images[0]} 
                                price={item.product.price}
                                dress={item.product.name}
                            />
                        );
                    }}
                />
                    <View style={styles.totalPriceContainer}>
                        <View style={styles.priceContainer}>
                            <Text style={styles.totalText}>Total</Text>
                            {totalPrice && <Text style={styles.priceText}>R {totalPrice && totalPrice}.00</Text>}
                        </View>
    
                        <TouchableOpacity onPress={() => navigation.navigate('shipping')} style={styles.continueButton}>
                            <Text style={styles.coninueText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <Text>CART</Text> */}
                    
                </>
    
                }
            </View>
            }

        </>
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
        borderTopColor: 'black',
        borderTopWidth: 0.5,
        // shadowColor: 'black',
        // shadowOffset: { width: 0, height: 12},
        // elevation: 5,
        shadowRadius: 10,
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