/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/8BuFH/
 * リスト8: 関数内で定義したつもりの変数がグローバルスコープに漏れるのを防止する
 */

"use strict";
function TestObject() {
  this.date = "";
  this.updateDate = function() {
    assert("thisはundefiendなので代入に失敗する", undefined, this);
    this.date = new Date();
  };
  this.getDate = function() { return this.date; };
}
var obj2 = new TestObject();
assert("まだdateは更新されていない。", obj2.getDate(), "");
var updateFunc = obj2.updateDate;
try {
  updateFunc();
} catch (e) {
  log(e);
}

