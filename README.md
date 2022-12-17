# 用 Rollup 打包 Vue3.x UI 组件
> IconSelect 组件是基于 @ant-design/icons-vue Icon 和 Vue3.x Ant-Design-Vue 的 Select 组件组合封装而成  
> 作为 Rollup 打包 Vue3.x UI 组件的范例，后续仅维护 Rollup Build Configure And Package Upgrade   
> 其中引用的 Select 组件为了样式, 关闭 virtual(false), 存在性能问题, 不可生产环境中使用


<br/>
<br/>


## Rollup 打包所涉及的处理

1. Rollup 打包 Vue3.x 组件 所需依赖
2. Rollup 打包 Vue3.x 组件 插件选项
3. Rollup 打包 Script 脚本 运行配置
4. 如何下载使用 IconSelect 组件?


<br/>
<br/>


## 1. Rollup 打包 Vue3.x 所需依赖 (详见 [package.json](https://github.com/rollup-build-components/vue-icon-select-3.x/blob/main/package.json))

- `@rollup/plugin-alias`

    - 用途: rollup 路径别名配置

<br/>

- `@rollup/plugin-node-resolve`

    - 用途: 用于解析 node_modules 中第三方模块

<br/>

- `@rollup/plugin-commonjs`

    - 用途: 用于将CommonJS模块转换为ES6，以便 Rollup 解析处理

<br/>

- `@rollup/plugin-babel`

    - 用途: rollup babel plugin

    - 配置: babel.config.js
      ```javascript
        module.exports = {
          plugins: [
            '@vue/babel-plugin-jsx'
          ]
        }
      ```

    - 依赖:
        - `@babel/core` babel 核心
        - `@vue/babel-plugin-jsx` babel 处理 Vue3.x jsx 语法
        - `@vue/babel-helper-vue-jsx-merge-props` babel 处理 Vue jsx props

<br/>

- `rollup-plugin-vue`

    - 用途: 解析 Vue SFC (Single File Component)
    - 版本: Vue3.x时, version = 6.0.0
    - 依赖:
      - `vue` version = 3.2.0
      - `less` version = 4.1.3
      - `vue-template-compiler` version = 3.2.0

<br/>

- rollup-plugin-postcss

    - 用途: 用于处理 css 样式, 包括 Vue 单文件中 `<style>` 样式

<br/>

- rollup-plugin-typescript2

    - 用途: 用于处理 .vue 及 .ts文件中 `ts` 语法的解析
    - 问题: 在 rollup 处理中为什么不使用 @rollup/plugin-typescript 呢?, 因为在解析 .vue 文件中 `ts` 语法存在问题, **[查看 Issue](https://github.com/vuejs/rollup-plugin-vue/issues/400)**

<br/>

- @rollup/plugin-typescript

    - 用途: 用于解析 rollup.config.ts 配置文件
    - 使用: rollup --config rollup.config.ts --configPlugin typescript // 此处 typescript 即 @rollup/plugin-typescript

<br/>
<br/>


## 2. Rollup 打包 Vue3.x 组件 插件选项

  ```javascript

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
             check: false  // 需使用 rollup-plugin-typescript2
          }),              // 而不是 @rollup/plugin-typescript
          vue(),
          postcss(),
          babel({                       // 指定 babel 处理文件类型
            babelHelpers: 'bundled',    // 如果 vue 存在 jsx 语法，
            extensions: ['.js', '.vue'] // 则会从 babel.config.js, 调用 @vue/babel-plugin-jsx 处理
          })
        ],

        // 排除不需要混入代码中的第三方依赖
        external: [
          /^vue(\/.+|$)/,
          /^ant-design-vue(\/.+|$)/,
          /^@ant-design\/icons-vue/
        ]
      }
    ])
  ```


<br/>
<br/>


## 3. Rollup 打包 Script 脚本 运行配置

  ```json
    {
      "scripts": {
        "build": "shx rm -rf dist && rollup --config rollup.config.ts --configPlugin typescript"
      }
    }
  ```


<br/>
<br/>


## 4. 如何下载使用 IconSelect 组件?

  - 安装
  ```shell

    yarn add @rollup-build-components/vue-icon-select-3.x

    pnpm add @rollup-build-components/vue-icon-select-3.x

  ```

  - 使用
  ```html
    <template>
      <section class="section-container">
        <icon-select v-model="value"/>
      </section>
    </template>
  ```

  ```javascript
    <script setup lang="ts">
      import IconSelect from '@rollup-build-components/vue-icon-select-3.x'
      const value = ref('fast-forward')
      watch(value, v => console.log(v))
    </script>
  ```

  
<br/>
<br/>


# 许可证
> MIT
