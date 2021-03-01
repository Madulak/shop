import React from 'react';
import {  StyleSheet, Modal, ActivityIndicator, View } from 'react-native';


const modal = ({modals, }) => {

    

    return (
        <Modal
            animationType='none'
            transparent={true}
            visible={modals}
            
        >
            <View style={styles.container}>
                <ActivityIndicator color='black' size='large' />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    
})

export default modal;
