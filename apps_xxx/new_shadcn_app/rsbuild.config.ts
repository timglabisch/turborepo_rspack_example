import { defineConfig } from "@rsbuild/core";
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { pluginReact } from "@rsbuild/plugin-react";
const isDev = process.env.NODE_ENV !== "production";

export default defineConfig({
    plugins: [
        pluginReact(),
        pluginModuleFederation({
            name: 'new_shadcn_app',
            exposes: {
                './NewShadcnExampleComponent': './src/NewShadcnExampleComponent.tsx',
            },
        }),
    ],

    tools: {
        postcss: (opts) => {
            opts.postcssOptions ??= {};
            opts.postcssOptions.plugins ??= [];
            // Tailwind + Autoprefixer aktivieren
            opts.postcssOptions.plugins.push(
                require("@tailwindcss/postcss"),
                require("autoprefixer"),
            );
        },
    },
});