/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { Button } from 'components/buttons/button';
import Header from 'components/header';
import React, { JSX, useState } from 'react';
import { View, Dimensions, Text, Pressable, TextInput } from 'react-native';
import { ms, ScaledSheet } from 'react-native-size-matters';
import { Nav } from 'types/nav-lib';
import { useCountryState } from 'modules/auth/state/use-country-state';

const { width } = Dimensions.get('window');
import Whatsapp from 'svgs/whatsapp.svg';
import Chat from 'svgs/chat.svg';
import Down from 'svgs/down.svg';
import Checked from 'svgs/checked.svg';
import UnChecked from 'svgs/unchecked.svg';
import Phone from 'svgs/phone.svg';

import {
  VerificationCodeEnumList,
  useVerificationModeState,
} from 'modules/auth/state/use-verification-mode-state';
import { Fonts } from 'ui/typography';

const Country = (): JSX.Element => {
  const { navigate } = useNavigation<Nav>();
  const { countryCode, flag } = useCountryState();
  const { updateVerificationMode, verificationMode } =
    useVerificationModeState();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [number, setIsNumber] = useState<string>('');
  const [load, setIsLoad] = useState<boolean>(false);

  function handleNumber() {
    setIsLoad(true);
    setTimeout(() => {
      setIsLoad(false);
      navigate('VerificationCode', { number: number });
    }, 1000);
  }

  return (
    <View style={styles.wrapper}>
      <Header />
      <View style={styles.body}>
        <Text style={styles.numberText}>Enter your number </Text>
        <Text style={styles.numberDesc}>
          We'll send you a code for verification
        </Text>

        <View style={[styles.flexy, { marginTop: ms(25) }]}>
          <View style={styles.flagReg}>
            <Text style={styles.flag}>{flag}</Text>
            <Text style={styles.phone_code}> {countryCode} </Text>
            <Pressable onPress={() => navigate('Country')}>
              <Down width={ms(17)} height={ms(17)} />
            </Pressable>
          </View>
          <View
            style={[
              styles.inputReg,
              { borderColor: isFocused ? '#457b9d' : '#aaa' },
            ]}>
            <TextInput
              defaultValue={number}
              style={styles.input}
              autoFocus={true}
              keyboardType="number-pad"
              onBlur={() => setIsFocused(false)}
              onFocus={() => setIsFocused(true)}
              onChangeText={(val: string) => setIsNumber(val)}
            />
          </View>
        </View>

        <View style={{ marginTop: ms(15) }}>
          <Pressable
            onPress={() => updateVerificationMode(VerificationCodeEnumList.SMS)}
            style={[styles.flexy, styles.firstOpt]}>
            <View style={[styles.flexy]}>
              <Chat width={ms(30)} height={ms(30)} />
              <Text style={styles.platformText}> Use SMS</Text>
            </View>
            <View>
              {verificationMode === VerificationCodeEnumList.SMS ? (
                <Checked width={ms(30)} height={ms(30)} />
              ) : (
                <UnChecked width={ms(30)} height={ms(30)} />
              )}
            </View>
          </Pressable>
          <Pressable
            onPress={() =>
              updateVerificationMode(VerificationCodeEnumList.PHONE)
            }
            style={[styles.flexy, styles.secondOpt]}>
            <View style={styles.flexy}>
              <Phone width={ms(30)} height={ms(30)} />
              <Text style={styles.platformText}> Phone call</Text>
            </View>
            <View>
              {verificationMode === VerificationCodeEnumList.PHONE ? (
                <Checked width={ms(30)} height={ms(30)} />
              ) : (
                <UnChecked width={ms(30)} height={ms(30)} />
              )}
            </View>
          </Pressable>
          <Pressable
            onPress={() =>
              updateVerificationMode(VerificationCodeEnumList.WHATSAPP)
            }
            style={[styles.flexy, styles.secondOpt]}>
            <View style={styles.flexy}>
              <Whatsapp width={ms(35)} height={ms(35)} />
              <Text style={styles.platformText}>Whatsapp message</Text>
            </View>
            <View>
              {verificationMode === VerificationCodeEnumList.WHATSAPP ? (
                <Checked width={ms(30)} height={ms(30)} />
              ) : (
                <UnChecked width={ms(30)} height={ms(30)} />
              )}
            </View>
          </Pressable>
        </View>
      </View>
      <View>
        <Button
          text="Continue"
          isFilled={true}
          onPress={handleNumber}
          isLoading={load}
        />
      </View>
    </View>
  );
};

export default Country;

const styles = ScaledSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: ms(20),
  },
  body: {
    paddingVertical: ms(10),
    flex: 1,
  },
  numberText: {
    fontSize: ms(20),
    marginTop: ms(10),
    fontFamily: Fonts.Bold,
  },
  numberDesc: {
    fontSize: ms(16),
    marginTop: ms(10),
    fontFamily: Fonts.Regular,
    color: '#6c757d',
  },
  flexy: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: ms(15),
  },
  flagReg: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 2.8,
    backgroundColor: '#f2f2f2',
    paddingVertical: ms(15),
    paddingHorizontal: ms(10),
    borderRadius: ms(10),
    justifyContent: 'space-evenly',
  },
  flag: {
    fontSize: ms(25),
  },
  phone_code: {
    fontSize: ms(16),
    fontFamily: Fonts.Regular,
  },
  inputReg: {
    width: width / 2,
    borderWidth: ms(2),
    paddingVertical: ms(20),
    paddingHorizontal: ms(10),
    borderRadius: ms(10),
  },
  input: {
    fontSize: ms(16),
  },
  firstOpt: {
    borderBottomColor: '#eee',
    borderBottomWidth: ms(1),
    justifyContent: 'space-between',
    paddingVertical: ms(20),
  },
  secondOpt: {
    justifyContent: 'space-between',
    paddingVertical: ms(20),
  },
  platformText: {
    fontSize: ms(13.5),
    fontFamily: Fonts.Bold,
    color: '#555',
  },
  incorrect: {
    fontFamily: Fonts.Regular,
    fontSize: ms(14),
    color: '#c1121f',
    marginVertical: ms(20),
  },
});
