import {defineConfig} from '@rslib/core';
import {pluginReact} from '@rsbuild/plugin-react';

export default defineConfig({
    plugins: [pluginReact()],

    lib: [
        {
            format: 'esm',
            syntax: 'es2021',
            dts: true,
        },
    ],
    resolve: {
        alias: {"@": "./src"},
    },

    source: {
        entry: {
            index: './src/index.tsx',
            styles: "./src/styles/globals.css",
        },
    },
    tools: {
        // Aktiviert Tailwind + Autoprefixer global
        postcss: (opts) => {
            opts.postcssOptions ??= {};
            opts.postcssOptions.plugins ??= [];
            const names = new Set(
                opts.postcssOptions.plugins.map((p: any) => p?.postcssPlugin)
            );
            if (!names.has("tailwindcss")) {
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                opts.postcssOptions.plugins.push(require("tailwindcss"));
            }
            if (!names.has("autoprefixer")) {
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                opts.postcssOptions.plugins.push(require("autoprefixer"));
            }
        },

        // Optional: erlaubt CSS-Text via '?inline' (z.B. für Shadow DOM)
        rspack: {
            module: {
                rules: [
                    {
                        test: /\.css$/,
                        oneOf: [
                            {resourceQuery: /inline/, type: "asset/source"},
                            // Standardpfad leer lassen → Rsbuild extrahiert CSS automatisch als Datei
                        ],
                    },
                ],
            },
        },
    },
});