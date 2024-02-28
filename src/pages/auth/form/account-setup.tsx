import { Modal, Text, View } from 'react-native';
import React, { useState } from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { Nav } from 'types/nav-lib';
import { Button } from 'components/buttons/button';
import { Fonts } from 'ui/typography';

import { Loading } from 'components/modals/loading-modal';
import Header from 'components/header';
import Done from 'svgs/done.svg';

const PaymentForm = () => {
  const { navigate } = useNavigation<Nav>();
  const [show, setShow] = useState<boolean>(false);

  const navigateHandler = (): void => {
    setShow(true);
    setTimeout(() => {
      navigate('AppNavigator');
      setShow(false);
    }, 2500);
  };

  return (
    <View style={styles.wrapper}>
      <Header isText={false} />
      <View style={styles.body}>
        <Done width={ms(250)} height={ms(250)} />
        <Text style={styles.payText}>Account</Text>
        <Text style={styles.payDesc}>
          Your account is ready!!!... Ready to set up your profile?
        </Text>
      </View>
      <Button text="Skip" onPress={navigateHandler} isBorder={true} />
      <Button text="Set up profile" isFilled={true} />
      <Modal transparent visible={show}>
        <Loading />
      </Modal>
    </View>
  );
};

export default PaymentForm;

const styles = ScaledSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: ms(20),
  },
  body: {
    flex: 1,
    marginTop: ms(10),
    alignItems: 'center',
  },
  payText: {
    fontSize: ms(24),
    marginTop: ms(10),
    fontFamily: Fonts.Bold,
  },
  payDesc: {
    fontSize: ms(16),
    marginTop: ms(10),
    fontFamily: Fonts.Regular,
    lineHeight: ms(22),
    color: '#6c757d',
    marginBottom: ms(15),
    textAlign: 'center',
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
    color: '#495057',
  },
});
