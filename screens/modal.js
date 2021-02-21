import React from 'react';
import { View, Text, StyleSheet, Modal, Button, Dimensions, Image, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { arivals } from '../data';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const { width, height } = Dimensions.get('window');

const modal = ({modals, modalHandler, goToCart}) => {

    const isCarousel = React.useRef(null);
    const [index, setIndex] = React.useState(0)

    const SLIDER_WIDTH = Dimensions.get('window').width 
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH )

    const CarouselCardItem = ({item, index}) => {
        return (
            <View key={item.price} style={styles.imageContainer}>
                <Image resizeMode='cover' style={styles.image} source={item.image} />
                <Pagination
                    dotsLength={arivals.length}
                    activeDotIndex={index}
                    carouselRef={isCarousel}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        backgroundColor: 'white',
                        marginVertical: 0,
                        padding: 0,
                    
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    tappableDots={true}
                    containerStyle={{ marginRight: 100, 
                        marginTop: -20, 
                        position: 'absolute',
                        bottom: 0,
                        alignSelf: 'center',
                        zIndex: 10,
                    }}
                />

                    <View style={styles.closeContainer}>
                        <TouchableOpacity onPress={modalHandler} style={styles.button}>
                            <Entypo name="chevron-thin-down" size={24} color="white" />
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button}>
                            <Ionicons name="md-share-social-outline" size={24} color="white" />
                        </TouchableOpacity>
                    </View>

                    <LinearGradient
                        // Background Linear Gradient
                        colors={['transparent', 'rgba(0,0,0,0.8)']}
                        style={styles.background}
                    />
            </View>
        )
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modals}
        >
            <View style={styles.container}>
                <Carousel
                    layout='stack'
                    layoutCardOffset={2}
                    ref={isCarousel}
                    data={arivals}
                    renderItem={CarouselCardItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    inactiveSlideShift={0}
                    useScrollView={true}
                    onSnapToItem={(index) => setIndex(index)}
                    bounces={false}
                    decelerationRate={0}
                />

                <View style={styles.priceContainer}>
                    <Text style={styles.description}>Katie Ruched Tube Top</Text>
                    <Text style={styles.priceText}>R 900.00</Text>
                </View>
                
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.cartContainer}>
                        <Text style={{color: 'white',}}>Add To Bag</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={goToCart} style={{...styles.cartContainer, ...styles.goCart}}>
                        <Text style={{color: 'darkgray'}}>Go to Cart</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white'
    },
    imageContainer: {
        height: height * 0.70,
    },
    image: {
        height: '100%',
        width: '100%',
        // opacity:  0.8,
    },
    closeContainer: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        width: '100%',
        zIndex: 11
    },
    button: {
        padding: 10,
    },
    priceContainer: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        shadowOffset: {width: 0, height: 1},
        shadowColor: 'black',
        shadowOpacity: 0.6,
        elevation: 4,
        borderBottomWidth: 0.5,
        borderColor: 'gray',
        backgroundColor: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 15,
    },
    cartContainer: {
        padding: 15,
        backgroundColor: 'darkgray',
        width: '45%',
        alignItems: 'center',
        borderRadius: 5,
    },
    goCart: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'darkgray',
    },
    description: {
        fontSize: 20,
        color: 'darkgray',
    },
    priceText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        // bottom: 0,
        // borderRadius: 5,
    }
})

export default modal;
