/**
 * author: JSサポーターズ
 * リスト3: setTimeoutで部分適用を使う
 */

// あとで設定するところは引数を undefined にする
var delay = setTimeout.partial(undefined, 10);
delay(function(){
  log("10ms後にこの関数が実行される!");
});

