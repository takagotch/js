/**
* author: JSサポーターズ
* jsFiddle: http://jsfiddle.net/javascript150/RddmP/
* リスト1: 更新ボタンクリック時に配列要素を出力する例
*/

// 時刻配列。初めに現在時刻を格納する。
var timestamps = [(new Date()).getTime()];

/**
* 更新ボタンのクリックイベントハンドラ
* 表示領域に対して表示の更新を行う。
*/
$("#update").bind("click", function () {
  $(".updatee").each(function () {
    var $ul = $("<ul>");
    $.each(timestamps, function () {
      $ul.append("<li>updated: " + this + "</li>");
    });
    $(this).html($ul);
  });
});

