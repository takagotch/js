document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    var name = document.getElementById('name');
    console.log(name.value);
    //name.value = '鈴木与作';
  }, false);
}, false);