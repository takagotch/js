/**
 * author: JSサポーターズ
 */

// webpageモジュールを読み込み
var page = require('webpage').create(),
// jQueryのソース
jQuerySrc = "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js",
// テストしたいページ
targetUrl = "http://jquery.com/";

page.open(targetUrl, function (status) {
  if (status !== 'success') {
    // テストしたいページの読み込み失敗
    console.log('failed to load the targetUrl');
  } else {
    // includeJsは外部のJavaScript(第一引数)を取得し、
    // 読み込み完了したらコールバック(第二引数)を呼ぶ
    page.includeJs(jQuerySrc, function() {
      // evaluateは対象のページのコンテキストで実行する
      page.evaluate(function() {
        // 対象ページのコンテキストでコンソール出力する
        console.log("There is " + $("span").length + " a tags.");
      });
      // phantomプロセスの終了
      phantom.exit();
    });
  }
});

// 対象ページのコンテキストでのコンソール出力をハンドリング
page.onConsoleMessage = function(msg, line, src) {
  console.log("console > " + line + ": " + msg + ": " + src);
};

