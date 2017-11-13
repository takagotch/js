var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    document.getElementById('ajaxTime').innerHTML = xhr.responseText;
  }
};
xhr.open('GET', 'api.php', false);
xhr.send();

applicationCache.addEventListener('updateready', function() {
  if (confirm('アップデートがあります。リロードしますか？')) {
    location.reload(true);
  }
}, false);

