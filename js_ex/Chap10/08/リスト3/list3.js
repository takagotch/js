/**
 * author: JSサポーターズ
 * リスト3: Web Workersを利用したファイル読み込み
 * Workerに渡すスクリプトはFileスキーム(file://)では読み込みに失敗します。
 *
 * sample: http://javascript150.bitbucket.org/10-08/list3.html
 */


// ファイルの内容を格納する変数を宣言する
var fileData = [];

// メインスレッドからのメッセージを待ち受ける
self.onmessage = function(event) {
  try {
    var files = event.data,
    reader = new FileReaderSync();

    for (var i = 0; i < files.length; i++) {
      // FileReaderSyncでファイルの内容を同期的に読み込む
      fileData.push(reader.readAsText(files[i]));
    }
    // メインスレッドにメッセージを送る
    self.postMessage('読み込み完了');
  } catch (e) {
    // メインスレッドにメッセージを送る
    self.postMessage(e.toString());
  }
};

