/**
 * author: JSサポーターズ
 * リスト5: 継承の代わりにObject.createを使う
 */

// 定義されていない場合用
if (!Object.create) {
  Object.create = function (o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}

var a = {"foo":1};
var b = Object.create(a); // (1)
b.bar = "test";
assert("a.fooの値が使える。", b.foo, 1);

