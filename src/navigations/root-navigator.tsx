import React from 'react';
import { ParamListBase } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomSheetTransition } from 'utils/navigation';

import App from 'pages/app/app';
import { AuthNavigator } from './auth/auth-navigator';

const Stack = createStackNavigator<ParamListBase>();

export const RootNavigator = () => {
  const { Navigator, Screen } = Stack;
  const isUser: boolean = true;

  return (
    <Navigator
      initialRouteName={isUser ? 'AuthNavigator' : 'AppNavigator'}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animationEnabled: true,
      }}>
      <Screen
        name="AuthNavigator"
        component={AuthNavigator}
        options={BottomSheetTransition}
      />
      <Screen
        name="AppNavigator"
        component={App}
        options={BottomSheetTransition}
      />
    </Navigator>
  );
};
