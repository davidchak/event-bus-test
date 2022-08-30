const { dependencies } = require('../package.json');

module.exports = {
  name: 'remote_react',
  library: { type: 'var', name: 'remote_react' },
  exposes: {
    './ComponentA': './src/ComponentA',
  },
  filename: 'remoteEntry.js',
  shared: { 
    react: { 
      singleton: true
    }, 
    'react-dom': { 
      singleton: true 
    } 
  },
  // shared: {
    // react: {
    //   requiredVersion: dependencies.react,
    //   import: 'react', // the "react" package will be used a provided and fallback module
    //   shareKey: 'react', // under this name the shared module will be placed in the share scope
    //   shareScope: 'default', // share scope with this name will be used
    //   singleton: true, // only a single version of the shared module is allowed
    // },
    // 'react-dom': {
    //   requiredVersion: dependencies['react-dom'],
    //   singleton: true, // only a single version of the shared module is allowed
    // },
  // }  
};