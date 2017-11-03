document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    var onoff = document.getElementById('onoff');
    if(onoff.checked) {
    console.log(onoff.value);
    } else {
    console.log('チェックされていません。');
    }
  }, false);
}, false);