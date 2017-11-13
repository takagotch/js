/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/hWFmQ/
 * リスト3: 関数内で定義したつもりの変数がグローバルスコープに漏れる例
 */

function TestObject() {
  this.date = "";
  this.updateDate = function() {
    this.date = new Date();
  };
  this.getDate = function() {
    return this.date;
  };
}
// 正しい使用法
var obj1 = new TestObject();
assert("まだdateは更新されていない。", true, obj1.getDate() === "");
obj1.updateDate();
assert("dateが更新された。", true, obj1.getDate() !== "");

// 誤った使用法
var obj2 = new TestObject();
assert("まだdateは更新されていない。", true, obj2.getDate() === "");
var updateFunc = obj2.updateDate;
updateFunc();
assert("dateが更新されているはずなのにされていない...", true, obj2.getDate() === "");
assert("グローバルスコープにdateという変数が！", true, date instanceof Date);

