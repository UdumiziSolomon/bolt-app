import React, { ReactNode, FC } from 'react';
import { Text, TouchableOpacity, Dimensions, View } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { ReadonlyProps } from 'types/auth-type';
import { Fonts } from 'ui/typography';

const { width } = Dimensions.get('window');

interface Props {
  onPress?: () => void;
  icon?: ReactNode;
  text?: string;
}
type ReadonlySignInButtonProps = ReadonlyProps<Props>;

export const SignInButton: FC<ReadonlySignInButtonProps> = ({
  onPress,
  icon,
  text,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <View style={styles.icon}>{icon}</View>
      <Text style={styles.text}>{text}</Text>
      <View />
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  wrapper: {
    width: width - 40,
    borderWidth: 1,
    borderColor: '#aaa',
    marginVertical: ms(10),
    paddingVertical: ms(16),
    borderRadius: ms(100),
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: ms(30),
  },
  text: {
    fontFamily: Fonts.Regular,
    fontSize: ms(16),
    marginLeft: ms(10),
  },
});
