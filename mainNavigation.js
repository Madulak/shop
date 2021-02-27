import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import Homescreen from './screens/homescreen';
import Auth from './screens/auth/auth';
import SignIn from './screens/auth/signin';
import SignUp from './screens/auth/signup';
import Onboarding from './screens/onboarding';
import Profile from './screens/profile';
import Wishlist from './screens/wishlist';
import Shop from './screens/shop';
import ShopDetail from './screens/shopDetail';
import Cart from './screens/cart';
import ShippingAddress from './screens/checkoutProcess/shippingAddress';
import ShippingMethod from './screens/checkoutProcess/shippingMethod';
import PaymentMethod from './screens/checkoutProcess/paymentMethod';
import AddCard from './screens/checkoutProcess/addCard';
import ShippingUI from './components/UI/ShippingUI';
import Checkout from './screens/checkoutProcess/checkout';
import DetailProduct from './screens/detailProduct';
import HeaderCart from './components/UI/headerCart';

import DrawerContent from './drawerContent';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const mainNavigation = () => {

    const Drawer = createDrawerNavigator();
    const Stack = createStackNavigator();
    const isAuth = useSelector(state => state.auth.isAuth);
    const isOnboarding = useSelector(state => state.auth.isOnboarding);

    const HomeScreens = ({navigation}) => {



        return (
            <Stack.Navigator screenOptions={{headerLeft: () => (
                <View>
                    <Ionicons onPress={() => navigation.toggleDrawer()} style={{padding: 20,}} name="menu-sharp" size={24} color="black" />
                </View>
                ),
                headerRight: () => (
                    <HeaderCart go_to_cart={() => navigation.navigate('shopping bag')} />
                )}}>

                <Stack.Screen  name='Shopertino' component={Homescreen} /> 
            </Stack.Navigator>
        )
    }

    const ProfileScreens = ({navigation}) => {
        return (
            <Stack.Navigator screenOptions={{headerLeft: () => (
                <View>
                    <Ionicons onPress={() => navigation.toggleDrawer()} style={{padding: 20,}} name="menu-sharp" size={24} color="black" />
                </View>
                ),
                headerRight: () => (
                    <FontAwesome style={{marginRight: 20}} name="shopping-bag" size={24} color="black" />
                )}}>

                <Stack.Screen  name='Profile' component={Profile} /> 
            </Stack.Navigator>
        )
    }

    const WishlistScreens = ({navigation}) => {
        return (
            <Stack.Navigator screenOptions={{headerLeft: () => (
                <View>
                    <Ionicons onPress={() => navigation.toggleDrawer()} style={{padding: 20,}} name="menu-sharp" size={24} color="black" />
                </View>
                ),
                headerRight: () => (
                    <FontAwesome style={{marginRight: 20}} name="shopping-bag" size={24} color="black" />
                )}}>

                <Stack.Screen  name='Wishlist' component={Wishlist} /> 
            </Stack.Navigator>
        )
    }

    const ShopScreens = ({navigation}) => {
        return (
            <Stack.Navigator screenOptions={{headerLeft: () => (
                <View>
                    <Ionicons onPress={() => navigation.toggleDrawer()} style={{padding: 20,}} name="menu-sharp" size={24} color="black" />
                </View>
                ),
                headerRight: () => (
                    <FontAwesome onPress={() => navigation.navigate('shopping bag')} style={{marginRight: 20}} name="shopping-bag" size={24} color="black" />
                )}}>

                <Stack.Screen  name='Shop' component={Shop} /> 
            </Stack.Navigator>
        );
    }

    
    const Authentication = () => {

        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='auth' component={Auth} />
                <Stack.Screen name='sign in' component={SignIn} />
                <Stack.Screen name='sign up' component={SignUp} />
                
            </Stack.Navigator>
        );
    }

    const DrawerScreens = ({navigation}) => {

        return (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name='home' component={HomeScreens} />
                <Drawer.Screen name='shop' component={ShopScreens} />
                <Drawer.Screen name='Wishlist' component={WishlistScreens} />
                <Drawer.Screen name='profile' component={ProfileScreens} />
            </Drawer.Navigator>
        );
    }

    const Stacks = ({navigation}) => {

        const navigateShippingMethod = () => {
            navigation.navigate('shipping method')
        }

        return (
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name='full' component={DrawerScreens} />

                <Stack.Screen options={({navigation}) => 
                    ({headerLeft: () => (<ShippingUI cancel={() => navigation.goBack()} name='Cancel' />), 
                    headerRight: () => (<ShippingUI next={() => navigation.navigate('payment method')} name='2 of 4' />), headerTitle: ''})} 
                    name='shipping method' component={ShippingMethod} 
                />

                <Stack.Screen options={({navigation}) => 
                    ({headerLeft: () => (<ShippingUI cancel={() => navigation.goBack()} name='Cancel' />), 
                    headerRight: () => (<ShippingUI next={() => navigation.navigate('checkout')} name='3 of 4' />), headerTitle: ''})} name='payment method' 
                    component={PaymentMethod} 
                />

                <Stack.Screen options={({navigation}) => 
                    ({headerLeft: () => (<ShippingUI name='Cancel' cancel={() => navigation.goBack()} />), 
                    headerRight: () => (<ShippingUI next={() => navigation.navigate('shipping method')} name='1 of 4' />), 
                    headerTitle: ''})} name='shipping' component={ShippingAddress} 
                />
                
                <Stack.Screen name='add card' component={AddCard} />
                
                <Stack.Screen options={({route}) => ({title: route.params.id})} name='shop detail' component={ShopDetail} />

                <Stack.Screen name='shopping bag' component={Cart} />

                <Stack.Screen name='checkout' component={Checkout} />

                <Stack.Screen name='detail product' component={DetailProduct} options={{headerShown: false}} />
                
            </Stack.Navigator>
        )
    }

    return (
        <NavigationContainer>
            {isOnboarding ?
                <Onboarding />:
                <>{!isAuth ? <Authentication />: <Stacks />}</>
            }
            {/* <Stacks /> */}
            
        </NavigationContainer>
    )
}

export default mainNavigation;