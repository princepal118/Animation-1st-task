import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PrimaryButton = ({children}: any) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{children}</Text>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'blue',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 150,
    borderRadius: 80,
  },
  buttonText: {
    textAlign: 'center',
  },
});
