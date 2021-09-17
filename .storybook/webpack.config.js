// const { resolve } = require("path");
// const { withUnimodules } = require("@expo/webpack-config/addons");

// module.exports = ({ config }) => {
//   return withUnimodules(config, { projectRoot: resolve(__dirname, "../") });
// };

module.exports = async ({ config }) => {
  config.resolve.alias = {
    'react-native$': 'react-native-web'
  };

  return config;
};