/**
 * author: JSサポーターズ
 * jsPerf: http://jsperf.com/performancenodelist
 * リスト3: NodeListを直接使う場合と配列に変換して使う例
 */

//・NodeList(length都度取得)
var nodeList = document.getElementsByTagName("div");
for (var j=0; j<1000; j++) {
  for (var i=0; i<nodeList.length; i++) {
    var nodeName = nodeList[i].nodeName; // 要素にアクセス
  }
}

//・NodeList(length事前取得)
var nodeList = document.getElementsByTagName("div");
var len = nodeList.length;
for (var j=0; j<1000; j++) {
  for (var i=0; i<len; i++) {
    var nodeName = nodeList[i].nodeName; // 要素にアクセス
  }
}

//・NodeListを配列に変換(length都度取得)
var nodeList = document.getElementsByTagName("div");
var nodeListArray = toArray(nodeList);
for (var j=0; j<1000; j++) {
  for (var i=0; i<nodeListArray.length; i++) {
    var nodeName = nodeListArray[i].nodeName; // 要素にアクセス
  }
}
function toArray(arrayLike) { /* NodeListを配列に変換 */ }

//・NodeListを配列に変換(length事前取得)
var nodeList = document.getElementsByTagName("div");
var nodeListArray = toArray(nodeList);
var len = nodeList.length;
for (var j=0; j<1000; j++) {
  for (var i=0; i<len; i++) {
    var nodeName = nodeListArray[i].nodeName; // 要素にアクセス
  }
}
function toArray(arrayLike) { /* NodeListを配列に変換 */ }
