import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import CategoryCard from '../components/UI/categoryCard';
import { categories } from '../data';

const { width, height } = Dimensions.get('window');

const shop = ({navigation}) => {

    const navigateDetail = (id) => {
        navigation.navigate('shop detail', {id: id})
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={item => item.category}
                renderItem={({item}) => {
                    return (
                        <CategoryCard 
                            text={item.category}
                            image={item.categoryPic}
                            navigateDetail={() => navigateDetail(item.category)}
                        />
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

export default shop;