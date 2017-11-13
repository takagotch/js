/**
* author: JSサポーターズ
* jsFiddle: http://jsfiddle.net/javascript150/gUYkK/
* リスト3: カスタムイベントを利用した通知
*/

// 時刻配列。初めに現在時刻を格納する。
var timestamps = [(new Date()).getTime()];

/**
* 追加ボタンのクリックイベントハンドラ
* 時刻配列に現在時刻を追加し、表示が必要な事を通知する。
*/
$("#add").bind("click", function () {
  timestamps.push((new Date()).getTime());
  notifyRequireUpdate();
});

/**
* 削除ボタンのクリックイベントハンドラ
* 時刻配列の先頭要素を削除し、表示が必要な事を通知する。
*/
$("#delete").bind("click", function () {
  timestamps.shift();
  notifyRequireUpdate();
});

/**
* 更新ボタンのクリックイベントハンドラ
* 表示が必要な事を通知する。
*/
$("#update").bind("click", function () {
  notifyRequireUpdate();
});

/**
* 表示領域が更新処理を要求された時のイベントハンドラ
*/
$(".updatee").bind("timestamps.require.update", function () {
  var $ul = $("<ul>");
  $.each(timestamps, function () {
    $ul.append("<li>updated: " + this + "</li>");
  });
  $(this).html($ul);
});

/**
* 表示が必要な事を通知する関数
*/
function notifyRequireUpdate() {
  $(".updatee").trigger("timestamps.require.update");
}

// 初回更新
notifyRequireUpdate();

