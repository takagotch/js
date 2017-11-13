/**
 * author: JSサポーターズ
 * Heroku: http://form-send-sample.herokuapp.com/
 * ※サーバー側の実装が必要なため、他のTipsで利用している
 * jsFiddleではなくクラウドPaaSのHerokuを利用しています。
 * リスト1: 送信ボタンの無効化
 */

$("form").on("submit", function() {
  // Enterキーによる二重送信の防止
  var $submitBtn = $(this).find(":submit");
  if ($submitBtn && $submitBtn.attr("disabled")) {
    return false;
  }

  // 送信ボタンの無効化
  $submitBtn.attr("disabled", true);
});

