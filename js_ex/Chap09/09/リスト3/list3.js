/**
 * author: JSサポーターズ
 * リスト3: チェック状態変更時にイベント発火
 */

function addEv(obj, type, func) {
  if (obj.addEventListener) {
    obj.addEventListener(type, func, false);
  } else {
    if (obj.attachEvent) {
      obj.attachEvent('on' + type, func);
    }
  }
}

window.onload = function() {
  var chk3 = document.getElementById('chk3');

  addEv(chk3, 'change', function(){
    alert(chk3.checked);
  });
};

