/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/GRtWu/
 * リスト4: evalした結果をグローバルスコープで使う
 */

function globalEval(data) {
  // 引数の文字列のはじめ、最後に空白文字列がある場合削除
  data = data.replace(/^\s*|\s*$/g, "");
  if (data) {
    // 引数をheadのscriptタグに追加
    var head =
    document.getElementsByTagName("head")[0] ||
    document.documentElement;
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.text = data;

    head.appendChild(script); // headにsciprtを追加して実行
    head.removeChild(script); // 実行後、削除
  }
}
window.onload = function() {
  (function() {
    globalEval("var test = 5;");
  })();

  assert("The code is evaluated globally.", test, 5);
};

