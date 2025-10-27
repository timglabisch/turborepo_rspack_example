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
                  eager: true,
              },
              'react-dom': {
                  singleton: true,
                  eager: true,
              },
          },
          dts: false, // DTS-Generierung deaktivieren
      }),
  ],

    server: {
        port: 3001,
    },
});
