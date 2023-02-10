import esbuild from 'npm:esbuild';
import wasm_loader from 'npm:esbuild-plugin-wasm';
import * as Format from 'npm:@j-cake/jcake-utils/args';
import parse from 'npm:@j-cake/jcake-utils/args';

const args = parse({
    sourceMap: { long: 'sourcemap' },
    minify: { long: 'minify' },
    outdir: { long: 'outdir', format: Format.Path(false) },
}, Format.Path(true))(Deno.args);

await esbuild.build({
    entryPoints: [args.default],
    bundle: true,
    sourcemap: args.sourceMap,
    minify: args.minify,
    outdir: args.outdir,
    format: 'esm',
    plugins: [wasm_loader.default({
        mode: 'deferred'
    })]
});
