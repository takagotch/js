/**
 * author: JSサポーターズ
 * リスト2: プロトタイプチェーンの例1(クラスの継承)
 */

function Animal(){
  this.name = "animal";
}

function Cat(){}
Cat.prototype = new Animal(); // CatはAnimalを継承
var cat = new Cat();

assert("Animalのnameを参照", cat.name, "animal");

