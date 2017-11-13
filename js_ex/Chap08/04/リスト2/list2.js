/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/rWNGL/
 * リスト2: Stackクラスの利用例
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


var stack = new Stack();
stack.push("foo");
stack.push("bar");

assert("stack.size() == 2", stack.size(), 2);
assert("stack.peek() == bar", stack.peek(), "bar");
assert("stack.getArrayCopy() == [foo, bar]", stack.getArrayCopy().join(), "foo,bar");

assert("stack.pop() == bar", stack.pop(), "bar");
assert("stack.size() == 1", stack.size(), 1);
assert("stack.peek() == foo", stack.peek(), "foo");
assert("stack.getArrayCopy() == [foo]", stack.getArrayCopy().join(), "foo");

assert("stack.pop() == foo", stack.pop(), "foo");
assert("stack.size() == 0", stack.size(), 0);
assert("stack.peek() == undefined", stack.peek(), undefined);
assert("stack.getArrayCopy() == []", stack.getArrayCopy().join(), "");

