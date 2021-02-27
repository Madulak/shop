import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const nextButton = ({color}) => {

    return (
        <TouchableOpacity style={{...styles.container, backgroundColor: color}}>
            <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        backgroundColor: 'lightgreen',
        zIndex: 10,
        bottom: 5,
        right: 5,
        borderRadius: 3,
        padding: 5,
        flexGrow: 0,
        margin: 10,
        width: Dimensions.get('window').width * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    submitText: {
        color: 'white',
    }
})

export default nextButton;