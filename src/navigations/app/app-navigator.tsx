/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */

import React, { FC } from 'react';
import { ParamListBase } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Account, Home, Invest, Savings } from 'pages/app';
import { Dimensions, Pressable, Text, View } from 'react-native';
import { ms } from 'react-native-size-matters';
import { BottomTabBarProps } from 'types/custom-bottom-tab';

import Car from 'svgs/car.svg';

const Tab = createBottomTabNavigator<ParamListBase>();
const { width } = Dimensions.get('window');

const CustomTabBar: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: ms(30),
        width: width - ms(30),
        alignSelf: 'center',
        alignItems: 'center',
        paddingRight: ms(5),
        backgroundColor: '#457b9d',
        paddingVertical: ms(10),
        borderRadius: ms(20),
      }}>
      {state.routes.map((route, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1 }}>
            <Car
              width={ms(40)}
              height={ms(40)}
              style={{ alignSelf: 'center' }}
            />
            <Text
              style={{
                color: isFocused ? '#45ffff' : '#f5f5f5',
                textAlign: 'center',
                fontFamily: 'Josefin Sans',
                fontSize: ms(14),
              }}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export const AppNavigator = () => {
  const { Navigator, Screen } = Tab;
  return (
    <Navigator
      initialRouteName={'Home'}
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={Home} />
      <Screen name="Savings" component={Savings} />
      <Screen name="Invest" component={Invest} />
      <Screen name="Account" component={Account} />
    </Navigator>
  );
};
