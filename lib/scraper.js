const Crawler = require('crawler')

module.exports = function (url, callback) {
  new Crawler({
    callback: function (error, res, done) {
      if (error) {
        callback(error, null)
      } else {
        callback(null, res.$)
      }

      done()
    }
  }).queue(url)
}
