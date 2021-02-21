import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import Featured from '../components/featured';
import { arivals } from '../data';

const { width, height } = Dimensions.get('window');

const wishlist = () => {

    return (
            <FlatList 
                listKey='best seller'
                numColumns={2}
                showsHorizontalScrollIndicator
                data={arivals}
                keyExtractor={item => item.image}
                renderItem={({item}) => {

                    return (
                        <Featured best={'best'} image={item.image} price={item.price} />
                    );
                }}
            />
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