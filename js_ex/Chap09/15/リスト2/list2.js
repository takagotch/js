/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/XUudN/
 * リスト2: jQuery.selectionプラグインを使って選択範囲を取得する
 */

$(function() {
  $("#range_btn").on('click', function() {
    $('#textarea')
    // <strong> を選択テキストの前に挿入
    .selection('insert', {text: '<strong>', mode: 'before'})
    // </strong> を選択テキストの後に挿入
    .selection('insert', {text: '</strong>', mode: 'after'});
  });
});

