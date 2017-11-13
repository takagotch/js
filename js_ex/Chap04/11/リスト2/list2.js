/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/V6jDS/
 * リスト2: 引数をオブジェクト渡しに変更する
 */

function test2(obj){
  if(typeof obj === 'undefined'){
    obj = {num: 0, str: "hoge"};
  }
  var output = obj.num + ":" + obj.str;
  return output;
}
assert("デフォルト引数が使用される", test2(), "0:hoge");
assert("引数が使用される", test2({num: 11, str: "fuga"}), "11:fuga");

