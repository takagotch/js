/**
* author: JSサポーターズ
* jsFiddle: http://jsfiddle.net/javascript150/ppF7w/
* リスト2: 追加ボタン、削除ボタンの実装を追加
*/

// 時刻配列。初めに現在時刻を格納する。
var timestamps = [(new Date()).getTime()];

/**
* 追加ボタンのクリックイベントハンドラ
* 時刻配列に現在時刻を追加し、表示領域に対して表示の更新を行う。
*/
$("#add").bind("click", function () {
  timestamps.push((new Date()).getTime());
  update();
});

/**
* 削除ボタンのクリックイベントハンドラ
* 時刻配列の先頭要素を削除し、表示領域に対して表示の更新を行う。
*/
$("#delete").bind("click", function () {
  timestamps.shift();
  update();
});

/**
* 更新ボタンのクリックイベントハンドラ
* 表示領域に対して表示の更新を行う。
*/
$("#update").bind("click", function () {
  update();
});

/**
* 表示領域に対して表示の更新を行う関数。
*/
function update() {
  $(".updatee").each(function () {
    var $ul = $("<ul>");
    $.each(timestamps, function () {
      $ul.append("<li>updated: " + this + "</li>");
    });
    $(this).html($ul);
  });
}

// 初回更新
update();

