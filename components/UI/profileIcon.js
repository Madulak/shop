import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

const profileIcon = ({icon, name}) => {

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconContainer}>
                <View>
                    {icon}
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{name}</Text>
                </View>
            </View>
            <View>
                <AntDesign name="right" size={24} color="grey" />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        // marginVertical: 5,
        paddingVertical: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: 15,
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey',
    }
})

export default profileIcon;