import { Modal, Pressable, Text, View } from 'react-native';
import React, { useState } from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { Nav } from 'types/nav-lib';
import { Button } from 'components/buttons/button';
import { Fonts } from 'ui/typography';

import Plus from 'svgs/plus.svg';
import Money from 'svgs/money.svg';
import { Loading } from 'components/modals/loading-modal';

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
      <View style={styles.body}>
        <Text style={styles.payText}>Set up payment</Text>
        <Text style={styles.payDesc}>
          Pick a preferred payment method for a more convenient ride later.
        </Text>
        <Pressable style={styles.list} onPress={() => navigate('AddCard')}>
          <Plus width={ms(30)} height={ms(30)} />
          <Text style={styles.listText}> Add debit/credit card </Text>
        </Pressable>
        <Pressable style={styles.highlight} onPress={navigateHandler}>
          <Money width={ms(40)} height={ms(40)} />
          <Text style={styles.listText}> Cash </Text>
        </Pressable>
      </View>
      <Button text="Set up later" onPress={navigateHandler} />
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
    marginTop: ms(50),
  },
  payText: {
    fontSize: ms(23),
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
