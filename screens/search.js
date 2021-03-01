import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { firebase } from '../config';
import Featured from '../components/UI/featured';

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const search = () => {

    const [products, setProducts] = useState();
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        let unsubscribe;

            unsubscribe = firebase.firestore().collection('products').onSnapshot(snapshot => {
            
            setProducts(snapshot.docs.map(doc => ({
                id: doc.id,
                product: doc.data()})))
        }) 
        
        return () => {
            unsubscribe ();
        }
    },[])

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TouchableOpacity style={styles.searchIcon}>
                    <Feather  name="search" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.inputText}>
                    <TextInput  placeholder='Search....' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeIcon}>
                    <AntDesign  name="closecircle" size={24} color="black" />
                </TouchableOpacity>
            </View>
            {products && 
                <FlatList 
                    listKey='best seller'
                    numColumns={2}
                    showsHorizontalScrollIndicator
                    data={products}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => {

                        return (
                            <Featured best={'best'} image={item.product.images[0]} price={item.product.price} />
                        );
                    }}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    searchContainer: {
        width: width * 0.90,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: 'black',
        elevation: 5,
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 10,
        marginVertical: 10,
    },
    searchIcon: {
        flex: 0.1,
    },
    inputText: {
        flex: 0.8,
        paddingHorizontal: 10,
    },
    closeIcon: {
        flex: 0.1,
    }
})

export default search;