export type Nav = {
  navigate: (value: string, options?: any) => void;
  replace: (value: string, options?: any) => void;
  goBack: () => void;
  reset: (val: Record<string, any>) => void;
};
