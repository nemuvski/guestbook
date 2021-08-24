/**
 * cracoを利用してCRAの設定をオーバーライド
 */
module.exports = {
  babel: {
    presets: [['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }]],
    plugins: ['@emotion/babel-plugin'],
  },
};
