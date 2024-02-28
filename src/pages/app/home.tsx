import React, { JSX } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { Fonts } from 'ui/typography';

const Home = (): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <Text> Home</Text>
    </View>
  );
};

export default Home;

const styles = ScaledSheet.create({
  wrapper: {
    flex: 1,
  },
  text: {
    fontFamily: Fonts.Bold,
    fontSize: ms(18),
  },
});
