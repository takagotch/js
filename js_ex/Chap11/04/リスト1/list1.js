/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/emYPB/
 * リスト1: Flotr2で縦線グラフの描画
 */

var d1 = [], d2 = [], i, container;

// データの作成
for (i = 0; i < 4; i++) {
  d1.push([i    , Math.ceil(Math.random()*10)]);
  d2.push([i+0.5, Math.ceil(Math.random()*10)]);
}

// 縦線グラフの描画
container = document.getElementById("container");
Flotr.draw(container, [d1, d2], {
  bars : {
    show : true,
    shadowSize : 0,
    barWidth : 0.5
  },
  yaxis : {
    min : 0,
    autoscaleMargin : 1
  }
});

