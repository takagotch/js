/**
* author: JSサポーターズ
* リスト1: setIntervalを用いた簡単なアニメーション
*/

var target = document.getElementById("target"), left = 0;
setInterval(function(){
  target.style.left = (left+=10) + "px";
}, 500);

