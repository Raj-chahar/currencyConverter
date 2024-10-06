import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [amount, newAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [currencySymbol, setCurrencySymbol] = useState('');
  const amtDollar = () => {
    let dollarRate = 0.012;
    let result = (amount * dollarRate).toFixed(3);
    if (result > 0) {
      setConvertedAmount(result);}
      setCurrencySymbol('$');
  };
  const amtEuro = () => {
    let euroRate = 0.011;
    let result = (amount * euroRate).toFixed(3);
    if (result > 0) {
      setConvertedAmount(result);}
      setCurrencySymbol('€');
  };
  const amtPound = () => {
    let poundRate = 0.0091;
    let result = (amount * poundRate).toFixed(3);
    if (result > 0) {
      setConvertedAmount(result);}
      setCurrencySymbol('£');
  };
  return (
    <SafeAreaView>
      <View>
        <Text style={Styles.headText}>Currency Converter</Text>
        <View style={Styles.inputGrid}>
        <TextInput
        style={Styles.input}
        value={amount}
        onChangeText={newAmount}
        placeholder="Enter Amount in ₹"
        keyboardType="numeric"
        />
        </View>
        <View style={Styles.btnGrid1}>
          <TouchableOpacity style={[Styles.btn, Styles.btnD]} onPress={amtDollar}>
            <Text style={Styles.btnText}>Dollar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Styles.btn, Styles.btnE]} onPress={amtEuro}>
            <Text style={Styles.btnText}>Euro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Styles.btn, Styles.btnP]} onPress={amtPound}>
            <Text style={Styles.btnText}>Pound</Text>
          </TouchableOpacity>
        </View>
        {convertedAmount ? (
          <Text style={Styles.resultText}>Converted ₹ {amount} : {currencySymbol} {convertedAmount}</Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  headText: {
    marginTop: 10,
    color: '#333',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputGrid: {
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 150,
    margin: 12,
    marginBottom: 30,
    borderWidth: 2,
    padding: 10,
    textAlign: 'right',
    borderRadius: 10,
  },
  btnGrid1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 12,
  },
  btnGrid2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 12,
    marginTop: 50,
  },
  btnGrid3: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 12,
    marginTop: 50,
  },
  btn: {
    backgroundColor: 'black',
    height: 40,
    width: 125,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnD: {
    backgroundColor: '#4CAF50',
  },
  btnE: {
    backgroundColor: '#2196F3',
  },
  btnP: {
    backgroundColor: '#9C27B0',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 50,
  },
});
