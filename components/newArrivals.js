import React, { useRef,} from 'react';
import { FlatList, Animated, View, Dimensions } from 'react-native';
import Arrival from './UI/arrival';

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = width * 0.72;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

const newArrivals = ({arivals, images}) => {

    const scrollX = useRef(new Animated.Value(0)).current;

    let data;
   if (images) {
     data = [{key: 'left-spacer'}, ...images, {key: 'right-spacker'}];
   }

    // console.log('[IMAGES] ', images)
    console.log('[data] ', data);
    
    return ( 
        <>
            {images && 
                <Animated.FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ justifyContent: 'center',alignItems: 'center', }}
                data={data}
                keyExtractor={item => item.id}
                snapToInterval={ITEM_SIZE}
                decelerationRate={0}
                bounces={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: {contentOffset: {x: scrollX}}}],
                    { useNativeDriver: true}
                )}
                renderItem={({item, index}) => {
    
                    if (!item.product) {
                        return(<View 
                            style={{
                                width: SPACER_ITEM_SIZE
                            }}
                        />)
                    }
    
                    const inputRange = [
                        // (index -2 ) * ITEM_SIZE,
                        (index -2 ) * ITEM_SIZE,
                        (index - 1) * ITEM_SIZE,
                        index * ITEM_SIZE,
                    ]
    
                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange: [ .9, 1, .9]
                    })
    
                    return (
                        <View style={{width: ITEM_SIZE, height: width > 350 ? height * 0.60: 300 }}>
                            <Arrival price={item.product.price} translateY={translateY} image={item.product.images[1]} />
                        </View>
                    );
                }}
            />
            }
        </>
    );
}

export default newArrivals;