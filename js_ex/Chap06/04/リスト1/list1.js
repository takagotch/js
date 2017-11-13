/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/ZhEYW/
 * リスト1: マウスイベントからの座標・各種プロパティの取得例
 */

window.onload = function() {
  var target = document.getElementById('mouse_move');
  document.onmousemove = function(e) {
    getMousePosition(e);
  };
};

function debug(str){
  document.getElementById('out').innerHTML = str;
}

function format(e, methodX, methodY){
  var str = methodX + ":" + e[methodX] + "," +
    methodY + ":" + e[methodY] + "<br />";
  return str;
}
function getMousePosition(event) {
  var str = "";
  var e = event || window.event;
  if(e.x){
    str += format(e,"x","y");
  }
  if(e.pageX){
    str += format(e,"pageX","pageY");
  }
  if(e.layerX){
    str += format(e,"layerX","layerY");
  }
  if(e.clientX){
    str += format(e,"clientX","clientY");
  }
  if(e.screenX){
    str += format(e,"screenX","screenY");
  }
  if(e.offsetX){
    str += format(e,"offsetX","offsetY");
  }
  debug(str);
}

