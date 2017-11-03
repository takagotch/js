'use strict';

var n = '123xxx';
console.log(new Number(n).valueOf());
console.log(Number.parseFloat(n));
console.log(Number.parseInt(n));

var d = new Date();
console.log(new Number(d).valueOf());
console.log(Number.parseFloat(d));
console.log(Number.parseInt(d));

var h = '0x10';
console.log(new Number(h).valueOf());
console.log(Number.parseFloat(h));
console.log(Number.parseInt(h));

var e = '1.01e+2';
console.log(new Number(e).valueOf());
console.log(Number.parseFloat(e));
console.log(Number.parseInt(e));
