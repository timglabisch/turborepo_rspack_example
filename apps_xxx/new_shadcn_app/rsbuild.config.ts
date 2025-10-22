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
                './newShadcnExampleComponent': './src/newShadcnExampleComponent.tsx',
            },
            //shared: ['react', 'react-dom'],
            dts: isDev ? false : { },
            manifest: isDev ? false : { },
        }),
    ],

    dev: {
        watchFiles: {
            paths: './src/**',
        },
    },

    server: {
        port: 3000,
    },

    source: {
        entry: {
            index: "./src/index.tsx", // Einstiegspunkt deiner App
        },
    },

    output: {
        target: "web",
        distPath: { root: "dist", css: "styles" },
        /*
        filename: { css: "shadcn-system.css" },
        library: {
            name: "ShadowApp", // z.B. window.ShadowApp
            type: "umd",
        },

         */
    /*
        externals: {
            react: "React",
            "react-dom": "ReactDOM",
        },

     */
    },

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