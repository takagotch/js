/**
 * author: JSサポーターズ
 * リスト2: with文で使用しているプロパティ名と同名の変数
 */

var x = "hoge";
function f(x, o) {
  with(o){
    log(x);
    assert('fの第二引数{x:"prop"}を参照する', x, 'prop');
  }
}
f("arg", {x:"prop"});
