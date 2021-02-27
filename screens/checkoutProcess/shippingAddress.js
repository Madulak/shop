import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TextInput } from 'react-native';
import NextButton from '../../components/UI/nextButton';
import { Octicons } from '@expo/vector-icons';

import { useDispatch } from 'react-redux';
import * as productAction from '../../store/actions/productActions';

const { width, height } = Dimensions.get('window');

const shippingAddress = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [color, setColor] = useState('black');

    useEffect(() => {
        if (name !== '' && email !== '' && address !== '' && city !== '' && state !== '' && zip !== '') {
            setColor('green')
        } else {
            setColor('black')
        }
    },[zip, name, email, address, city, state])

    const add_address = () => {
        const data = {
            name,
            email,
            address,
            city,
            state,
            zip
        }
        if (name !== '' && email !== '' && address !== '' && city !== '' && state !== '' && zip !== '') {
            dispatch(productAction.add_address(data))
            setName('');
            setEmail('');
            setAddress('');
            setCity('');
            setState('');
            setZip('');
        }
        
    }

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
                        <TextInput value={name} 
                            onChangeText={(e) => setName(e)} style={styles.input} 
                            placeholder='Name' 
                            autoCapitalize='none'
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder='Email' 
                            onChangeText={e => setEmail(e)}
                            value={email}
                            autoCapitalize='none'
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder='Address' 
                            onChangeText={e => setAddress(e)}
                            value={address}
                            autoCapitalize='none'
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder='City' 
                            onChangeText={e => setCity(e)}
                            value={city}
                            autoCapitalize='none'
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder='State' 
                            onChangeText={e => setState(e)}
                            value={state}
                            autoCapitalize='none'
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder='Zip Code' 
                            onChangeText={e => setZip(e)}
                            value={zip}
                            keyboardType='number-pad'
                        />
                    </View>

                </View>

                <NextButton color={color} add_address={add_address} />
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