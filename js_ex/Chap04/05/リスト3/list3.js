/**
 * author: JSサポーターズ
 * リスト3: プロトタイプチェーンの例2(prototypeの変更)
 */

var animal = { eats: true };

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;
var rabbit = new Rabbit('John');

assert("animal.eatsを参照", rabbit.eats, true);

