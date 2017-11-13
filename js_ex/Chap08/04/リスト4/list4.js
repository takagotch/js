/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/zbmUE/
 * リスト4: Queueクラスの利用例
 */

(function (undefined) {
  "use strict";
  var global = Function('return this')();

  /**
  * @constructor
  */
  function Queue() {
    this.queueArray = [];
  }
  /**
  * 空かどうかを返す。
  */
  Queue.prototype.empty = function () {
    return this.queueArray.length === 0;
  };
  /**
  * キュー長を返す。
  */
  Queue.prototype.size = function () {
    return this.queueArray.length;
  };
  /**
  * キュー末尾にデータを追加する。
  */
  Queue.prototype.enqueue = function (data) {
    this.queueArray.push(data);
  };
  /**
  * キュー先頭からデータを一つ取り出す。
  * キューが空の場合は未定義値。
  */
  Queue.prototype.dequeue = function () {
    if (this.empty()) {
      return undefined;
    } else {
      return this.queueArray.shift();
    }
  };
  /**
  * キュー先頭を返す。(キューからは取り除かない)
  * キューが空の場合は未定義値。
  */
  Queue.prototype.peek = function () {
    if (this.empty()) {
      return undefined;
    } else {
      return this.queueArray[0];
    }
  };
  /**
  * キューとして使用している実際の配列のコピーを返す。
  */
  Queue.prototype.getArrayCopy = function () {
    return this.queueArray.slice();
  };

  global.Queue = Queue;
}());


var queue = new Queue();
queue.enqueue("foo");
queue.enqueue("bar");

assert("queue.size() == 2", queue.size(), 2);
assert("queue.peek() == foo", queue.peek(), "foo");
assert("queue.getArrayCopy() == [foo, bar]", queue.getArrayCopy().join(), "foo,bar");

assert("queue.pop() == foo", queue.dequeue(), "foo");
assert("queue.size() == 1", queue.size(), 1);
assert("queue.peek() == bar", queue.peek(), "bar");
assert("queue.getArrayCopy() == [bar]", queue.getArrayCopy().join(), "bar");

assert("queue.pop() == bar", queue.dequeue(), "bar");
assert("queue.size() == 0", queue.size(), 0);
assert("queue.peek() == undefined", queue.peek(), undefined);
assert("queue.getArrayCopy() == []", queue.getArrayCopy().join(), "");

