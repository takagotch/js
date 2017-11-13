/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/xCVSB/
 * リスト1: 簡単な独自ツールチップの作成
 */

/*
 * 簡単な独自ツールチップの例
 */
$(function () {
  $.fn.tooltip = function () {
    $(this).each(function () {
      $(this)
      // マウスカーソルが要素に乗ったらツールチップの表示。
      .bind('mouseenter.tooltip', function (ev) {
        // tooltipとして表示する内容を取得。
        var content = $(this).attr("data-tooltip");
        // マウスカーソルが要素に入った瞬間の座標。
        var position = { top: ev.clientY, left: ev.clientX };
        // Tooltipを表示
        $('<p id="tooltip">')
        .append(content)
        .css(position)
        .appendTo('body')
        .fadeIn('slow');
      })
      // マウスカーソルが要素から出たらツールチップの非表示。
      .bind('mouseleave.tooltip', function (ev) {
        // Tooltipを非表示
        $("#tooltip").fadeOut("slow").remove();
      });
    });
    return $(this);
  };

  // class="tooltip"な要素全てを対象とする。
  $(".tooltip").tooltip();
});

