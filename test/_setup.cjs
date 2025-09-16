require('@babel/register')({
  extensions: ['.js'],
  ignore: [/node_modules/],
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }]
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-parameters'
  ]
})
