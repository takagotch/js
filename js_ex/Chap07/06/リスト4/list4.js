/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/Lsn2F/
 * リスト4: try~catchを使って現在のコールスタックを取得する
 */

function getCallstack() {
  try {
    var obj = {};
    obj.undef(); // 存在しない関数を呼ぶ
  } catch(e) {
    var stack = e.stack || e.stacktrace || e.message || e.toString();
    return stack;
  }
}

(function sample() {
  log("<pre>" + getCallstack() + "</pre>");
}());

