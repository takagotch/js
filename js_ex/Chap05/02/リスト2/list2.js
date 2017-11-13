/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/jtxUx/
 * リスト2: XMLHttpRequestを用いてPOST通信する例
 */

// XMLHttpRequestインスタンスの生成
var xhr = getXMLHttpRequest();
// onreadystatechangeプロパティにイベントハンドラを設定
xhr.onreadystatechange = function() {
  // ボディ受信済まで待つ
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      // 200 OKなら成功
      assert('送信した文字列が返るテスト', 'エコーテスト', xhr.responseText);
    } else {
      // それ以外は何かしらのエラー
      assert('Error: ', 200, xhr.status);
    }
  }
};
// jsfiddleのエコーテストAPI
xhr.open("POST", "/echo/html/");
// リクエストヘッダに文字コードを設定
xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
// POSTの本文
xhr.send("html=エコーテスト");

