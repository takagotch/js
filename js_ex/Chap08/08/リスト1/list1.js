/**
 * author: JSサポーターズ
 * jsPerf: http://jsperf.com/scope-chain-performance-test
 * リスト1: オブジェクトのスコープチェーンのパフォーマンステスト
 */

// Test1. スコープチェーンをすべて辿る
(function () {
  var NameSpace = {};
  NameSpace.ScopedObject = {};
  NameSpace.ScopedObject.scopedMethod = function () {
    return "foo";
  };
  function test() {
    var i = 0, l = 100000;
    for (; i<l; i++) {
      NameSpace.ScopedObject.scopedMethod();
    }
  }
  test();
}());

// Test2. スコープチェーンのアクセス先をローカル変数に束縛する
(function () {
  var NameSpace = {};
  NameSpace.ScopedObject = {};
  NameSpace.ScopedObject.scopedMethod = function () {
    return "foo";
  };
  function test() {
    var method = NameSpace.ScopedObject.scopedMethod;
    var i = 0, l = 100000;
    for (; i<l; i++) {
      method();
    }
  }
  test();
}());

