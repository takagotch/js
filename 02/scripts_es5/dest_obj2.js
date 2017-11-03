'use strict';

var book = { title: 'Javaポケットリファレンス ', publish: '技術評論社', price: 2680,
  other: { keywd: 'Java SE 8', logo: 'logo.jpg' } };
var title = book.title;
var other = book.other;
var keywd = book.other.keywd;


console.log(title);
console.log(other);
console.log(keywd);
