/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/Pduc4/
 * リスト4: オブジェクトのループ例
 */

var list = '<ul>{{#people}}<li>{{name}}</li>{{/people}}</ul>';

html = Mustache.to_html( list, {
  people:[
    {name:"apple"},
    {name:"bar"},
    {name:"baz"}
  ]
});

$("#test").html(html);

