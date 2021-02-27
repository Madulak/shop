import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, ActivityIndicator } from 'react-native';
import Featured from '../components/UI/featured';
import { arivals } from '../data';
import { firebase } from '../config';

const shopDetail = ({route, navigation}) => {

    const { id } = route.params;
    const [products, setProducts] = useState();

    const go_to_detail_product = (id) => {
        navigation.navigate('detail product', { id: id})
    }

    useEffect(() => {
        // setLoading(true)
        let unsubscribe;
        unsubscribe = firebase.firestore().collection('products').where('category', '==', id).onSnapshot(snapshot => {
            
            setProducts(snapshot.docs.map(doc => ({
                id: doc.id,
                product: doc.data()})))
        }) 
        // setLoading(false);
        return () => {
            unsubscribe ();
        }
    },[ ]);

    

    return (
        <>
            {products ? 
                <>
                    {products.length === 0 ?
                        <View style={{...styles.container, justifyContent: 'center',alignItems: 'center'}}>
                            <Text>No Products yet</Text>
                        </View> :
                        <View style={styles.container}>
                        <FlatList 
                            listKey='best seller'
                            numColumns={2}
                            showsHorizontalScrollIndicator
                            data={products}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => {
            
                                return (
                                    <Featured best={'best'} 
                                        image={item.product.images[0]} 
                                        price={item.product.price} 
                                        go_to_detail={() => go_to_detail_product(item.id)}
                                    />
                                );
                            }}
                        />
                    </View>
                    }
                </>:
                <View style={{...styles.container, justifyContent: 'center',alignItems: 'center'}}>
                    <ActivityIndicator size='large' color='black' />
                </View>
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    }
})

export default shopDetail;