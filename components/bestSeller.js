import React from 'react';
import { FlatList } from 'react-native';
import Featured from './UI/featured';

const bestSeller = ({arivals, images}) => {

    return (
        <>
            {images &&
                <FlatList 
                    listKey='best seller'
                    numColumns={2}
                    showsHorizontalScrollIndicator
                    data={images}
                    keyExtractor={item => item.image}
                    renderItem={({item}) => {
        
                        return (
                            <Featured best={'best'} image={item.product.images[0]} price={'item.price'} />
                        );
                    }}
                />
            }
        </>
    );
}

export default bestSeller;