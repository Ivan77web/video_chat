import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';

export const buildConfig = (buildOptions: BuildOptions): webpack.Configuration => {
    const { paths, mode } = buildOptions;

    return {
        entry: paths.entry,
        devtool: 'inline-source-map',
        mode: mode,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.output,
            clean: true,
        },

        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolve(),
    };
}