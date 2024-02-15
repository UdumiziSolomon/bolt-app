import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TCountryStore = {
  flag: string;
  countryCode: string;
  updateFlag: (data: string) => void;
  updateCountryCode: (data: string) => void;
};

export const useCountryState = create<TCountryStore>()(
  persist(
    set => ({
      flag: '🇳🇬',
      countryCode: '+234',
      updateFlag: (data: string) => {
        set({ flag: data });
      },
      updateCountryCode: (data: string) => {
        set({ countryCode: data });
      },
    }),
    { name: 'country-storage', storage: createJSONStorage(() => AsyncStorage) },
  ),
);
