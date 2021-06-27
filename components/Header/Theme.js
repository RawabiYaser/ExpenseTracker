import WavyHeader from './Waves';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import React from 'react';

export default function Theme1() {
  return (
    <View style={styles.container}>
      <WavyHeader customStyles={styles.svgCurve} />
      <View style={styles.headerContainer}>
        <Image
           style={styles.Logo}
           source={require('C:/Users/Rawab/myProject/assets/Logo.png')}
        />
        <Text style={styles.headerText}> ACCOUNT</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // rest of the styles
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width
  },
  headerText: {
    textAlign: "center",
    padding: 70,
    marginTop: 160,
    fontSize: 40,
    fontWeight: "bold",
    color: "aliceblue",
  },
    Logo: {
        width: 105,
        height: 90,
        position: 'absolute',
        top: 85,
        left:160,
    },
});