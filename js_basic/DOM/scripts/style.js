document.addEventListener('DOMContentLoaded', function() {
  var elem = document.getElementById('elem');

  elem.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'Yellow';
  }, false);

  elem.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
  }, false);
}, false);
