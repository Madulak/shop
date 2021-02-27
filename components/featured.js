import React from 'react';
import { FlatList } from 'react-native';

import Featured from '../components/UI/featured';

const featured = ({go_to_detail, modalHandler, images}) => {

    

    return (
        <>
            {images &&
                <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={images}
                keyExtractor={item => item.id}
                listKey='featured'
                renderItem={({item}) => {
    
                    return (
                        <Featured go_to_detail={() => go_to_detail(item.id)} image={item.product.images[1]} price={item.product.price} name={item.product.name} />
                    );
                }}
            />
            }
        </>
    );
}

export default featured;