const webpack = require('atool-build/lib/webpack');

module.exports = function(config) {
  return Object.assign({}, config, {
    externals: {
      g2: {
        root: 'G2',
        commonjs2: 'g2',
        commonjs: 'g2',
        amd: 'g2',
      },
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    output: Object.assign({}, config.output, {
      library: 'createG2',
      libraryTarget: 'umd',
    }),
    plugins: config.plugins.filter(i => !(i instanceof webpack.optimize.CommonsChunkPlugin)),
  });
};
