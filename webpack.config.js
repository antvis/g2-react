const webpack = require('atool-build/lib/webpack');

module.exports = function(config) {
  return Object.assign({}, config, {
    externals: {
      g2: 'G2',
      react: 'React',
    },
    output: Object.assign({}, config.output, {
      library: 'createG2',
      libraryTarget: 'umd',
    }),
    plugins: config.plugins.filter(i => !(i instanceof webpack.optimize.CommonsChunkPlugin)),
  });
};
