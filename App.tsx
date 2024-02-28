/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, LogBox, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from 'navigations/root-navigator';
import { ms } from 'react-native-size-matters';

LogBox.ignoreAllLogs();

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <View style={styles.wrapper}>
          <RootNavigator />
        </View>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingTop: ms(50),
  },
});

export default App;
