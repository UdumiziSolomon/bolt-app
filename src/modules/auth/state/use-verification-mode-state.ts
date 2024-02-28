import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export enum VerificationCodeEnumList {
  SMS = 'sms',
  WHATSAPP = 'whatsapp',
  PHONE = 'phone',
}

type TVerificationModeStore = {
  verificationMode: VerificationCodeEnumList;
  updateVerificationMode: (data: VerificationCodeEnumList) => void;
};

export const useVerificationModeState = create<TVerificationModeStore>()(
  persist(
    set => ({
      verificationMode: VerificationCodeEnumList.SMS,
      updateVerificationMode: (data: VerificationCodeEnumList) => {
        set({ verificationMode: data });
      },
    }),
    {
      name: 'verification-mode-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
