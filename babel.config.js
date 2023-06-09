module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-export-namespace-from'],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ios.tsx',
          '.android.tsx',
          '.ts',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          tests: ['./tests/'],
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@components': './src/components',
          '@utils': './src/utils',
          '@types': './src/types',
        },
      },
    ],
  ],
};
