/**
 * author: JSサポーターズ
 * Heroku: http://form-send-sample.herokuapp.com/
 * ※サーバー側の実装が必要なため、他のTipsで利用している
 * jsFiddleではなくクラウドPaaSのHerokuを利用しています。
 * リスト2: 送信ボタンの差し替え
 */

$("form").on("submit", function() {
  var $submitBtn = $(this).find(":submit");
  // Enterキーによる二重送信の防止
  if ($submitBtn && $submitBtn.attr("disabled")) {
    return false;
  }

  // 送信ボタンの非表示
  $submitBtn.hide();

  // 送信中画像の表示
  var $image = $(this).find("img");
  $image.show();
});
