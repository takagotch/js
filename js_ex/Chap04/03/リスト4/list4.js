/**
 * author: JSサポーターズ
 * リスト4: プロトタイプを利用したオブジェクト継承
 */

function Human(){}
Human.prototype = {
  speak: function(str) {
    log(this.name + " says: " + str);
  }
};
function Author(name){this.name = name;}
Author.prototype = new Human(); // (1)
var author = new Author("rokujyouhitoma");
author.speak("I am ninja!");

