import React, { ReactNode, FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { ReadonlyProps } from 'types/auth-type';
import { Fonts } from 'ui/typography';

interface Props {
  onPress?: () => void;
  icon?: ReactNode;
  text?: string;
}
type ReadonlySignInButtonProps = ReadonlyProps<Props>;

export const SignInButton: FC<ReadonlySignInButtonProps> = ({
  onPress,
  icon,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <View style={styles.icon}>{icon}</View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: '#aaa',
    marginVertical: ms(10),
    paddingVertical: ms(14),
    borderRadius: ms(10),
    flexDirection: 'row',
    alignItems: 'center',
    width: ms(80),
    height: ms(60),
    justifyContent: 'center',
  },
  icon: {
    marginHorizontal: ms(20),
  },
  text: {
    fontFamily: Fonts.Regular,
    fontSize: ms(16),
    marginLeft: ms(10),
  },
});
