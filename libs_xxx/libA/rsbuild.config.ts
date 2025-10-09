import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  lib: true,
  output: {
    target: 'web',
    distPath: {
      root: 'dist',
    },
  },
  source: {
    entry: {
      index: './src/index.tsx',
    },
  },
  tools: {
    rspack: {
      output: {
        filename: '[name].js',
        library: {
          type: 'module',
        },
      },
      experiments: {
        outputModule: true,
      },
      externals: {
        react: 'react',
        'react-dom': 'react-dom',
      },
    },
  },
});
