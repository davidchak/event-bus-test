const { dependencies } = require('../package.json');

module.exports = {
  name: 'remote_react',
  exposes: {
    './ComponentA': './src/ComponentA',
  },
  filename: 'remoteEntry.js',
  // shared: {
  //   ...dependencies,
  //   react: {
  //     singleton: true,
  //     requiredVersion: dependencies['react'],
  //   },
  //   'react-dom': {
  //     singleton: true,
  //     requiredVersion: dependencies['react-dom'],
  //   },
  // },
};