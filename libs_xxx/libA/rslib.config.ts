import { defineConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: 'es2021',
      dts: true,
    },
  ],
  source: {
    entry: {
      index: './src/index.tsx',
    },
  },
  plugins: [pluginReact()],
});
