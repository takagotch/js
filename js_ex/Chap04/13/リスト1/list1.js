/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/RhJpL/
 * リスト1: 部分的にグローバルスコープへ露出する
 */

(function(){
  "use strict";
  var global = Function('return this')();
  var privateValue = "!!private!!";
  var Ninja = global.Ninja = {};
  Ninja.name = "ninja";
  Ninja.toss = function() {
    return "|/ﾟUﾟ|ノ-----卍";
  };
}());
assert("グローバルスコープに新しい名前空間を露出させた。", Ninja !== undefined, true);
assert("値へのアクセスも可能。", Ninja.name, "ninja");
assert("関数の呼び出しも可能。", Ninja.toss(), "|/ﾟUﾟ|ノ-----卍");

