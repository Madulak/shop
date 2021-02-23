import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const drawerIcon = ({icon, name, navigate, logout}) => {

    return (
        <TouchableOpacity onPress={navigate ? navigate : logout} style={styles.container}>
            <View>
                {icon}
            </View>
            <View style={styles.textContainer}>
                <Text>{name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingLeft: 20,
        width: '100%',
        // backgroundColor: 'red',
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: 10,
    }
})

export default drawerIcon;