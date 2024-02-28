/* eslint-disable react-native/no-inline-styles */
import { Text, View } from 'react-native';
import React from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { SignInButton } from 'modules/auth/components/signin-button';

import { OrComponent } from './auth';
import { Button } from 'components/buttons/button';
import { useNavigation } from '@react-navigation/native';
import { Nav } from 'types/nav-lib';
import { Fonts } from 'ui/typography';

import Google from 'svgs/google.svg';
import Facebook from 'svgs/facebook.svg';
import Yahoo from 'svgs/yahoo.svg';

const CreateAccount = () => {
  const { navigate } = useNavigation<Nav>();
  return (
    <View style={styles.wrapper}>
      <Text style={styles.topText}>Create an account</Text>
      <Text style={styles.subText}>
        Save time by linking your social account. We will never share any
        personal data.
      </Text>
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
      <View style={{ marginBottom: ms(20) }}>
        <OrComponent />
      </View>
      <Button
        text="Continue with email"
        onPress={() => navigate('EmailForm')}
      />
    </View>
  );
};

export default CreateAccount;

const styles = ScaledSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontSize: ms(22),
    fontFamily: Fonts.Bold,
  },
  subText: {
    fontSize: ms(16),
    marginTop: ms(10),
    fontFamily: Fonts.Regular,
    textAlign: 'center',
    lineHeight: ms(20),
    marginBottom: ms(10),
    color: '#6c757d',
  },
});
