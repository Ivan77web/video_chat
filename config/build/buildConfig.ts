import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';
import { buildDevServer } from './buildDevServer';

export const buildConfig = (buildOptions: BuildOptions): webpack.Configuration => {
    const { paths, mode, isDev } = buildOptions;

    return {
        entry: paths.entry,
        mode: mode,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.output,
            clean: true,
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders(buildOptions),
        },
        resolve: buildResolve(buildOptions),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(buildOptions) : undefined,
    };
}