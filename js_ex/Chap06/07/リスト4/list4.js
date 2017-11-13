/**
* author: JSサポーターズ
* jsFiddle: http://jsfiddle.net/javascript150/TxGdx/
* リスト4: ピュアJavaScriptによる実装(InternetExplorer9未満を除く。)
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
$(".updatee").each(function() {
  this.addEventListener("timestamps.require.update", function () {
    var $ul = $("<ul>");
    $.each(timestamps, function () {
      $ul.append("<li>updated: " + this + "</li>");
    });
    $(this).html($ul);
  }, false);
});

/**
* 表示が必要な事を通知する関数
*/
function notifyRequireUpdate() {
  var evt = document.createEvent('Event');
  evt.initEvent('timestamps.require.update', false, true);
  $(".updatee").each(function() {
    this.dispatchEvent(evt);
  });
}

// 初回更新
notifyRequireUpdate();

