/**
 * author: JSサポーターズ
 * リスト1: スタックのシンプルな実装例
 */

(function (undefined) {
  "use strict";
  var global = Function('return this')();

  /**
  * @constructor
  */
  function Stack() {
    this.stackArray = [];
  }
  /**
  * 空かどうかを返す。
  */
  Stack.prototype.empty = function () {
    return this.stackArray.length === 0;
  };
  /**
  * スタック長を返す。
  */
  Stack.prototype.size = function () {
    return this.stackArray.length;
  };
  /**
  * スタック末尾にデータを追加する。
  */
  Stack.prototype.push = function (data) {
    this.stackArray.push(data);
  };
  /**
  * スタック先頭からデータを一つ取り出す。
  * スタックが空の場合は未定義値。
  */
  Stack.prototype.pop = function () {
    if (this.empty()) {
      return undefined;
    } else {
      return this.stackArray.pop();
    }
  };
  /**
  * スタック先頭を返す。(スタックからは取り除かない)
  * スタックが空の場合は未定義値。
  */
  Stack.prototype.peek = function () {
    if (this.empty()) {
      return undefined;
    } else {
      return this.stackArray[this.stackArray.length-1];
    }
  };
  /**
  * スタックとして使用している実際の配列のコピーを返す。
  */
  Stack.prototype.getArrayCopy = function () {
    return this.stackArray.slice();
  };

  global.Stack = Stack;
}());

