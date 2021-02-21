import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Dimensions, Animated } from 'react-native';

import Category from '../components/UI/category';
import Arrival from '../components/UI/arrival';
import Featured from '../components/featured';
import { categories, arivals } from '../data';
import Modal from './modal';

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = width * 0.72;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

const homescreen = ({navigation}) => {

    const scrollX = useRef(new Animated.Value(0)).current;
    const data = [{key: 'left-spacer'}, ...arivals, {key: 'right-spacker'}];
    const [modal, setModal] = useState(false);

    const modalHandler = () => {
        setModal(state => !state);
    }

    const goToCart = () => {
        setModal(state => !state);
        navigation.navigate('shopping bag');
    }

    return (
        <FlatList
            ListHeaderComponent={
                <View style={styles.container}>
                    {/* <ScrollView> */}
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={categories}
                            keyExtractor={item => item.category}
                            renderItem={({item}) => {
                                return (
                                    <Category image={item.categoryPic} name={item.category} />
                                );
                            }}
                        />

                        <Modal goToCart={goToCart} modalHandler={modalHandler} modals={modal} />

                        <View style={styles.arrivalContainer}>
                            <Text style={styles.arrivalText}>New Arrivals</Text>
                        </View>

                        <Animated.FlatList 
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={data}
                            keyExtractor={item => item.price}
                            snapToInterval={ITEM_SIZE}
                            decelerationRate={0}
                            bounces={false}
                            scrollEventThrottle={16}
                            onScroll={Animated.event(
                                [{ nativeEvent: {contentOffset: {x: scrollX}}}],
                                { useNativeDriver: true}
                            )}
                            renderItem={({item, index}) => {

                                if (!item.image) {
                                    return(<View 
                                        style={{
                                            width: SPACER_ITEM_SIZE
                                        }}
                                    />)
                                }

                                const inputRange = [
                                    // (index -2 ) * ITEM_SIZE,
                                    (index -2 ) * ITEM_SIZE,
                                    (index - 1) * ITEM_SIZE,
                                    index * ITEM_SIZE,
                                ]

                                const translateY = scrollX.interpolate({
                                    inputRange,
                                    outputRange: [ .9, 1, .9]
                                })

                                return (
                                    <View style={{width: ITEM_SIZE, height: width > 350 ? height * 0.60: 300 }}>
                                        <Arrival price={item.price} translateY={translateY} image={item.image} />
                                    </View>
                                );
                            }}
                        />

                        <View style={styles.featuredContainer}>
                            <Text style={styles.featuredText}>Featured</Text>
                        </View>

                        <FlatList 
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={arivals}
                            keyExtractor={item => item.price}
                            listKey='featured'
                            renderItem={({item}) => {

                                return (
                                    <Featured modalHandler={modalHandler} image={item.image} price={item.price} />
                                );
                            }}
                        />


                        <View style={styles.featuredContainer}>
                            <Text style={styles.featuredText}>best seller</Text>
                        </View>

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
                    {/* </ScrollView> */}
                </View>
            }
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    arrivalContainer: {
        marginVertical: 20,
        alignItems: 'center',
    },
    arrivalText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
    },
    featuredContainer: {
        marginVertical: 15,

    },
    featuredText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10,
        color: 'gray',
    }
})

export default homescreen;