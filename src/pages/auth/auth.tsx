/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { SignInButton } from 'modules/auth/components/signin-button';
import React, { JSX } from 'react';
import { View, Text, Dimensions, Pressable } from 'react-native';
import { ms, ScaledSheet } from 'react-native-size-matters';
import { Nav } from 'types/nav-lib';

const { width } = Dimensions.get('window');
import Google from 'svgs/google.svg';
import Facebook from 'svgs/facebook.svg';
import { useCountryState } from 'modules/auth/state/use-country-state';
import Down from 'svgs/down.svg';
import { Fonts } from 'ui/typography';

const Auth = (): JSX.Element => {
  const { navigate } = useNavigation<Nav>();
  const { countryCode, flag } = useCountryState();

  return (
    <View style={styles.wrapper}>
      <View style={styles.body}>
        <Text style={styles.number}>Enter your number</Text>
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

        <View style={{ marginVertical: ms(20) }}>
          <SignInButton
            text="Sign in with Google"
            icon={<Google width={ms(30)} height={ms(30)} />}
          />
          <SignInButton
            text="Sign in with Facebook"
            icon={<Facebook width={ms(30)} height={ms(30)} />}
          />
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
          , and confirm that you're over 18. We may send promotions related to
          our services - you can unsubscribe anytime in Communication Settings
          under your Profile.
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
  number: {
    color: '#000000',
    fontFamily: Fonts.Bold,
    fontSize: ms(20),
    fontWeight: 'bold',
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
    fontFamily: Fonts.Regular,
  },
  flag: {
    fontSize: ms(30),
  },
  orLayer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: ms(15),
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
    paddingVertical: ms(10),
    paddingHorizontal: ms(15),
  },
  footerText: {
    textAlign: 'center',
    color: '#777777',
    fontFamily: Fonts.Regular,
    fontSize: ms(13),
    lineHeight: ms(17),
  },
});
