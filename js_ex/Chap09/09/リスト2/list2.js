/**
 * author: JSサポーターズ
 * リスト2: チェック状態の変更
 */

window.onload = function(){
  var chk = document.getElementById("chk");

  // チェック状態を設定
  // この場合、チェック状態ならばチェックを外し、そうでなければチェックがつく
  chk.checked = !chk.checked;
};

