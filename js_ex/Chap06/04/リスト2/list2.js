/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/DybCs/
 * リスト2: jQueryを使ったマウス座標の利用
 */

$(function(){
  var out = $("#out");
  $(document).on("click", function(e){
    out.html("pageX:" + e.pageX + ",pageY" + e.pageY);
  });
});

