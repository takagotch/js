/**
 * author: JSサポーターズ
 * リスト5: カリー化
 */

function div(x, y) {
  return x / y;
}
assert("div(4, 2)  === 2", div(4, 2), 2);
function inv (x){
  return function(y){
    return x / y;
  };
}
var cdiv = inv(10);
assert("cdiv(2)    === 5", cdiv(2), 5);
assert("cdiv(5)    === 2", cdiv(5), 2);
assert("inv(15)(3) === 5", inv(15)(3), 5);

