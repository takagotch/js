/**
 * author: JSサポーターズ
 * リスト3: キューのシンプルな実装例
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
