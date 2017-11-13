/**
 * author: JSサポーターズ
 * jsPerf: http://jsperf.com/documentfragmenttest
 * リスト2: 通常の方法によるクローンとDocumentFragmentによるクローンの例
 */

// 追加する要素の事前準備
function createElementWithAttribute(nodeName, text, klass) {
  var node = document.createElement(nodeName);
  if (text) { node.appendChild( document.createTextNode(text) ); }
  if (klass) { node.className = klass; }
  return node;
}
var elems = [
  createElementWithAttribute("b", "< clone > "),
  createElementWithAttribute("span", "A", "aaa"),
  createElementWithAttribute("span", "B", "bbb"),
  createElementWithAttribute("span", "C", "ccc"),
  createElementWithAttribute("span", "D", "ddd"),
  createElementWithAttribute("hr")
];

// Test1. 通常の方法によるクローン
var div = document.getElementsByClassName("testElems");
for ( var i = 0; i < div.length; i++ ) {
  for ( var e = 0; e < elems.length; e++ ) {
    div[i].appendChild( elems[e].cloneNode(true) );
  }
}

// Test2. DocumentFragmentを利用したクローン
var div = document.getElementsByClassName("testElems");
var fragment = document.createDocumentFragment();
for ( var e = 0; e < elems.length; e++ ) {
  fragment.appendChild( elems[e] );
}
for ( var i = 0; i < div.length; i++ ) {
  div[i].appendChild( fragment.cloneNode(true) );
}

