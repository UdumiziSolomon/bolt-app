import React, { JSX } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { Fonts } from 'ui/typography';

const App = (): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Main Application Screen</Text>
    </View>
  );
};

export default App;

const styles = ScaledSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontFamily: Fonts.Bold,
    fontSize: ms(18),
  },
});
