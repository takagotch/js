/**
 * author: JSサポーターズ
 * リスト4: 数字の表示
 */

Globalize.culture('ja');
// 'n'は数値表記
log(Globalize.format(1234567.89, 'n')); // "1,234,567.89"
// 'c'は金額表記
log(Globalize.format(1234567.89, 'c')); // "¥1,234,568" 日本円の補助単位は使われていないので四捨五入
Globalize.culture('de');
// 'n'は数値表記
log(Globalize.format(1234567.89, 'n')); // "1.234.567,89"
// 'c'は金額表記
log(Globalize.format(1234567.89, 'c')); // "1.234.567,89 €"

