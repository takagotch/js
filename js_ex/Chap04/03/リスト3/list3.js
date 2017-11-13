/**
 * author: JSサポーターズ
 * リスト3: メソッドの定義(prototypeに対して定義)
 */

function Author(name){
  this.name = name;
}
Author.prototype.speak = function(str){
  log(this.name + " says: " + str);
};

var author = new Author("kzys");
author.speak("Happy coding:-)");

