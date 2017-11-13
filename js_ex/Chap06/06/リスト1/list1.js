/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/5kTZW/
 * リスト1: jQueryを使ってHTML5のドラッグアンドドロップを利用する
 */

// jQueryは独自のイベントオブジェクトを作成するため、HTML5の
// dataTrasferプロパティが存在しないので、手動で追加する。
// cf: http://weblog.bocoup.com/using-datatransfer-with-jquery-events/
jQuery.event.props.push('dataTransfer');

// ドラッグ開始時のイベントハンドリング
$(".drag").on("dragstart", dragStart);
$(".area")
// ドロップ可能にするためにdragoverとdragenterのデフォルト動作を抑止する。
.on("dragover dragenter", false)
// ドロップ時のイベントハンドリング
.on("drop", drop);

function dragStart(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  var id = ev.dataTransfer.getData("text");
  $("#" + id).appendTo(ev.currentTarget);
  return false;
}

