/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/kpXtQ/
 * リスト2: offsetTop／offsetLeftを利用したドキュメント座標の取得
 */

function getDocumentOffset(elem) {
  var top = 0, left = 0, originalElement = elem;
  for (; elem; elem = elem.offsetParent) {
    // すべてのoffsetTop／offsetLeftを加算する
    top += elem.offsetTop;
    left += elem.offsetLeft;

    // 自身以外の枠線幅を加算する
    var computedStyle =
    elem.curretStyle ? elem.curretStyle : window.getComputedStyle(elem, null);
    if (elem !== originalElement) {
      top += parseFloat(computedStyle.borderTopWidth);
      left += parseFloat(computedStyle.borderLeftWidth);
    }
  }
  return { top: top, left: left };
}

function calc() {
  var inner = document.getElementById("inner");
  var outer = document.getElementById("outer");
  var innerDocumentOffset = getDocumentOffset(inner);

  $("#result").empty();
  assert("inner.offsetTop=11px(margin + border)", inner.offsetTop, 11);
  assert("inner.offsetLeft=11px(margin + border)", inner.offsetLeft, 11);
  assert("outer.offsetTop=8px(margin + border)", outer.offsetTop, 8);
  assert("outer.offsetLeft=8px(margin + border)", outer.offsetLeft, 8);
  assert("innerDocumentOffset.top=26px", innerDocumentOffset.top, 26);
  assert("innerDocumentOffset.left=26px", innerDocumentOffset.left, 26);
  assert("$(inner).offset().top=26px", $(inner).offset().top, 26);
  assert("$(inner).offset().left=26px", $(inner).offset().left, 26);
}
$("#calc").on("click", calc);

