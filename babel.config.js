module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          pages: './src/pages',
          data: './src/data',
          modules: './src/modules',
          assets: './assets',
          config: './src/config',
          navigations: './src/navigations',
          types: './src/types',
          ui: './src/ui',
          utils: './src/utils',
          components: './src/components',
          hooks: './src/hooks',
          svgs: './src/svgs',
        },
      },
    ],
  ],
};
