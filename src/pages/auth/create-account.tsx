import { Text, View } from 'react-native';
import React from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { SignInButton } from 'modules/auth/components/signin-button';

import Google from 'svgs/google.svg';
import { OrComponent } from './auth';
import { Button } from 'components/buttons/button';
import { useNavigation } from '@react-navigation/native';
import { Nav } from 'types/nav-lib';
import { Fonts } from 'ui/typography';

const CreateAccount = () => {
  const { navigate } = useNavigation<Nav>();
  return (
    <View style={styles.wrapper}>
      <Text style={styles.topText}>Create an account</Text>
      <Text style={styles.subText}>
        Save time by linking your social account. We will never share any
        personal data.
      </Text>
      <SignInButton
        text="Sign in with Google"
        icon={<Google width={ms(30)} height={ms(30)} />}
      />
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
    marginBottom: ms(20),
    color: '#6c757d',
  },
});
