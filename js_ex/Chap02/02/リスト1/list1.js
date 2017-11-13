/**
 * author: JSサポーターズ
 */

// 初期化用配列
var globalArray = [];

/**
* 指定されたサイズで配列の初期化(0埋め)を行う
*/
function initializeArray(ary, size) {
  ary.length = 0;
  for (var i = 0; i < size; i++) {
    ary[i] = 0;
  }
  return ary;
}

// 正しく初期化できていることを表明する例
// 1. 副作用の無い例
function funcA() {
  initializeArray(globalArray, 100);
  assert(globalArray.length == 100);
  // 以下globalArrayが初期化されている事を前提としたコード
}

// 2. 副作用のある例
function funcB() {
  assert(initializeArray(globalArray, 100).length == 100);
  // 以下globalArrayが初期化されている事を前提としたコード
}

