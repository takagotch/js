/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/FGY4y/
 * リスト4: チェックボックスの制御
 */

window.onload = function() {
  var btn = document.getElementById('btn');
  var chks = document.getElementsByName('chk');

  appendEventListener(btn, 'click', function(){
    var checkedArray = [];

    // 全チェックボックスで状態を確認
    for(var i=0;i<chks.length;i++){
      if(chks[i].checked){
        // チェック済みの場合は配列に格納
        checkedArray.push(chks[i].value)
      }
    }

    log(checkedArray.join(","));
  });
};

