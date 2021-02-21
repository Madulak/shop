import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import Featured from '../components/featured';
import { arivals } from '../data';

const shopDetail = () => {

    return (
        <View style={styles.container}>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    }
})

export default shopDetail;