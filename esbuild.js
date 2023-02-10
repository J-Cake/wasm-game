"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var npm_esbuild_1 = require("npm:esbuild");
var npm_esbuild_plugin_wasm_1 = require("npm:esbuild-plugin-wasm");
var Format = require("npm:@j-cake/jcake-utils/args");
var args_1 = require("npm:@j-cake/jcake-utils/args");
var args = (0, args_1.default)({
    sourceMap: { long: 'sourcemap' },
    minify: { long: 'minify' },
    outdir: { long: 'outdir', format: Format.Path(false) },
}, Format.Path(true))(Deno.args);
await npm_esbuild_1.default.build({
    entryPoints: [args.default],
    bundle: true,
    sourcemap: args.sourceMap,
    minify: args.minify,
    outdir: args.outdir,
    format: 'esm',
    plugins: [npm_esbuild_plugin_wasm_1.default.default({
            mode: 'deferred'
        })]
});
