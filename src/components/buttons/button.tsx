/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Pressable, Text, Dimensions, ActivityIndicator } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { Fonts } from 'ui/typography';

interface Props {
  text?: string;
  onPress?: () => void;
  isFilled?: boolean;
  isLoading?: boolean;
  isBorder?: boolean;
}

const { width } = Dimensions.get('window');

export const Button = ({
  text,
  onPress,
  isFilled,
  isLoading,
  isBorder,
}: Props) => {
  return (
    <Pressable
      style={[
        styles.btn,
        {
          backgroundColor: isFilled ? '#457b9d' : '#eee',
          borderWidth: isBorder ? ms(1.5) : 0,
          borderColor: isBorder ? '#457b9d' : '#eee',
        },
      ]}
      onPress={onPress}>
      {!isLoading ? (
        <Text
          style={[styles.btnText, { color: isFilled ? '#fff' : '#1d3557' }]}>
          {text}
        </Text>
      ) : (
        <ActivityIndicator color={'#fff'} />
      )}
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  btn: {
    alignSelf: 'center',
    textAlign: 'center',
    paddingVertical: ms(20),
    width: width - 35,
    borderRadius: ms(100),
    marginVertical: ms(5),
  },
  btnText: {
    fontSize: ms(15),
    textAlign: 'center',
    fontFamily: Fonts.Bold,
    color: '#fff',
  },
});
