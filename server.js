const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {

    // lodash
    const num = _.random(0, 20);
    console.log(num);
    
  const greet = _.once(() => {
    console.log('hello');
  });
  greet();
  greet();

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  // res.write('<p>hello, ninjas</p>');
  // res.write('<p>hello again, ninjas</p>');
  // res.end();

  // send html file
  // fs.readFile('./views/index.html', (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end();
  //   }
  //   //res.write(data);
  //   res.end(data);
  // });

  // routing
  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/publish':
      path += 'publish.html';
      res.statusCode = 200;
      break;
    case '/publish-us':
      res.statusCode = 301;
      res.setHeader('Location', '/publish');
      res.end();
      break;
    case '/share':
      path += 'share.html';
      res.statusCode = 200;
      break;
    case '/share-us':
      res.statusCode = 301;
      res.setHeader('Location', '/share');
      res.end();
      break;
    case '/collaborate':
        path += 'collaborate.html';
        res.statusCode = 200;
        break;
    case '/collaborate-us':
        res.statusCode = 301;
        res.setHeader('Location', '/collaborate');
        res.end();
        break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });


});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});