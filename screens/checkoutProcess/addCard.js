import React, { useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  View
} from 'react-native';
import CreditCard from 'react-native-credit-card-form-ui';
import CreditCardDisplay from 'react-native-credit-card-display';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-fullpage-form";


const addCard = () => {

    const [number, setNumber] = useState(0);
 
    return (
        <View style={styles.container}>
            <CreditCardInput  />
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