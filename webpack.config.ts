import path from 'path';
import webpack from 'webpack';
import { buildConfig } from './config/build/buildConfig';
import { BuildMode, BuildPaths } from './config/build/types/config';

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const MODE: BuildMode = 'development';

const config: webpack.Configuration = buildConfig({
    paths,
    mode: MODE,
});

export default config;