const { dependencies } = require('../package.json');

module.exports = {
  name: 'host',
  remotes: {
    remote_react: `remote_react@http://localhost:3001/remoteEntry.js`,
  },
  shared: { 
    react: { 
      singleton: true 
    }, 
    'react-dom': { 
      singleton: true 
    } 
  },
};