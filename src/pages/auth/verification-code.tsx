/* eslint-disable react-native/no-inline-styles */
import { Modal, Pressable, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from 'components/header';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useVerificationModeState } from 'modules/auth/state/use-verification-mode-state';
import { capitalize } from 'utils/text';
import { Button } from 'components/buttons/button';
import { OTPInput } from 'utils/otp-input';
import { useCountryState } from 'modules/auth/state/use-country-state';
import { Nav } from 'types/nav-lib';
import { Fonts } from 'ui/typography';
import { BottomSheet } from 'components/modals/bottom-sheet';

import Chat from 'svgs/chat.svg';
import Phone from 'svgs/phone.svg';
import Pencil from 'svgs/pencil.svg';
import { Loading } from 'components/modals/loading-modal';

const VerificationCode = () => {
  const { navigate } = useNavigation<Nav>();
  const { verificationMode } = useVerificationModeState();
  const { countryCode } = useCountryState();
  const route = useRoute<any>();
  const { number } = route.params;
  const [countdown, setCountdown] = useState<number>(5);
  const [otp, setOtp] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);

  const closeSheet = (): void => {
    setShow(false);
  };

  const navigateHandler = () => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      navigate('CreateAccount');
    }, 2000);
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <View style={styles.wrapper}>
      <Header />
      <Modal transparent visible={load}>
        <Loading />
      </Modal>
      <View style={styles.body}>
        <Text style={styles.numberText}>Enter the code </Text>
        <Text style={styles.numberDesc}>
          {capitalize(verificationMode)} code was sent to
          <Text
            style={{
              fontWeight: 'bold',
              fontFamily: 'Josefin Sans',
              fontSize: ms(19),
            }}>
            {' '}
            {countryCode}
            {number}
          </Text>
        </Text>
        <View>
          <OTPInput code={otp} setCode={setOtp} submitfunc={() => null} />
        </View>
        <View style={styles.resendLayer}>
          <Text style={styles.resendText}>Resend code in </Text>
          <Text style={styles.resendCode}>{countdown}</Text>
        </View>
        {countdown <= 0 && (
          <Button
            text="Resend code"
            onPress={() => setShow(true)}
            isBorder={true}
          />
        )}
        {otp.length === 4 && (
          <Button
            isFilled={true}
            text="Verify account"
            onPress={navigateHandler}
          />
        )}
      </View>
      <Modal transparent visible={show}>
        <BottomSheet close={closeSheet}>
          <Text style={styles.resCode}> Resend code to</Text>
          <Text style={styles.resNum}>
            {countryCode}
            {number}
          </Text>
          <Pressable style={styles.list} onPress={closeSheet}>
            <Chat width={ms(30)} height={ms(30)} />
            <Text style={styles.listText}> Get a code via SMS </Text>
          </Pressable>
          <Pressable style={styles.highlight} onPress={closeSheet}>
            <Phone width={ms(25)} height={ms(25)} />
            <Text style={styles.listText}> Request call back </Text>
          </Pressable>
          <Pressable
            style={styles.highlight}
            onPress={() => navigate('Number')}>
            <Pencil width={ms(25)} height={ms(25)} />
            <Text style={styles.listText}> Edit phone number </Text>
          </Pressable>
        </BottomSheet>
      </Modal>
    </View>
  );
};

export default VerificationCode;

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
  resendLayer: {
    flexDirection: 'row',
    alignitems: 'center',
    marginVertical: ms(15),
    flex: 1,
  },
  resendText: {
    fontSize: ms(16),
    fontFamily: Fonts.Regular,
    color: '#6c757d',
  },
  resendCode: {
    fontSize: ms(18),
    fontFamily: Fonts.Bold,
    marginTop: ms(-3),
  },
  resCode: {
    fontSize: ms(20),
    fontFamily: Fonts.Bold,
    color: '#000000',
  },
  resNum: {
    fontSize: ms(20),
    marginTop: ms(5),
    fontFamily: Fonts.Bold,
    marginBottom: ms(15),
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: ms(20),
  },
  highlight: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: ms(1),
    paddingVertical: ms(20),
    borderTopColor: '#dee2e6',
  },
  listText: {
    fontSize: ms(16),
    fontFamily: Fonts.Regular,
    marginLeft: ms(20),
    marginTop: ms(2),
    color: '#343a40',
  },
});
