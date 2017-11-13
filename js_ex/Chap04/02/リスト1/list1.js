/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/GhVD7/
 * リスト1: this キーワードのおさらい
 */

var obj0 = {
  name: "obj0",
  getName: function (message) {
    return this.name;
  }
};

assert("obj0のメソッドとしてgetNameを呼び出す", "obj0", obj0.getName());

var obj1 = {
  name: "obj1"
};

// obj1 に obj2のgetNameメソッドをコピーする。
obj1.getName = obj0.getName;

assert("obj1のメソッドとしてgetNameを呼び出す", "obj1", obj1.getName());
assert("obj0のメソッドとしてgetNameを呼び出すが、obj1をthisとする。", "obj1", obj0.getName.apply(obj1));

