import { Text, View } from 'react-native';
import React from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import Header from 'components/header';
import { Button } from 'components/buttons/button';
import { useNavigation } from '@react-navigation/native';
import { Nav } from 'types/nav-lib';
import { Fonts } from 'ui/typography';
import { FTextInput } from 'ui/form/text-input-float';

const EmailForm = () => {
  const { navigate } = useNavigation<Nav>();
  return (
    <View style={styles.wrapper}>
      <Header headerText="Enter your email" isText={true} />
      <View style={styles.body}>
        <FTextInput placeholder="Email" label="Email" />
        <Text style={styles.desc}>We'll send you your ride receipts</Text>
      </View>
      <Button
        isFilled={true}
        text="Continue"
        onPress={() => navigate('NameForm')}
      />
    </View>
  );
};

export default EmailForm;

const styles = ScaledSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: ms(20),
  },
  body: {
    flex: 1,
  },
  desc: {
    fontSize: ms(15),
    marginTop: ms(5),
    fontFamily: Fonts.Regular,
    lineHeight: ms(22),
    color: '#6c757d',
  },
});
