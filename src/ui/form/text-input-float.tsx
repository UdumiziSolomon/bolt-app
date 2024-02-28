/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardTypeOptions } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { Fonts } from 'ui/typography';

type FTextInputProps = {
  errorMessage?: string;
  style?: any;
  placeholder?: string;
  label?: string;
  keyboardType?: KeyboardTypeOptions;
  onBlur?: () => void;
  onFocus?: () => void;
};

export const FTextInput = ({
  errorMessage,
  style,
  placeholder,
  label,
  keyboardType = 'default',
  onBlur,
  onFocus,
}: FTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
    onBlur && onBlur();
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus && onFocus();
  };

  return (
    <View style={styles.container}>
      {isFocused && placeholder ? (
        <Text style={styles.label}>{label}</Text>
      ) : null}
      <TextInput
        style={[
          styles.input,
          {
            borderColor: isFocused ? '#457b9d' : '#ffffff',
            backgroundColor: isFocused ? '#ffffff' : '#e9ecef',
          },
          style,
        ]}
        placeholder={isFocused ? '' : placeholder}
        placeholderTextColor={'#6c757d'}
        keyboardType={keyboardType}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onEndEditing={handleBlur}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    marginVertical: ms(10),
  },
  input: {
    borderRadius: ms(15),
    borderWidth: ms(2),
    fontFamily: Fonts.Regular,
    fontSize: ms(16),
    paddingVertical: ms(25),
    paddingHorizontal: ms(20),
  },
  label: {
    position: 'absolute',
    top: ms(10),
    left: ms(20),
    fontSize: ms(14),
    color: '#6c757d',
    zIndex: ms(1),
    fontFamily: Fonts.Regular,
  },
});
