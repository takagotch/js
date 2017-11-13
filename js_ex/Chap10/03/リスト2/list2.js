/**
 * author: JSサポーターズ
 * リスト2: ライブラリを利用してジェスチャーを判定する
 * jsFiddle: http://jsfiddle.net/javascript150/gCeqD/
 */

var log = document.getElementById('log');
function showGestureStatus(e) {
  var touch = e.touches[0];
  var logText = e.type + ' => ';
  switch (e.type) {
    case 'transformstart':
    case 'transform':
    case 'transformend':
      logText += 'scale: ' + e.scale;
      logText += ', rotation: ' + e.rotation;
      break;
    case 'drag':
    case 'swipe':
      logText += 'direction: ' + e.direction;
      logText += ', distance: ' + e.distance;
      break;
    default:
      logText += 'x: ' + e.touches[0].x;
      logText += ', y: ' + e.touches[0].y;
      break;
  }
  log.innerHTML = logText + '<br>' + log.innerHTML;
}

var container = new Hammer(document.getElementById('container'), {prevent_default: true});

  container.ondragstart      = showGestureStatus;
  container.ondrag           = showGestureStatus;
  container.ondragend        = showGestureStatus;
  container.onswipe          = showGestureStatus;
  container.ontap            = showGestureStatus;
  container.ondoubletap      = showGestureStatus;
  container.onhold           = showGestureStatus;
  container.ontransformstart = showGestureStatus;
  container.ontransform      = showGestureStatus;
  container.ontransformend   = showGestureStatus;
  container.onrelease        = showGestureStatus;

