module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./App'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.ts',
          '.ios.jsx',
          '.android.jsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          assets: './App/Assets',
          screens: './App/Containers',
          navigation: './App/navigation',
          components: './App/Components',
          stores: './App/Stores',
        },
      },
    ],
  ],
}
