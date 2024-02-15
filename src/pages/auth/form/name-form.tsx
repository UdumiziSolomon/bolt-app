import { Dimensions, Text, View } from 'react-native';
import React from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import Header from 'components/header';
import { Button } from 'components/buttons/button';
import { useNavigation } from '@react-navigation/native';
import { Nav } from 'types/nav-lib';
import { Fonts } from 'ui/typography';
import { FTextInput } from 'ui/form/text-input-float';

const { width } = Dimensions.get('window');

const NameForm = () => {
  const { navigate } = useNavigation<Nav>();
  return (
    <View style={styles.wrapper}>
      <Header headerText="What's your name?" isText={true} />
      <View style={styles.body}>
        <View style={styles.inputWrapper}>
          <FTextInput
            label="First name"
            placeholder="First name"
            style={styles.half}
          />
          <FTextInput
            label="Last name"
            placeholder="Last name"
            style={styles.half}
          />
        </View>
        <Text style={styles.desc}>
          Please enter your name as it appears on your ID or passport
        </Text>
      </View>
      <Button
        isFilled={true}
        text="Continue"
        onPress={() => navigate('PaymentForm')}
      />
    </View>
  );
};

export default NameForm;

const styles = ScaledSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: ms(15),
  },
  body: {
    flex: 1,
  },
  desc: {
    fontSize: ms(15),
    marginTop: ms(10),
    fontFamily: Fonts.Regular,
    lineHeight: ms(22),
    color: '#6c757d',
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
