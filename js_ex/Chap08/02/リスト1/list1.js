/**
 * author: JSサポーターズ
 * リスト1: 足し算の結果を表示する処理を普通の書き方/継続渡しスタイルの書き方で比較
 */

// (1) 普通の書き方
function add_one(num){
  return num + 1;
}

log(add_one(4));

// (2)継続渡しスタイル
// 引数に関数を取るように変更する
function add_one_cps(n,cont){
  // 引数として渡された関数を実行する
  cont(n + 1);
}
add_one_cps(4,function(result){
  // 最終的に実行する関数
  log(result);
});

