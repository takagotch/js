/**
 * author: JSサポーターズ
 * リスト1: デバイスの縦向き・横向きの判定
 */

function checkOrientation() {
  switch (window.orientation) {
    case 90:
    case -90:
      alert('デバイスは横向きです');
      break;
    default:
      alert('デバイスは縦向きです');
      break;
  }
}
window.addEventListener('load', checkOrientation, false);
window.addEventListener('orientationchange', checkOrientation, false);

