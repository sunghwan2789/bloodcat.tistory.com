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
  }
}
