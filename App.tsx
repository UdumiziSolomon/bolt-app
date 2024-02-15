import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from 'navigations/root-navigator';

LogBox.ignoreAllLogs();

function App(): React.JSX.Element {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <SafeAreaView style={styles.wrapper}>
          <RootNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
});

export default App;
