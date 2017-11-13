/**
 * author: JSサポーターズ
 * リスト2: デスクトップ通知の生成例
 * jsFiddle: http://jsfiddle.net/javascript150/gFT5N/
 */

var notifButton = document.createElement('button');
notifButton.textContent = 'デスクトップ通知を表示する';
notifButton.onclick = function() {
  // デスクトップ通知が許可されていない場合
  if (webkitNotifications.checkPermission() !== 0) {
    // ユーザにデスクトップ通知の表示許可を要求する
    webkitNotifications.requestPermission();

  } else {
    // 基本パラメータの設定
    var notif = webkitNotifications.createNotification(
      'http://www.amazon.co.jp/favicon.ico',  // アイコンURL
      'Emacsテクニックバイブル',              // タイトルテキスト
      'これは良本です。'                       // 詳細テキスト
    );

    // 通知が表示されて3秒後に自動で通知を閉じる
    notif.onshow = function() {
      setTimeout(function() {
        notif.close();
      }, 3000);
    };

    // 通知がクリックされたらwindowを表示して通知を閉じる
    notif.onclick = function() {
      window.focus();
      notif.close();
    };

    // 通知を表示する
    notif.show();
  }
};
document.body.appendChild(notifButton);

