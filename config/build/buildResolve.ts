import { ResolveOptions } from "webpack"
import { BuildOptions } from "./types/config"

export const buildResolve = (buildOptions: BuildOptions): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [buildOptions.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            '@': buildOptions.paths.src,
        },
    }
}