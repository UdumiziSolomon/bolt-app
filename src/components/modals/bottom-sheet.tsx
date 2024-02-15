/* eslint-disable react-native/no-inline-styles */
import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';
import Cancel from 'svgs/close.svg';

type Props = {
  children?: ReactNode;
  close?: () => void;
};

export const BottomSheet = ({ children, close }: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={{ flex: 1 }} />
      <View style={styles.sheet}>
        <Cancel
          width={ms(27)}
          height={ms(27)}
          style={{ alignSelf: 'flex-end' }}
          onPress={close}
        />
        {children}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(26, 23, 23, 0.5)',
  },
  sheet: {
    borderTopLeftRadius: ms(20),
    borderTopRightRadius: ms(20),
    backgroundColor: '#ffffff',
    width: '100%',
    paddingVertical: ms(30),
    paddingHorizontal: ms(20),
  },
});
