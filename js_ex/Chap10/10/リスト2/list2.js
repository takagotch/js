/**
 * author: JSサポーターズ
 * リスト1: pjaxの実装
 */

// Ajaxでコンテンツを受け取り、表示を更新する
function getContents(href) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // コンテンツが取得できたらHTML内に反映する
      document.getElementById('content').innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', href, false);
  // Ajaxでのリクエストを判別するためにヘッダーを付与する
  xhr.setRequestHeader('X-AJAX-REQUEST', 'true');
  xhr.send();
}

// 戻る、進むでURLが切り替わったときのイベント
window.addEventListener('popstate', function (e) {
  if (e.state) {
    getContents(location.href);
  }
}, false);

// A要素をクリックしたときにgetContents関数を実行する
document.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    var href = e.target.getAttribute('href');
    getContents(href);
    history.pushState(true, null, href);
  }
  e.preventDefault();
});

