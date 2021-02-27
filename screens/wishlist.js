import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import Featured from '../components/UI/featured';
import { arivals } from '../data';
import { useSelector } from 'react-redux';
import { firebase } from '../config';

const { width, height } = Dimensions.get('window');

const wishlist = () => {

    const id = useSelector(state => state.auth.userId);
    const [wishlistData, setWishlistData] = useState();

    useEffect(() => {
        let unsubscribe;

            unsubscribe = firebase.firestore().collection('users').doc(id)
                .collection('wishlist').where('type', '==', 'real cart').onSnapshot(snapshot => {
            
            setWishlistData(snapshot.docs.map(doc => ({
                id: doc.id,
                product: doc.data()})))
        }) 
        
        
        
        return () => {
            unsubscribe ();
        }
    },[])

    return (
            <>
                {wishlistData && 
                    <FlatList 
                        listKey='best seller'
                        numColumns={2}
                        showsHorizontalScrollIndicator
                        data={wishlistData}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => {
        
                            return (
                                <Featured best={'best'} image={item.product.images[0]} price={item.product.price} />
                            );
                        }}
                    />
                }
            </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: height * 0.03,
        backgroundColor: 'white',
    }
})

export default wishlist;