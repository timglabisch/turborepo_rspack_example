import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
    plugins: [pluginReact()],

    source: {
        entry: {
            index: "./src/index.tsx", // Einstiegspunkt deiner App
        },
    },

    output: {
        target: "web",
        distPath: { root: "dist", css: "styles" },
        filename: { css: "shadcn-system.css" },
        library: {
            name: "ShadowApp", // z.B. window.ShadowApp
            type: "umd",
        },
        externals: {
            react: "React",
            "react-dom": "ReactDOM",
        },
    },

    tools: {
        postcss: (opts) => {
            opts.postcssOptions ??= {};
            opts.postcssOptions.plugins ??= [];
            // Tailwind + Autoprefixer aktivieren
            opts.postcssOptions.plugins.push(
                require("tailwindcss"),
                require("autoprefixer"),
            );
        },
    },
});