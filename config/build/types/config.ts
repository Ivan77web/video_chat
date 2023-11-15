export interface BuildOptions {
    paths: BuildPaths;
    mode: BuildMode;
}

export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string;
    output: string;
    html: string;
}