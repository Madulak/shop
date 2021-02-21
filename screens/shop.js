import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import CategoryCard from '../components/UI/categoryCard';
import { categories } from '../data';

const { width, height } = Dimensions.get('window');

const shop = ({navigation}) => {

    const navigateDetail = () => {
        navigation.navigate('shop detail')
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
                            navigateDetail={navigateDetail}
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