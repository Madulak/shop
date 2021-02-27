import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, InteractionManager } from 'react-native';

import Category from '../components/categories';
import NewArrival from '../components/newArrivals';
import Featured from '../components/featured';
import BestSeller from '../components/bestSeller';
import { categories, arivals } from '../data';
import Modal from './modal';

import { useSelector } from 'react-redux';
import { firebase } from '../config';

const homescreen = ({navigation}) => {

    const isAuth = useSelector(state => state.auth.userId);
    console.log('[AUTH ___ USER] ', isAuth);
    const [modal, setModal] = useState(false);
    const [products, setProducts] = useState()
    const [featured, setFeatured] = useState();
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)

        let unsubscribe;
        InteractionManager.runAfterInteractions(() => {
            unsubscribe = firebase.firestore().collection('products').limit(3).onSnapshot(snapshot => {
            
                setProducts(snapshot.docs.map(doc => ({
                    id: doc.id,
                    product: doc.data()})))
            }) 
            setLoading(false);
        })
        return () => {
            unsubscribe ();
        }
    },[ ]);

    useEffect(() => {
        setLoading(true)
        let unsubscribe;
        unsubscribe = firebase.firestore().collection('products').orderBy('category','desc').limit(3).onSnapshot(snapshot => {
            
            setFeatured(snapshot.docs.map(doc => ({
                id: doc.id,
                product: doc.data()})))
        }) 
        setLoading(false);
        return () => {
            unsubscribe ();
        }
    },[ ]);

    console.log(loading)
    // console.log('[PRODUCTS] ', products ? products : 'one of ' )

    const modalHandler = () => {
        setModal(state => !state);
    }

    const go_to_detail_product = (id) => {
        navigation.navigate('detail product', { id: id})
    }

    const goToCart = () => {
        setModal(state => !state);
        navigation.navigate('shopping bag');
    }

    const navigateDetail = (id) => {
        navigation.navigate('shop detail', {id: id})
    }

    return (
        <>
            {products ? 
                <FlatList
                    ListHeaderComponent={
                        <View style={styles.container}>
                                {loading === true ? 
                                <View style={{...styles.container, justifyContent: 'center', alignItems: 'center'}}>
                                    <ActivityIndicator size='large' color='black' />
                                </View>: 
                                <>
                                    <Category navigateDetail={navigateDetail} />
        
                                    <Modal goToCart={goToCart} modalHandler={modalHandler} modals={modal} />
        
                                    <View style={styles.arrivalContainer}>
                                        <Text style={styles.arrivalText}>New Arrivals</Text>
                                    </View>
        
                                    <NewArrival images={products && products } go_to_detail={go_to_detail_product} arivals={arivals} />
        
                                    <View style={styles.featuredContainer}>
                                        <Text style={styles.featuredText}>Featured</Text>
                                    </View>
                                    <Featured images={featured && featured } go_to_detail={go_to_detail_product} arivals={arivals} />
        
                                    <View style={styles.featuredContainer}>
                                        <Text style={styles.featuredText}>best seller</Text>
                                    </View>
        
                                    <BestSeller images={featured && featured } go_to_detail={go_to_detail_product}  arivals={arivals} />
                                </>}
                        </View>
                    }
                />:

            <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color='black' />
            </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    arrivalContainer: {
        marginTop: 20,
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