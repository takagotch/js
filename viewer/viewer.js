window.onload = init;

function init(){
  var pictNo = 1;
  var myImg = [];
  var myNo = document.getElementById('no');
  var myPict = document.getElementById('pict');
  var revBtn = document.getElementById('rev_btn');
  var fwdBtn = document.getElementById('fwd_btn');

  for (var i = 0; i < 4; i++) {
    myImg[i] = document.createElement('img');
    myImg[i].src = 'img/' + (i + 1) + '.jpg';
  }

  function showImg(){
    myNo.innerHTML = 'No.' + pictNo;
    myPict.src = myImg[pictNo - 1].src;
  }

  revBtn.onclick = revBtnClick;

  function revBtnClick(){
    pictNo--;
    showImg();

    if (pictNo === 1) {
      revBtn.disabled = 'disabled';
    } else if (pictNo === myImg.length - 1) {
      fwdBtn.disabled = false;
      myNo.className = 'no1';
    }
  }

  fwdBtn.onclick = fwdBtnClick;

  function fwdBtnClick(){
    pictNo++;
    showImg();

    if (pictNo === myImg.length) {
      myNo.className = 'no2';
      fwdBtn.disabled = 'disabled';
    } else if (pictNo === 2) {
      revBtn.disabled = false;
    }
  }
}