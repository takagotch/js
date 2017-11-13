/**
 * author: JSサポーターズ
 * リスト2: IE 8以前でHTMLCollection/NodeListを配列に変換する
 */

var nodeList = document.getElementsByTagName("div");
var i = 0, l = nodeList.length;
var nodeListAsArray = new Array(l);
for ( ; i<l; i++ ) {
  nodeListAsArray[i] = nodeList[i];
}
