import React from 'react';

import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const categories = [
    {
        
        category: 'Jewellary',
        categoryPic: require('./assets/pexels-javon-swaby-2783873.jpg')
    },
    {
        category: 'Clothing',
        categoryPic: require('./assets/pexels-javon-swaby-2783873.jpg')
    },
    {
        category: 'Dresses',
        categoryPic: require('./assets/pexels-javon-swaby-2783873.jpg')
    },
    {
        category: 'Shoes',
        categoryPic: require('./assets/pexels-javon-swaby-2783873.jpg')
    },
]

export const arivals = [
    {
        image: require('./assets/pexels-felicia-1550836.jpg'),
        price: 'R 900.00',
        dress: 'super dress',
    },
    {
        image: require('./assets/pexels-godisable-jacob-1394882.jpg'),
        price: 'R 800.00',
        dress: 'super dress',
    },
    {
        image: require('./assets/pexels-josé-luis-photographer-2388245.jpg'),
        price: 'R 1000.00',
        dress: 'super dress',
    },
    {
        image: require('./assets/pexels-felicia-1550836.jpg'),
        price: 'R 2000.00',
        dress: 'super dress',
    },
    {
        image: require('./assets/pexels-godisable-jacob-1394882.jpg'),
        price: 'R 3000.00',
        dress: 'super dress',
    },
    {
        image: require('./assets/pexels-josé-luis-photographer-2388245.jpg'),
        price: 'R 4000.00',
        dress: 'super dress',
    },

]

export const onboardingarray = [
    {
        image: <Fontisto name="shopping-bag-1" size={100} color="white" />,
        backgroundColor: 'rgba(0,0,0,0.5)',
        title: 'Shopertino',
        subtitle: 'Welcome to Shopertino! Buy our products easily and get access to app only exclusives'
    },
    {
        image: <Fontisto name="shopping-bag" size={100} color="white" />,
        backgroundColor: 'rgba(0,0,0,0.5)',
        title: 'Shopping Bag',
        subtitle: 'Add products to your shopping cart, and check out them later.'
    },
    {
        image: <FontAwesome name="binoculars" size={100} color="white" />,
        backgroundColor: 'rgba(0,0,0,0.5)',
        title: 'Quick Search',
        subtitle: 'Quickly find products you like the most.'
    },
    {
        image: <Octicons name="tasklist" size={100} color="white" />,
        backgroundColor: 'rgba(0,0,0,0.5)',
        title: 'Wishlist',
        subtitle: 'Build a wishlist with your favourite products to buy them later.'
    },
    {
        image: <MaterialCommunityIcons name="truck-check" size={100} color="white" />,
        backgroundColor: 'rgba(0,0,0,0.5)',
        title: 'Order Tracking',
        subtitle: 'Monitor your orders and get updates when something changes.'
    },
    {
        image: <Ionicons name="notifications-outline" size={100} color="white" />,
        backgroundColor: 'rgba(0,0,0,0.5)',
        title: 'Notifications',
        subtitle: 'Get notifications for new products, promotions and discounts.'
    },
    // {
    //     image: <Fontisto name="shopping-bag-1" size={24} color="white" />,
    //     backgroundColor: 'darkgray',
    //     title: 'Stripe Payments',
    //     subtitle: 'Quickly find products you like the most.'
    // },
]