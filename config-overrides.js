const { defaultInjectConfig, rewireWorkboxInject } = require('react-app-rewire-workbox');
const path = require('path');
const rewireSass = require('react-app-rewire-scss');

module.exports = function override(config, env) {
  config = rewireSass(config, env);
  if (env === 'production') {
    const workboxConfig = {
      ...defaultInjectConfig,
      swSrc: path.join(__dirname, 'src', 'service-worker.js'),
    }
    config = rewireWorkboxInject(workboxConfig)(config, env);
  }

  return config;
}