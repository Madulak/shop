import React from 'react';
import { Touchable } from 'react-native';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const cartCard = ({image, price, dress}) => {
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageContainer}>
                <Image 
                    source={{uri: image}}
                    style={styles.image}
                    resizeMode='cover'
                />
            </TouchableOpacity>

            <TouchableOpacity style={{ 
                flex: 1,  
                justifyContent: 'space-between', 
                height: '100%', 
                // backgroundColor: 'red',
                paddingHorizontal: 10,
                paddingVertical: 0
            }}>
                
                <View style={{  }}>
                    <View>
                        <Text style={styles.dressText}>{dress}</Text>
                        <View style={styles.colorContainer}>
                            <Text>Color</Text>
                            {/* <CheckBox
                                // title='Click Here'
                                checked={true}
                                checkedIcon='clear'
                                style={{backgroundColor: 'red'}}
                            /> */}
                        </View>

                        <View style={styles.colorContainer}>
                            <Text>Color</Text>
                            <MaterialIcons name="check-box" size={24} color="black" />
                            <MaterialIcons name="check-box-outline-blank" size={24} color="black" />
                            {/* <CheckBox
                                // title='Click Here'
                                checked={true}
                                checkedIcon='clear'
                                style={{backgroundColor: 'red'}}
                            /> */}
                        </View>
                        
                    </View>

                    

                    
                </View>

                <View style={styles.priceCotainer}>
                    <Text style={styles.priceText}>{price}</Text>
                </View>

            </TouchableOpacity>

            <View style={styles.itemContainer}>
                <TouchableOpacity style={styles.cartButtons}>
                    <Text>+</Text>
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity style={styles.cartButtons}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        width: width * 0.95,
        alignSelf: 'center',
        height: 150,
    },
    imageContainer: {
        width: 100,
        height: 150,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    colorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
    },
    dressText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray',
    },
    priceCotainer: {
        bottom: 10,
    },
    itemContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    cartButtons: {
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 5,
        borderRadius: 5,
        borderColor: 'grey',
        borderWidth: 1,
        width: width * 0.07,
        height: width * 0.07,
    },
    priceText: {
        fontSize: 18,

    }
})

export default cartCard;