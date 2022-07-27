const withModuleFederation = require('@nrwl/react/module-federation');
const moduleFederationConfig = require('./module-federation.config');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = withModuleFederation({
  ...moduleFederationConfig,
  plugins: [
    new ModuleFederationPlugin({
      // options' typings in typescript
      runtime: 'string' | false,
    }),
  ],
});
