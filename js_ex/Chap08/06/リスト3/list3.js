/**
 * author: JSサポーターズ
 * jsPerf: http://jsperf.com/create-regexp-new-vs-literal
 * リスト3: 正規表現オブジェクト生成の速度計測
 */

// Test1. new RegExpで正規表現オブジェクトを生成する。
var re1 = new RegExp("[0-9]+","g");

// Test2. リテラル「//」で正規表現オブジェクトを生成する。
var re2 = /[0-9]+/g;

