/**
 * author: JSサポーターズ
 * リスト2: メソッドの定義(コンストラクタ内で定義)
 */

function Author(name){
  this.name = name;
  // このメソッドはこのクラスで生成されたオブジェクトでのみ呼び出し可能
  this.speak = function(str){
    log(this.name + " says: " + str);
  };
}
var author = new Author("masahito");
author.speak("Now is better than never.");

