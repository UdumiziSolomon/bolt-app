import React, { useRef, useState, useLayoutEffect } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';

type TInputProps = {
  code: string;
  setCode: (c: string) => void;
  length?: number;
  submitfunc?: any;
};

export const OTPInput = ({
  submitfunc,
  code,
  setCode,
  length = 4,
}: TInputProps) => {
  const inputRef = useRef<any>();

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  const boxDigit = (_: any, index: number) => {
    const digit = code[index] || '';

    const isCurrentValue = index === code.length;
    const styledBox =
      isInputBoxFocused && isCurrentValue
        ? [styles.box, styles.boxFocused]
        : styles.box;

    return (
      <View key={index} style={styledBox}>
        <Text style={styles.digit}>{digit}</Text>
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={handleOnPress} style={styles.otpContainer}>
        {[...Array(length)].map(boxDigit)}
      </Pressable>
      <TextInput
        style={styles.input}
        value={code}
        onChangeText={setCode}
        maxLength={length}
        ref={inputRef}
        onBlur={handleOnBlur}
        keyboardType="numeric"
        onSubmitEditing={submitfunc}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  wrapper: {
    justifyContent: 'flex-start',
  },
  otpContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: ms(20),
    gap: ms(15),
  },
  input: {
    opacity: 0,
    position: 'absolute',
  },
  box: {
    flex: 1,
    height: ms(65),
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#e9ecef',
    borderWidth: ms(2),
    alignItems: 'center',
    borderColor: '#ffffff',
    borderRadius: ms(10),
  },
  boxFocused: {
    borderColor: '#457b9d',
  },
  digit: {
    fontSize: ms(22),
    fontFamily: 'Josefin Sans',
  },
});
