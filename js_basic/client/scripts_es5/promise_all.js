'use strict';

function asyncProcess(value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (value) {
        resolve('入力値： ' + value);
      } else {
        reject('入力は空です');
      }
    }, 500);
  });
}

Promise.all([asyncProcess('トクジロウ'), asyncProcess('ニンザブロウ'), asyncProcess('リンリン')]).then(function (response) {
  console.log(response);
}, function (error) {
  console.log('エラー： ' + error);
});
