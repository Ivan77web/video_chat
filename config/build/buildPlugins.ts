import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildPaths } from "./types/config";
import webpack from 'webpack';

export const buildPlugins = (paths: BuildPaths): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
    ]
}