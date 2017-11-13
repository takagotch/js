/**
 * author: JSサポーターズ
 * jsPerf: http://jsperf.com/create-object-new-vs-literal
 * リスト1: オブジェクト生成の速度計測
 */

// Test1. new Objectでオブジェクトを生成する。
var obj1 = new Object();

// Test2. リテラル「{}」でオブジェクトを生成する。
var obj2 = {};
