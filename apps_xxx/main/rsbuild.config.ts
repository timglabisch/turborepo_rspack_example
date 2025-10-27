import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';


export default defineConfig({
  plugins: [
      pluginReact(),
      pluginModuleFederation({
          name: 'federation_consumer',
          remotes: {
              new_shadcn_app: 'new_shadcn_app@http://localhost:3002/mf-manifest.json',
          },
          shared: {
              react: {
                  singleton: true,
                  requiredVersion: '^19.2.0',
              },
              'react-dom': {
                  singleton: true,
                  requiredVersion: '^19.2.0',
              },
          },
      }),
  ],

    server: {
        port: 3001,
    },

    dev: {
        assetPrefix: 'http://localhost:3001',
    },
});
