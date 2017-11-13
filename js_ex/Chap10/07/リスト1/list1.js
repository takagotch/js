/**
 * author: JSサポーターズ
 * リスト1: WebSocketサーバの実装例
 *
 * Node.jsをインストールし、まずwebsocket.ioをインストールします。
 * > npm install websocket.io
 *
 * その後以下のコマンドでWebSocketサーバを起動してください。
 * > node list1.js
 */

// 8888番ポートでクライアントの接続を待ち受ける
var ws = require('websocket.io'),
    server = ws.listen(8888);

// クライアントからの接続イベントを捕捉
server.on('connection', function(socket) {
  // クライアントからのメッセージ受信イベントを捕捉
  socket.on('message', function(data) {
    // 受信したメッセージを全てのクライアントに送信する
    server.clients.forEach(function(client) {
      client.send(data);
    });
  });
});

