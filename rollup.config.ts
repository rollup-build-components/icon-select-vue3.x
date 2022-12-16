import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import babel from '@rollup/plugin-babel'
import alias from '@rollup/plugin-alias'
import vue from 'rollup-plugin-vue'

/**
 * Rollup Configuration
 */
export default defineConfig([
  {
    input: 'src/index.vue',
    output: [
      {
        dir: 'dist',
        format: 'es',
        entryFileNames: chunk => `[name].mjs`
      },
      {
        dir: 'dist',
        format: 'cjs',
        exports: 'named',
        entryFileNames: chunk => `[name].cjs`
      }
    ],
    plugins: [
      alias({
        entries: [{
          find: '@',
          replacement: new URL('./src', import.meta.url).pathname
        }]
      }),
      nodeResolve(),
      commonjs(),
      typescript({
        check: false
      }),
      vue(),
      postcss(),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.js', '.vue']
      })
    ],
    external: [
      /^vue(\/.+|$)/,
      /^ant-design-vue(\/.+|$)/,
      /^@ant-design\/icons-vue/
    ]
  }
])
