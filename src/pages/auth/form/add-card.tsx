import { Dimensions, Modal, Text, View } from 'react-native';
import React, { useState } from 'react';
import Header from 'components/header';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { Button } from 'components/buttons/button';
import { Fonts } from 'ui/typography';
import { FTextInput } from 'ui/form/text-input-float';
import { Loading } from 'components/modals/loading-modal';
import { useNavigation } from '@react-navigation/native';
import { Nav } from 'types/nav-lib';

const { width } = Dimensions.get('window');

const AddCard = () => {
  const [show, setShow] = useState<boolean>(false);
  const { navigate } = useNavigation<Nav>();

  const navigateHandler = (): void => {
    setShow(true);
    setTimeout(() => {
      navigate('AppNavigator');
      setShow(false);
    }, 2500);
  };

  return (
    <View style={styles.wrapper}>
      <Header isText={true} headerText="New Card" />
      <View style={styles.body}>
        <FTextInput label="Card Number" placeholder="Card Number" />
        <View style={styles.inputWrapper}>
          <FTextInput
            label="Expiry Date"
            placeholder="Expiry Date"
            style={styles.half}
          />
          <FTextInput
            label="Secure code"
            placeholder="Secure code"
            style={styles.half}
          />
        </View>
      </View>
      <Text style={styles.footerText}>
        Bolt may charge a small amount to confirm your card details. This is
        immediately refunded. <Text style={styles.learn}>Learn more.</Text>
      </Text>
      <Button text="Add card" isFilled={true} onPress={navigateHandler} />
      <Modal transparent visible={show}>
        <Loading />
      </Modal>
    </View>
  );
};

export default AddCard;

const styles = ScaledSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: ms(20),
  },
  body: {
    flex: 1,
  },
  footerText: {
    fontSize: ms(14.5),
    marginTop: ms(10),
    fontFamily: Fonts.Regular,
    lineHeight: ms(17),
    color: '#6c757d',
    marginBottom: ms(5),
  },
  learn: {
    textDecorationLine: 'underline',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: ms(10),
  },
  half: {
    width: width / 2.2,
  },
});
