import Crawler from 'crawler';
import restify from 'restify';
const server = restify.createServer();
const scrape = function (url, callback) {
  new Crawler({
    callback: function (error, res, done) {
      if (error) {
        callback(error, null);
      } else {
        callback(null, res.$);
      }

      done();
    }
  }).queue(url);
}

// Configuration
server.name = 'Scrapy'

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
    } else {
      res.send({
        message: 'Crawled successfully.',
        data: {
          url,
          title: $('title').text(),
          description: $('meta[property="og:description"]').attr('content'),
          image: $('meta[property="og:image"]').attr('content')
        }
      });
    }
  });
});

// Run the server once everything is ready
server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
