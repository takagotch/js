/**
 * author: JSサポーターズ
 * リスト3: 数字の解析
 */

Globalize.culture('ja');
log(Globalize.parseFloat('1,234,567.89')); // 1234567.89
Globalize.culture('de');
log(Globalize.parseFloat('1.234.567,89')); // 1234567.89

