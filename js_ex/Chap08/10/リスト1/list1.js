/**
 * author: JSサポーターズ
 * jsPerf: http://jsperf.com/aryjoin-opplus
 * リスト1: +での結合とjoin()メソッドでの結合との速度比較
 */

// Test1. Array.joinによる文字列連結
var tmp = new Array();
for( var i = 0; i < 100000; i++) {
  tmp.push(i);
}
var txt = tmp.join("");

// Test2. +演算子による文字列連結
var txt = "";
for( var i = 0; i < 100000; i++) {
  txt += i;
}

