/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/R4rTq/
 * リスト1: Underscore.templateの例
 */

// 以下を事前に読み込む
// <script type="text/javascript" src="http://underscorejs.org/underscore-min.js"></script>

// DOMを実体化
function entitize(str) {
  str = str.split("&").join("&amp;");
  str = str.split("<").join("&lt;");
  str = str.split(">").join("&gt;");
  str = str.split('"').join("&quot;");
  str = str.split("{").join("&#123;");
  str = str.split("}").join("&#125;");
  str = str.split("'").join("&#039;");
  return str;
}

var format = "<% _.each(people, function(name) { %> <li><%= name %></li> <% }); %>";
var result = _.template(format, {people : ['moe', 'curly', 'larry']});

log(entitize(result));

