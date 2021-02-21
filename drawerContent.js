import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DrawerIcon from './components/UI/drawerIcon';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const drawerContent = (props) => {

    // console.log('[PROPS] ', supers)

    return (
        <View style={styles.container}>
            <DrawerIcon
                navigate={() => props.navigation.navigate('home')}
                name={'Home'}
                icon={<AntDesign name="home" size={24} color="black" />}
            />

            <DrawerIcon 
                navigate={() => props.navigation.navigate('shop')}
                name={'Shop'}
                icon={<MaterialCommunityIcons name="border-all" size={24} color="black" />}
            />

            <DrawerIcon 
                
                name={'Bag'}
                icon={<SimpleLineIcons name="bag" size={24} color="black" />}
            />

            <DrawerIcon 
                name={'Search'}
                icon={<Ionicons name="md-search-outline" size={24} color="black" />}
            />


            <DrawerIcon 
                name={'Orders'}
                icon={<MaterialCommunityIcons name="truck-check-outline" size={24} color="black" />}
            />

            <DrawerIcon 
                navigate={() => props.navigation.navigate('Wishlist')}
                name={'Whishlist'}
                icon={<EvilIcons name="heart" size={24} color="black" />}
            />

            <DrawerIcon 
                navigate={() => props.navigation.navigate('profile')}
                name={'Profile'}
                icon={<SimpleLineIcons name="user" size={24} color="black" />}
            />

            <DrawerIcon 
                name={'Logout'}
                icon={<AntDesign name="logout" size={24} color="black" />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
    }
})

export default drawerContent;