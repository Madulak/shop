import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { firebase } from '../config';
import Featured from '../components/UI/featured';

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
            <SearchBar containerStyle={{
                    backgroundColor: 'white',
                    borderWidth: 0,
                    borderColor: 'white',
                }} 
                inputContainerStyle={{
                    backgroundColor: 'white',
                }}
                placeholder='Search...' 
                onChangeText={(e) => setSearchQuery(e)}
                value={searchQuery}
            />
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
    }
})

export default search;