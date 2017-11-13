/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/PLKFN/
 * リスト3: スクロールを含む要素のドキュメント座標の取得
 */

function getDocumentOffset(elem) {
  var top = elem.offsetTop,
  left = elem.offsetLeft,
  originalElement = elem,
  offsetParent = elem.offsetParent;
  // documentの直前まですべて辿る
  for (; elem && elem != document.body; elem = elem.parentNode) {
    // すべてのスクロール量を減算する
    top -= elem.scrollTop;
    left -= elem.scrollLeft;

    if (elem === offsetParent) {
      // 全てのoffsetParentのoffsetTop / offsetLeftを加算する
      top += elem.offsetTop;
      left += elem.offsetLeft;

      // 自身以外の枠線幅を加算する
      var defaultView = document.defaultView;
      var computedStyle = elem.currentStyle || defaultView.getComputedStyle(elem, null);
      if (elem !== originalElement) {
        top += parseFloat(computedStyle.borderTopWidth);
        left += parseFloat(computedStyle.borderLeftWidth);
      }
      offsetParent = elem.offsetParent;
    }
  }

  return {
    top: top,
    left: left
  };
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
  // offsetのスクロール量によって変動
  log("innerDocumentOffset.top=" + innerDocumentOffset.top);
  log("innerDocumentOffset.left=" + innerDocumentOffset.left);
  log("$(inner).offset().top=" + $(inner).offset().top);
  log("$(inner).offset().left=" + $(inner).offset().left);
}
$("#calc").on("click", calc);

