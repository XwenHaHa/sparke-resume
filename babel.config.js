module.exports = {
  presets: [
    '@babel/preset-env', // 根据配置的目标浏览器或者运行环境，原则对应的语法包，从而将代码进行转换
    '@babel/preset-react', // react语法包，使我们可以使用React ES6 Class Component的写法，支持TSX、JSX等语法格式
    '@babel/preset-typescript', // typescript语法包，使我们可以使用TypeScript的语法格式
  ],
  plugins: [
    '@babel/plugin-transform-runtime', // 官方提供的插件，作用是减少冗余的代码
    [
      '@babel/plugin-transform-modules-commonjs', // 将 ECMAScript modules 转成 CommonJS.
      {
        allowTopLevelThis: true,
        loose: true,
        lazy: true,
      },
    ],
    [
      'babel-plugin-react-css-modules',
      {
        exclude: 'node_modules',
        webpackHotModuleReloading: true,
        generateScopedName: '[name]__[local]__[hash:base64:5]',
        handleMissingStyleName: 'warn',
        autoResolveMultipleImports: true,
        filetypes: {
          '.less': { syntax: 'postcss-less' },
        },
      },
    ],
  ],
};
