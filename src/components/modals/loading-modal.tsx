/* eslint-disable react-native/no-inline-styles */
import LottieView from 'lottie-react-native';
import React from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { Fonts } from 'ui/typography';

export const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <LottieView
          source={require('svgs/lottie/loader.json')}
          autoPlay
          loop
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.loadText}> Loading... </Text>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(26, 23, 23, 0.5)',
  },
  card: {
    backgroundColor: '#ffffff',
    paddingHorizontal: ms(30),
    paddingVertical: ms(35),
    borderRadius: ms(25),
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadText: {
    fontSize: ms(16),
    marginTop: ms(10),
    fontFamily: Fonts.Regular,
  },
});
