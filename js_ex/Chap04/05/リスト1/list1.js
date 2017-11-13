/**
 * author: JSサポーターズ
 * リスト1: 配列に対してメソッドを追加する
 */

Array.prototype.clear = function(){
  this.length = 0;
  return this;
};
arr1 = [1,2,3];
arr2 = [1,2,3,4,5];
assert("arr1で配列をクリア", arr1.clear().length, 0);
assert("arr2でも配列をクリア", arr2.clear().length, 0);

