import React from 'react';
import { FlatList } from 'react-native';

import Featured from '../components/UI/featured';

const featured = ({arivals, modalHandler, images}) => {

    

    return (
        <>
            {images &&
                <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={images}
                keyExtractor={item => item.price}
                listKey='featured'
                renderItem={({item}) => {
    
                    return (
                        <Featured modalHandler={modalHandler} image={item.product.images[1]} price={item.product.price} name={item.product.name} />
                    );
                }}
            />
            }
        </>
    );
}

export default featured;