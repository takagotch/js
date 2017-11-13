/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/g2cUL/
 * リスト1: 範囲選択した文字列の変更
 */

function encapHTMLForW3C(encap_node) {
  // selectionオブジェクトの取得
  var selection = document.getSelection();
  // rangeオブジェクトの取得
  var range = selection.getRangeAt(0);
  // 選択範囲を与えられたノードで囲む
  range.surroundContents(encap_node);
}

function encapHTMLforIE(encap_node)
{
  // 選択範囲をフォーカス
  window.focus();
  // rangeオブジェクトの取得
  var range = document.selection.createRange();
  // 選択範囲を与えられたノードで囲む
  var container = document.createElement("div");
  container.appendChild(encap_node);
  encap_node.innerHTML = range.htmlText;

  try {
    range.pasteHTML(container.innerHTML);
  } catch (e) {
    log(e);
  }
}

function encapHTML() {
  var node = document.createElement("b");

  if (document.all) {
    encapHTMLforIE(node);
  } else {
    encapHTMLForW3C(node);
  }
}

$(function() {
  $("#range_btn").on('click', function() {
    encapHTML();
  });
});

