/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
import React, { useState, useMemo } from 'react';
import {
  View,
  Dimensions,
  Text,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import { ms, ScaledSheet } from 'react-native-size-matters';

import Header from 'components/header';
import { CountryData, CountryDataProps } from 'data/country';

const { width } = Dimensions.get('window');

import Search from 'svgs/search.svg';
import { useCountryState } from 'modules/auth/state/use-country-state';
import { useNavigation } from '@react-navigation/native';
import { Nav } from 'types/nav-lib';
import { Fonts } from 'ui/typography';

const Country = (): JSX.Element => {
  const { updateCountryCode, updateFlag } = useCountryState();
  const { navigate } = useNavigation<Nav>();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const sortedData = useMemo(() => {
    return [...CountryData].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const filteredData = useMemo(() => {
    if (!searchTerm) return sortedData;
    return sortedData.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [sortedData, searchTerm]);

  const updateHandler = (code: string, flag: string): void => {
    updateCountryCode(code);
    updateFlag(flag);
    navigate('Number');
  };

  const groupedData: { [initial: string]: CountryDataProps[] } = {};
  filteredData.forEach(country => {
    const initial = country.name[0].toUpperCase();
    if (!groupedData[initial]) {
      groupedData[initial] = [];
    }
    groupedData[initial].push(country);
  });

  return (
    <View style={styles.wrapper}>
      <Header headerText="Select your country" isText={true} />
      <View
        style={[
          styles.inputWrapper,
          { borderColor: isFocused ? '#1AA463' : '#aaa' },
        ]}>
        <Search width={ms(25)} height={ms(25)} />
        <TextInput
          placeholder="Search for a country"
          style={styles.input}
          placeholderTextColor={'#555555'}
          onChangeText={setSearchTerm}
          value={searchTerm}
          keyboardType="twitter"
          autoFocus={true}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />
      </View>
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {Object.entries(groupedData).map(([initial, countries]) => (
            <View key={initial}>
              <Text style={styles.initial}>{initial}</Text>
              {countries.map(country => (
                <Pressable
                  onPress={() =>
                    updateHandler(country.phone_code, country.flag)
                  }
                  key={country.name}
                  style={styles.countryBody}>
                  <View style={styles.flexy}>
                    <Text style={styles.flag}>{country.flag}</Text>
                    <Text style={styles.name}>{country.name}</Text>
                  </View>
                  <Text style={styles.phone_code}>{country.phone_code}</Text>
                </Pressable>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Country;

const styles = ScaledSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: ms(20),
  },
  body: {
    paddingHorizontal: ms(25),
    paddingVertical: ms(10),
  },
  flexy: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: ms(15),
  },
  countryBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: ms(15),
    borderBottomWidth: ms(1),
    borderBottomColor: '#eee',
  },
  flag: {
    fontSize: ms(30),
  },
  name: {
    fontSize: ms(15),
    fontFamily: Fonts.Regular,
  },
  phone_code: {
    fontSize: ms(16),
    fontFamily: Fonts.Regular,
  },
  initial: {
    marginVertical: ms(15),
    fontSize: ms(16),
    fontFamily: Fonts.Regular,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 40,
    borderWidth: ms(2),
    alignSelf: 'center',
    borderRadius: ms(10),
    paddingHorizontal: ms(20),
    marginTop: ms(5),
  },
  input: {
    fontFamily: Fonts.Regular,
    fontSize: ms(15),
    marginLeft: ms(10),
    width: width - 130,
    paddingVertical: ms(20),
  },
});
