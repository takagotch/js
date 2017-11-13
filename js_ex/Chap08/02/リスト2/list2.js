/**
 * author: JSサポーターズ
 * リスト2: 再帰処理を繰り返し処理に変換
 */

// (1)
function fact(n){
  return n===0 ? 1:(n*fact(n-1));
}
console.log(fact(5));

// (2)
function fact_cps(n, cont){
  if(n === 0){
    cont(1);
  } else {
    fact_cps(n -1, function(result){
      cont(n * result);
    });
  }
}
fact_cps(5, function(result){
  console.log(result);
});

