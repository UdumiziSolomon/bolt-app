import React from 'react';
import { ParamListBase } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HorizontalTransition } from 'utils/navigation';
import {
  AddCard,
  Auth,
  Country,
  CreateAccount,
  EmailForm,
  NameForm,
  Number,
  PaymentForm,
  VerificationCode,
} from 'pages/auth';

const Stack = createStackNavigator<ParamListBase>();

export const AuthNavigator = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator
      initialRouteName={'AuthNavigator'}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animationEnabled: true,
      }}>
      <Screen name="Auth" component={Auth} options={HorizontalTransition} />
      <Screen
        name="Country"
        component={Country}
        options={HorizontalTransition}
      />
      <Screen name="Number" component={Number} options={HorizontalTransition} />
      <Screen
        name="VerificationCode"
        component={VerificationCode}
        options={HorizontalTransition}
      />
      <Screen
        name="CreateAccount"
        component={CreateAccount}
        options={HorizontalTransition}
      />
      <Screen
        name="EmailForm"
        component={EmailForm}
        options={HorizontalTransition}
      />
      <Screen
        name="NameForm"
        component={NameForm}
        options={HorizontalTransition}
      />
      <Screen
        name="PaymentForm"
        component={PaymentForm}
        options={HorizontalTransition}
      />
      <Screen
        name="AddCard"
        component={AddCard}
        options={HorizontalTransition}
      />
    </Navigator>
  );
};
