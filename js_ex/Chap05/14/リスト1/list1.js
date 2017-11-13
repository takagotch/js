/**
 * author: JSサポーターズ
 * Heroku: http://server-sent-events.herokuapp.com/
 * ※サーバー側の実装が必要なため、他のTipsで利用している
 * jsFiddleではなくクラウドPaaSのHerokuを利用しています。
 * Chrome / Safari / Firefox などいくつかのブラウザで試してみてください。
 * リスト1: ServerSentEventsのデモ
 */

try {
  // EventSourceオブジェクトを生成
  var eventSource = new EventSource("/application/serversentevent");

  // 受信結果の表示先を準備
  var $result = $('#result');
  $result.append("受信開始。\n");

  // messageイベントの処理
  eventSource.onmessage = function (event) {
    $result.append("message: " + event.data + "\n");
  };

  // customイベントの処理
  eventSource.addEventListener("custom", function (event) {
    $result.append("custom: " + event.data + "\n");
  }, false);

  // closeイベントの処理
  eventSource.onclose = function () {
    // サーバーからclose命令が来たので終了。
    eventSource.close();
    $result.append("受信終了。\n");
  };

} catch (e) {
  var $result = $('#result');
  $result.append("EventSource非対応ブラウザ。\n");
}

