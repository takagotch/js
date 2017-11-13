/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/6RdKu/
 * リスト5: WebSocketのエコーサーバデモ
 */

var wsUri = "ws://echo.websocket.org/";
var output, websocket;

function init() {
  output = document.getElementById("output");
  testWebSocket();
}

function testWebSocket() {
  websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) {
    onOpen(evt);
  };
  websocket.onclose = function(evt) {
    onClose(evt);
  };
  websocket.onmessage = function(evt) {
    onMessage(evt);
  };
  websocket.onerror = function(evt) {
    onError(evt);
  };
}

function onOpen(evt) {
  writeToScreen("接続");
  doSend("WebSocketでの送信");
}

function onClose(evt) {
  writeToScreen("終了");
}

function onMessage(evt) {
  writeToScreen('<span style="color: blue;">レスポンス: ' + evt.data + '</span>');
  websocket.close();
}

function onError(evt) {
  writeToScreen('<span style="color: red;">エラー:</span> ' + evt.data);
}

function doSend(message) {
  writeToScreen("送信: " + message);
  websocket.send(message);
}

function writeToScreen(message) {
  var pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
}
init();

