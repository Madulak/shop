import React from 'react';
import { FlatList } from 'react-native';
import Featured from './UI/featured';

const bestSeller = ({go_to_detail, images}) => {

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
                            <Featured go_to_detail={() => go_to_detail(item.id)} best={'best'} image={item.product.images[0]} price={item.product.price} />
                        );
                    }}
                />
            }
        </>
    );
}

export default bestSeller;