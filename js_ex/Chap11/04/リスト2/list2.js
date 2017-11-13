/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/W6UAn/
 * リスト2: アニメーションするグラフの描画
 */

var start = (new Date()).getTime(),
    container = document.getElementById('container');

function animate(t) {
  var i, data = [],
      offset = 2 * Math.PI * (t - start) / 10000;

  for (i = 0; i < 4 * Math.PI; i += 0.2) {
    data.push([i, Math.sin(i - offset)]);
  }

  Flotr.draw(container, [ data ], {
    yaxis : {
      max : 2,
      min : -2
    }
  });

  // 定期的にanimate関数を実行する
  setTimeout(function () {
    animate((new Date()).getTime());
  }, 50);
}

animate(start);

