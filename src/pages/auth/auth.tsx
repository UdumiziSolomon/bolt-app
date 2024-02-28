/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { SignInButton } from 'modules/auth/components/signin-button';
import React, { JSX } from 'react';
import { View, Text, Dimensions, Pressable } from 'react-native';
import { ms, ScaledSheet } from 'react-native-size-matters';
import { Nav } from 'types/nav-lib';
import { useCountryState } from 'modules/auth/state/use-country-state';

const { width } = Dimensions.get('window');
import Google from 'svgs/google.svg';
import Facebook from 'svgs/facebook.svg';
import Yahoo from 'svgs/yahoo.svg';
import Down from 'svgs/down.svg';
import Invest from 'svgs/invest.svg';

import { Fonts } from 'ui/typography';

const Auth = (): JSX.Element => {
  const { navigate } = useNavigation<Nav>();
  const { countryCode, flag } = useCountryState();

  return (
    <View style={styles.wrapper}>
      <View style={styles.body}>
        <Invest
          width={ms(220)}
          height={ms(220)}
          style={{ marginBottom: ms(20) }}
        />
        <Text style={styles.wheels}>DragVest</Text>
        <Text style={styles.number}>Enter your number to register now.</Text>
        <View style={styles.inputWrapper}>
          <Pressable
            style={{ flexDirection: 'row', alignItems: 'center', gap: ms(3) }}
            onPress={() => navigate('Country')}>
            <Text style={styles.flag}>{flag}</Text>
            <Down width={ms(12)} height={ms(12)} />
          </Pressable>
          <Text style={styles.numText}> {countryCode} </Text>
          <Pressable onPress={() => navigate('Number')} style={styles.select}>
            <Text />
          </Pressable>
        </View>

        <OrComponent />

        <View
          style={{
            marginVertical: ms(20),
            flexDirection: 'row',
            alignItems: 'center',
            gap: ms(10),
          }}>
          <SignInButton icon={<Google width={ms(30)} height={ms(30)} />} />
          <SignInButton icon={<Yahoo width={ms(50)} height={ms(50)} />} />
          <SignInButton icon={<Facebook width={ms(30)} height={ms(30)} />} />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By signing up, you agree to our{' '}
          <Text onPress={() => console.log('HI')} style={styles.terms}>
            <Text>Terms and Conditions</Text>
          </Text>
          , acknowledge our{' '}
          <Text onPress={() => console.log('HI')} style={styles.terms}>
            <Text>Privacy Policy</Text>
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Auth;

export const OrComponent = () => {
  return (
    <View style={styles.orLayer}>
      <View style={styles.horizontalLine} />
      <Text style={styles.orText}> OR </Text>
      <View style={styles.horizontalLine} />
    </View>
  );
};

const styles = ScaledSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wheels: {
    color: '#000000',
    fontFamily: Fonts.Bold,
    fontSize: ms(23),
    fontWeight: 'bold',
  },
  number: {
    color: '#000000',
    fontFamily: Fonts.Regular,
    fontSize: ms(16),
    fontWeight: 'bold',
    marginTop: ms(8),
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 50,
    backgroundColor: '#eee',
    marginVertical: ms(20),
    paddingHorizontal: ms(15),
    borderRadius: ms(10),
  },
  select: {
    width: width / 1.6,
    paddingVertical: ms(25),
  },
  numText: {
    fontSize: ms(16),
    marginLeft: ms(10),
    fontFamily: Fonts.SemiBold,
  },
  flag: {
    fontSize: ms(30),
  },
  orLayer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: ms(10),
    justifyContent: 'space-evenly',
    gap: ms(10),
  },
  orText: {
    color: '#aaa',
    fontFamily: Fonts.Bold,
    fontSize: ms(15),
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#f0f0f0',
    width: width / 3,
  },
  terms: {
    textDecorationLine: 'underline',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: ms(15),
    paddingHorizontal: ms(20),
  },
  footerText: {
    textAlign: 'center',
    color: '#777777',
    fontFamily: Fonts.Regular,
    fontSize: ms(14),
    lineHeight: ms(17),
  },
});
