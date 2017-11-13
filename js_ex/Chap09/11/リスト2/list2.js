/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/R4rTq/
 * リスト2: 置換
 */

var view = {
  name: "Mustache",
  calc: function() {
    return 2 + 4;
  }
};
var output = Mustache.render("{{name}} : {{calc}}", view);
