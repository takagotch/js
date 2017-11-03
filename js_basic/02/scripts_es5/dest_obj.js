'use strict';

var book = { title: 'Javaポケットリファレンス ', publish: '技術評論社', price: 2680 };
var price = book.price;
var title = book.title;
var _book$memo = book.memo;
var memo = _book$memo === undefined ? 'なし' : _book$memo;


console.log(title);
console.log(price);
console.log(memo);
