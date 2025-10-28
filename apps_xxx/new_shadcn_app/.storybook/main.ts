import type { StorybookConfig } from 'storybook-react-rsbuild';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    // Addons werden hinzugefügt, sobald sie für Storybook 9.1 verfügbar sind
  ],
  framework: {
    name: 'storybook-react-rsbuild',
    options: {},
  },
  rsbuildFinal: (config) => {
    // PostCSS für Tailwind CSS konfigurieren
    config.tools = config.tools || {};
    config.tools.postcss = (opts) => {
      opts.postcssOptions ??= {};
      opts.postcssOptions.plugins ??= [];
      opts.postcssOptions.plugins.push(
        require("@tailwindcss/postcss"),
        require("autoprefixer"),
      );
    };

    // HMR Port und Client fixieren
    config.dev = config.dev || {};
    config.dev.hmr = true;
    config.dev.client = {
      port: '6006',
      host: 'localhost',
      protocol: 'ws',
    };

    return config;
  },
};

export default config;
