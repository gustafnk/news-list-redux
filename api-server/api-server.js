var koa = require('koa');
var jsonFixtures = require('./fixtures/json-fixtures');

var app = koa();

app
  .use(jsonFixtures(__dirname + '/fixtures'))
  .listen(9002);

console.log('listening on port 9002');
