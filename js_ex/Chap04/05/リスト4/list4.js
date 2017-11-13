/**
 * author: JSサポーターズ
 * リスト4: 継承用関数の作成
 */

function inherit(o){
  function F() {}
  F.prototype = o;
  return new F();
}
var person = {eats: true};
var employee = inherit(person);

assert("person.eatsを参照", employee.eats, true);

