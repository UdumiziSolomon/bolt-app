import { createNavigationContainerRef } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { Easing } from 'react-native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params?: any) {
  // @ts-expect-error - reference type
  navigationRef.current?.navigate(name, params);
}

const transitionSpec = {
  open: {
    animation: 'spring',
    config: {
      duration: 250,
      easing: Easing.inOut(Easing.ease),
    },
  },
  close: {
    animation: 'timing',
    config: {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    },
  },
};

export const BottomSheetTransition = {
  transitionSpec,
  cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
} as StackNavigationOptions;

export const ModalTransition = {
  transitionSpec,
  cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
} as StackNavigationOptions;

export const HorizontalTransition = {
  transitionSpec,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
} as StackNavigationOptions;
