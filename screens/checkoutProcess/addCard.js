import React, { useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  View
} from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-fullpage-form";
import { useDispatch } from 'react-redux';
import * as productActions from '../../store/actions/productActions';

const addCard = ({navigation}) => {

    const [number, setNumber] = useState(0);
    const dispatch = useDispatch();

    const submit = (data) => {
      if(data.valid){
        console.log(data);
        dispatch(productActions.add_card(data.values));
        navigation.navigate('checkout');
      }
    }
 
    return (
        <View style={styles.container}>
            <CreditCardInput onChange={(data) => submit(data)}  />
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60
  },
});

export default addCard;