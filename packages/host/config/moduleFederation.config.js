const { dependencies } = require('../package.json');

module.exports = {
  name: 'host',
  // remotes: {
  //   remote_react: 'remote_react@http://localhost:3001/remoteEntry.js',   
  // },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};