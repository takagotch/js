/**
 * author: JSサポーターズ
 * jsPerf: http://jsperf.com/with-literal-performance
 * リスト4: with文使用時のパフォーマンス測定
 */

var obj = { foo: "bar" }, value;
// withを使わない
for ( var i = 0; i < 1000; i++ ){
  with(obj){
    value = foo;
  }
}
// withを使う
for ( var i = 0; i < 1000; i++ ){
  with(obj){
    value = foo;
  }
}
// withを使うが、参照しない
for ( var i = 0; i < 1000; i++ ){
  with(obj){
    value = "hoge";
  }
}

