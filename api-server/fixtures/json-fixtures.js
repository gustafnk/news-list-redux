var resolve = require('path').resolve;
var assert = require('assert');
var send = require('koa-send');
var fs = require('fs');
var path = require('path');

module.exports = serve;

function serve(root, opts) {
  opts = opts || {};

  assert(root, 'root directory is required to serve files');

  const rootPath = resolve(root);

  return function *serve(next){
    if (this.method == 'HEAD' || this.method == 'GET') {
      opts.root = rootPath;

      // Need to url encode since koa-send always url decodes the path
      var queryStringPart = this.querystring ? encodeURIComponent(encodeURIComponent('?' + this.querystring)) : '';
      var fixturePath = this.path + queryStringPart + '.json';

      if(!fixtureExists(fixturePath)) {
        this.status = 204;
      }

      if (yield send(this, fixturePath, opts)) {
        return;
      }
    }

    yield* next;
  };
}

function fixtureExists(fixturePath) {
  try {
    fs.statSync(path.join(__dirname, decodeURIComponent(fixturePath)));
    return true;
  } catch(err) {
    return !(err && err.code === 'ENOENT');
  }
}
