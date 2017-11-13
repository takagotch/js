/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/urpMF/
 * リスト1: 関数のデフォルト引数を実装する例
 */

function test(val){
  if(typeof val === 'undefined'){
    val = "default";
  }
  return val;
}

assert("デフォルト引数が使用される", test(), "default");
assert("引数が使用される", test(5), 5);

