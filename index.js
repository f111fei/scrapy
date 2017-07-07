const Crawler = require('crawler');
const restify = require('restify');
const request = require('request');
const server = restify.createServer();
const crawler = function (callback) {
  return new Crawler({
    callback: function (error, res, done) {
      if (error) {
        callback(error, null);
      } else {
        callback(null, res.$);
      }

      done();
    }
  });
}
const scrape = function (url, callback) {
  crawler(callback).queue(url);
}

// Configuration
server.name = 'Scrappy'

// Routing
server.get('/', function (req, res) {
  const url = 'https://www.tripadvisor.com/Hotels-g297701-Ubud_Bali-Hotels.html';

  scrape(url, function (err, $) {
    if (err) {
      res.status = 500;

      res.send({
        message: 'Something bad happened.',
        error: err
      });

      return console.log(err);
    }

    res.send({
      message: 'Crawled successfully.',
      data: {
        url,
        title: $('title').text(),
        description: $('meta[property="og:description"]').attr('content'),
        image: $('meta[property="og:image"]').attr('content')
      }
    });
  });
});

// Run the server once everything is ready
server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
