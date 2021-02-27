import React from 'react';
import { FlatList, } from 'react-native';
import Category from './UI/category';
import { categories } from '../data';

const categoriesComp = ({navigateDetail}) => {

    return (
        <FlatList
            listKey='categories'
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item.category}
            renderItem={({item}) => {
                return (
                    <Category navigateDetail={() => navigateDetail(item.category)} image={item.categoryPic} name={item.category} />
                );
            }}
        />
    );
}

export default categoriesComp;