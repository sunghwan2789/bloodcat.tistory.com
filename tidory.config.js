/**
 * Tidory Configuration
 * https://tidory.com/docs/configuration/
 */
module.exports = {
  /**
   * Tistory session cookie value
   */
  ts_session: process.env['TSSESSION'] || '',

  /**
   * Tistory blog URL
   */
  url: process.env['URL'] || 'https://',

  /**
   * Preview
   */
  preview: {
    /**
     * Preview Mode
     *
     * index
     * entry
     * category
     * tag,
     * location
     * media,
     * guestbook
     */
    mode: process.env['PREVIEW'] || 'index'
  },

  /**
   * Webpack configuration extends
   */
  extends(webpackConfig) {
    // TODO: scss support
    // webpackConfig.module.rules = [
    //   {
    //     enforce: 'pre',
    //     test: /.js$/,
    //     exclude: /node_modules/,
    //     loader: 'eslint-loader'
    //   },
    //   ...webpackConfig.module.rules
    // ]
  }
}
