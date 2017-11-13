/**
 * author: JSサポーターズ
 */

// webserverモジュールを読み込み
var server = require('webserver').create(),
service;

// 8080番ポートでサーバー起動
service = server.listen(8080, function(request, response) {
  response.statusCode = 200;
  response.write('<html><body>Phantom Server!</body></html>');
});

