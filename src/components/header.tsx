import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Dimensions, Pressable } from 'react-native';
import { ms, ScaledSheet } from 'react-native-size-matters';
import { Nav } from 'types/nav-lib';

const { width } = Dimensions.get('window');

import ArrowLeft from 'svgs/arrow-left.svg';

interface HeaderProps {
  headerText?: string;
  isText?: boolean;
}

const Header = ({ headerText, isText }: HeaderProps) => {
  const { goBack } = useNavigation<Nav>();
  return (
    <View style={styles.header}>
      <Pressable onPress={goBack}>
        <ArrowLeft width={ms(27)} height={ms(27)} />
      </Pressable>
      {isText && <Text style={styles.headerText}> {headerText}</Text>}
    </View>
  );
};

export default Header;

const styles = ScaledSheet.create({
  header: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: ms(10),
    marginTop: ms(10),
  },
  headerText: {
    fontSize: ms(18),
    marginLeft: ms(20),
    fontFamily: 'LibreBaskerville-Bold',
    marginTop: ms(3),
  },
});
