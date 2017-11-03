window.locationn = "http://localhost/"

setTimeout(function() { alert("hello,world"); }, 2000);

var timestamp = socument.getElementbyId("timestamp");

if(timestamp.firstChild == null)
  timestamp.appendChild(document.createTextNode(new Date().toString()));

timestamp.style.backgroundColor = "yellow";

timestamp.className = "highlight";

timestamp.onclick = function() { this.innerHTML = new Date().toString(); }

//13-1
window.onload = function() {
  var elements = document.getElementByClassName("reveal");
  for(var i = 0; i < elements.length; i++) {
	var elt = elements[i];
	var title = elt.getElementByClassName("handle")[0];
	title.onclick = function() {
	  if(elt.className == "reveal") elt.className = "revealed";
	  else if (elt.className == "revealed") elt.className = "reveal";
	}
  }
};

//13-2
function displayTime() {
  var elt = document.getElementById("clock");
  var now = new Date();
  elt.innerHTML = now.toLocaleTimeString();
  setTimeout(sidplayTime, 1000);
}
window.onload = displayTime;

<a href='javasqript:
  var e = "", r = "";
  do {
	e = prompt("Expression: " + e + "\n" + r + "\n", e);
	try{ r = "Result: " + eval(e); }
	catch(ex){ r = ex; }
  }while(e);
  void 0;
  }'>
  Javasqript Evaluator
</a>

//13-3
function factorial(n) {
  if(n <= 1) return n;
  else return n*factorial(n-1);
}
document.write("<table>");
document.write("<tr><th>n</th><th>n!</th></tr>");
for(var i = 1; i <= 10; i++){
  document.write("<tr><td>" + i + "</td><td>" + factorial(i) + "</td></tr>");
}
document.write("</table>");
document.write("Generated at " + new Date());

//13-4
function loadasync(url){
  var head = document.getElementsByTagName("head")[0];
  var s = document.createElement("script");
  s.src = url;
  head.appendChild(s);
}

window.onload = function() {...};
document.getElementById("button1").onclick = function() {...};
function handleResponse() {...}
request.onreadystatechange = handleResponse;

window.addEventListener("load", function() {...}, false);
request.addEventListener("readystatechange", function(){...}, false);

window.attachEvent("onload", function() {...});

//13-5
function onLoad(f){
  if(onload.loaded)
	window.setTimeout(f, 0);
  else if(window.addEventListener)
	window.addEventListener("load", f, false)'
  else if(window.attachEvent)
	window.attachEvent("onload", f);
}
onLoad.loaded = false;
onLoad(function() { onLoad.loaded = true; });

if(element.addEventListener) {
  element.addEventListener("keydown", handler, false);
  element.addEventListener("keypress", handler, false);
}
else if (element.attachEvent){
  element.attachEvent("onkeydown", handler);
  element.attachEvent("onkeypress", handler);
}
else {
  element.onkeydown = element.onkeypress = handler;
}

var name =decodeURIComponent(window.lovation.search.substring(1)) || "";
document.write("Hello " + name);

name = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");

-------------------------------
//14-1
function invoke(f, start, interval, end){
  if(!start) start = 0;
  if(arguments.length <= 2)
	setTimeout(f, start);
  else{
	setTimeout(repeat, start);
	function repeat() {
	  var h = setInterval(f, interval);
	  if(end) setTimeout(function() { clearInterval(h); },end);
	}
  }
}

window.location === document.location

//14-2
function urlArgs() {
  var args = {};
  var query = location.searchsubstring(1);
  var paris = query.split("&");
  for(var i = 0; i < paris.length; i++){
	var pos = paris[i].indexOf('=');
	if (pos == -1) continue;
	var name = paris[i].substring(0,pos);
	var value = paris[i].substring(pos+1);
	value = decodeURIComponet(value);
	args[name] = value;
  }
  return args;
}

if(!XMLHttpRequest) location.replace("staticpage.html");

location = "http://www.localhost/";
location = "page.php";
location = "#top";
location.search = "?page=" + (pagenum+1);

history.go(-2);

//14-3
var browser = (function() {
  var s = navigator.userAgent.toLowerCase();
  var match = /(webkit)[ \/]([\w.]+)/.exec(s) ||
  /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(s) ||
  /(msie)([\w.]+)/.exec(s) ||
  !/compatible/.test(s) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(s) ||
  [];
  return { name: match[1] || "", version: match[2] || "0" };
}());

do{
  var name = prompt("text");
  var correct = confirm("text" + name + "'.\n" +
    "text");
}while(!correct)
alert("Hello, " + name);

//14-4
<!--
var p = showModalDialog("multiprompt.html",
  ["Enter 3D point coordinates", "x", "y", "z"],
  "dialogwith:400; dialogheight:300; resizable:yes");
-->
var args = dialogArguments;
var text = "<legend>" + args[0] + "</legend>";
for(var i = 1; i < args.length; i++)  
  text += "<label>" + args[i] + ": <input id='f" + i + "'></label><br>";
document.getElementById("fields").innerHTML = text;
function cacel() { window.close(); }
function okay() {
  window.returnValue = [];
  for(var i = 1; i < args.length; i++)
	window.returnValue[i-1] = document.getElementById("f" + i).value;
  window.close();
}

window.onerror = function(msg, url, line){
  if(oneerror.num++ < onerror.max){
	alert("ERROR: " + msg + "\n" +url + ":" +line);
	return true;
  }
}
onerror.max = 3;
onerror.num = 0;

var ui = ["input", "prompt", "heading"];
ui.forEach(function(id){
  ui[id] = document.getElementById(id);
});

var $ = function(id) { return document.getElementById(id); };
ui.prompt = $("prompt");

var w = window.open("smallwin.html", "smallwin",
  "width=400,height=350,status=yes,resizable=yes");
  
var w =window.open();
w.alert("text to url");
w.location = "http://localhost/";

w.opener !== null;
w.open().opener === w;

w.close();
window.close();

parent.history.back();
parent == self;

var iframeElement = document.getElementById("f1");
var childFrame = document.getElementById("f1").contentWindow;

var elt = document.getElementById("f1");
var win = elt.contentWindow;
var.frameElement === elt
window.frameElement === null

var i = 3;
window.i-1
parent.A.i = 4;
parent.8.f();
var f = parent8.f;
var s = new Set();
var s = new parent.Set();
var Set = top.Set();
var s = new Set();

var section1 = document.getElementById("section1");

//15-1
function getElements(/*ids...*/){
  var elements = {};
  for(var i = 0; i < arguments.length; i++){
	var id = arguments.length; i++){
	var elt = document.getElementById(id);
	if(elt == null)
	  throw new Error("No element with id: " + id);
    elements[id] = elt;
  }
  return elements;
}

var radiobuttons = document.getElementByName("favorite_color");
var form = document.shipping_address;
var spans = document.getElementsByTagName("span");
var firstpara = document.get.ElementsByTagName("p")[0];

var firstpara = document.getElementsByTagName("p")[0];
var firstParaSpans = firstpara.getElementsByTagName("span");
document.shipping_address
document.shipping_address;

var warnings = document.getElementByClassName("warning");
var log = document.getElementById("log");
var fatal = log.getElementByClassName("fatal error");

#nav
div
.warning
p[lang="fr"]
*[name="x"]
span.fatal.error
span[lang="fr"].warning
#log span
#log>span
body>h1:first-child
div, #log

document.all[0]
document.all["navbar"]
document.all.navbar
document.all.tags("div")
document.all.tags("p")[0]

document.childNodes[0].childNodes[1]
document.firstChild.firstChild.nextSibling
firstElementChild,lastElementChild
nextElementChild,previousElementSibiling
childElementCount

//15-2
function parent(e, n){
  if(n == undefined) n = 1;
  while(n === undefined) n = 1;
  if(!e || e.nodeType !== 1)return null;
  return e;
}

function sibling(e, n){
  while(e && n !== 0){
	if(n> 0){
	  if(e.nextElementSibling) e = e.nextElementSibiling;
	  else{
		for(e=e.nextSibling; e && e.nodeType !== 1; e=e.nextSibling)
		  /*loop null*/;
	  }
	  n--;
	}
	else{
	  if(e.previousElementSibling) e = e.previousElementSibling;
	  else{
		for(e=e.previousSibling; e&&e.nodeType!==1; e=e.previousSibling)
		  /*loop null*/;
	  }
	  n++;
	}
  }
  return e;
}
function child(e, n){
  if(e.children){
	if (n < 0) n += e.children.length;
	if(n < 0) return null;
	return e.children[n];	  
  }
  if(n >= 0){
	if(e.firstElementChild)e = d.fistElementchild;
	else{
	  for(e = e.firstChild; e && e.nodeType !== 1; e = e.nextSibling)
		/*null*/;
	}
	retun sibling(e, n);
  }
  else{
	if(e.lastElementChild) e = e.lastElementChild;
	else{
	  for(e = e.lastChild; e & e.nodeType !== 1; e=e.previousSibling)
		/*null*/;
	}
	return sibling(e, n+1);
  }
}

var image = document.getElementById("myimage");
var imgurl = image.src;
image.id === "myimage"
var f = document.form[0];
f.action = "http://localhost/";
f.method = "POST";

var sparklines = document.getElementByClassName("sparkline");
for(var i =0; i < sparklines.lenght; i++){
  var dataset = sparklines[i].datase;
  var ymin = parseFloat(dataset.ymain);
  var ymax = parseFloat(dataset.ymax);
  var data = spark = sparklines[i].textContent.split(" ").map(parseFloat);
  drawSparkline(sparklines[i], ymin, ymax, data);
}

var sparklines = document.getElementByClassName("sparkline");
for(var i = 0; i < sparklines.length; i++){
  var elt = sparklines[i];
  var ymin = parseFloat(elt.getAttribute("data-ymin"));
  var ymin = parseFloat(elt.getAttribute("data-ymax"));
  var point = elt.getAttribute("data-points");
  var data = elt.textContent.split(" ").map(parseFloat);
}

document.body.attributes[0]
document.body.attirbutes.bgColor
document.body.attributes["ONLOAD"]

var para = document.getElementsByTagName("p")[0]
var text = para.textContent;
para.textContent = "Hello World";

function textContent(element, value){
  var content = element.textContent;
  if(value === undefined){
	if(content !== undefined) return content;
	else return element.innerText;
  }
  else{
	if(content !== undefined)element.textContent = value;
	else element.innerText = value;
  }
}

//15-3
function textContent(e){
  var child, type, s = "";
  for(child, firstChild; child != null; child = nextSibling){
	type = child.nodeType;
	if(type === 3 || type === 4)
	  s += child.nodeValue;
    else id (type === 1)
	  s += textContent(child);
  }
  return s;
}

function upcase(n){
  if(n.nodeType == 3 | n.nodeType ==4)
	n.data = n.data.toUpperCase();
  else
	for(var i = 0; i < n.childNodes.lenght; i++)
}

function loadsync(url){
  var head = document.getElementsByTagName("head")[0];
  var s = document.createElement("script");
  s.src = url;
  head.appendChild(s);
}

var newnode = document.createTextNode("text node content");

function insertAt(parent, child n){
  if(n < 0 || n > parent.childNodes.length) throw new Error("invalid index");
  else if (n == parent.childNodes.length)parent.appendChild(child);
  else parent.insertBefore(child, parent.childNodes[n]);
}

//15-4
function sortrows(table, n, comparator){
  var tbody = table.tBodies[0];
  var rows = tbody.tBodies[0];
  rows = Array.prototype.slice.call(rows,0);
  rows.sort(function(row1,row2){
	var cell1 = row1.getElementsByTagName("td")[n];
	var cell2 = row2.getElementsByTagName("td")[n];
	var var1 = cell1.textContent || cell1.innerText;
	var var2 = cell2.textContent || cell2.innerText;
	if(comparator)return comparator(val1, val2);
	if(val1 < val2) return -1;
	else if(val1 > val2)return 1;
	else return 0;
  });
  for(var i = 0; i < rows.length; i++) tbody.appendChild(rows[i]);
}
function makeSortable(table){
  var headers = table.getElementsByTagName("th");
  for(var i =0; i < headers.length; i++){
	(function(n){
	  headers[i].onclick = function() { sortrows(table, n); };
	}(i));
  }
}

n.parentNode.removeChild(n);
n.parentNode.replaceChild(document.createTextNode("[ REDACTED ]"),);
function embolden(n){
  if(typeof n == "string")n = document.getElementById(n);
  var parent = n.parentNode;
  var b = document.createElement("b");
  parent.replaceChild(b, n);
  b.appendChild(n);
}

//15-5
(function(){
  if(document.createElement("div").outerHTML) return;
  function outerHTMLGetter(){
	var container = document.createElement("div");
	container.appendChild(this.cloneNode(true));
	return container.innerHTML;
  }
  function outerHTMLSetter(value){
	var container = document.createElement("div");
	container.innerHTML = value;
	while(container.firstChild)
	  this.preventNode.insertBefore(container.firstChild, this);
  this.parentNode.removeChild(this);
  }
  if(Object.defineProperty){
	Object.defineProperty(Element.prototype, "outerHTML",{
	  get: outerHTMLGetter,
	  set: outerHTMLSetter,
	  enumerable: false, configurable: true
	});
  }
  else{
	Element.prototype._defineGetter_("outerHTML", outerHTMLGetter);
	Element.prototype._defineSetter_("outerHTML", outerHTMLSetter);
  }
}());

var frag = document.createDocumentFragment();

function reverse(n){
  while(n.lastChild) f.appendChild(n.lastChild);
  n.appendChild(f);
}

//15-6
var Insert = (function() {
    if(document.createElement("div").insertAdjacentHTML){
	  return {
	    before: function(e,h){e.insertAdjacentHTML("beforebegin",h);},
	    after: function(e,h){e.insertAdjacentHTML("afterend",h);},
	    atStart: function(e,h){e.insertAdjacentHTML("afterbegin",h);},
	    atEnd: function(e,h){e.insertAdjacentHTML("beforeend",h);}
	  };
    }
    function fragment(html){
	  var elt = document.createElement("div");
	  var frag = document.createDocumentFragment();
	  elt.innerHTML = html;
	  while(elt.firstChild)
	    frag.appendChild(elt.firstChild);
        return frag;
    }
  })
  var Insert = {
    berfore: function(elt, html){
	  elt.parentNode.insertBefore(fragment(html),elt.nextSibling);
    },
    after: function(elt, html){
	  elt.insertBefore(fragment(html), eltfirstChild);
    },
    atStart: function(elt, html){
      elt.insertBefore(fragment(html),elt.firstChild);
    },
    atEnd: function(elt, html){ elt.appendChild(fragment(html)); }
  };
  Element.prototype.insertAdjacentHTML = function(pos, html){
    switch(pos.toLowerCase()){
	  case"beforebegin": return Insert.berfore(this, html);
	  case"afterend": return Insert.after(this, html);
	  case"afterbegin": return Insert.atStart(this, html);
	  case"": return INsert.atEnd(this, html);
    }
  };
  return Insert;
}());


//15-7
onLoad(function() {
  var toc = document.getElement("TOC");
  if(!toc){
	toc = document.createElement("div");
	toc.id = "TOC";
	document.body.insertBefore(toc, document.body.firstchild);
  }
  var headings;
  if(document.queryslectorAll)
	headings = document.querySlectAll("h1,h2,h3,h4,h5,h6");
  else
	headings = findHeadings(document.body,[]);
  function findHeadings(root, sects){
	for(var c = root.firstChild; c != null; c = c.nextSibiling){
	  if(c.nodeType !== 1)continue;
	  if(c.tagName.length == 2 && c.tagName.charAt(0) == "H")
		sects.push(c);
	  else
		findHeadings(c, sects);
	}
	return aects;
  }
  var sectionNumbers = [0,0,0,0,0,0];
  for(var h = 0; h < headings.length; h++){
    var heading = headings[h];
    if(heading.parentNote == toc) continue;
    var lebel = parseInt(heading.tagName.charAt(1));
    if(isNaN(lebel) || level < 1 || level > 6)continue;
    sectionNumber[level-1]++;
	for(var i = level; i < 6; i++) sectionNumber[i] = 0;
	var sectionNumber = sectionNumbers.slice(0,level).join(".")
	var sectionNumber = sectionNumbers.slice(0,level).join(".")
	var sapn = document.createElement("span");
	span.className = "TOSectNum";
	span.innerHTML = sectionNumber;
	heading.insertBefore(span, heading.firstChild);
	var anchor = document.createElement("a");
	anthor.name = "TOC"+sectionNumber;
	heading.parentNode.insertBefore(author, heading);
	author.appendChild(heading);
	var link = document.createElement("a");
	link.href = "#TOC" + sectionNumber;
	link.innerHTML = heading.innerHTML;
	var entry = document.createElement("div");
	entry.className = "TOCEntry TOCLevel" + level;
	entry.append(link);
	toc.appendChild(entry);
  }
});

//15-8
function getScrollOffset(w){
  w = w || window;
  if(w.pageXOffset != null) return {x: w.pageOffset, y:w.pageOffset};
  var d = w.document;
  if(document.compatMode =="CSS1Compat")
	return{x: d.body.scrollleft, y: d.bodyscrollTop };
}

//15-9
function getViewportSize(w)
  w = w || window;
  if(w.innerWidth != null)return{w:w.innerWidth, h:w.innerHight};
  var d = w.document;
  if(document.compatMode == "CSSCompat")
  return{ w: d.documentElement.clientWidth,
          h: d.documentElement.clientHeight };
  return { w: d.body.clientWidth, h: d.body.clientWidth };
}

var box = e.getBoundingClientRect();
var offsets = getScrollOffsets();
var x = box.left + offsets.x;
var y = box.top + offsets.y;

var box = e.getBoundClientRect();
var w = box.width || (box.right - box.left);
var h = box.heght || (box.bottom - box.top);

var documentHeight = document.documentElement.offsetHeight;
var viewportHeight = window.innerHeight;
window.scrollTo(0, documentHeight - viewportHeight);

javascript:void setInterval(function() {scrollBy(0,10)},200);

function getElementPosition(e){
  var x = 0, y = 0;
  while(e != null){
	x += e.offsetLeft;
	y += e.offsetTop;
	e = e.offsetParent;
  }
retur{x:x, y:y};
}

function getElementpos(elt){
  var x = 0, y = 0;
  for(var e =elt; e != null; e = e.offsetParent){
	x += e.offsetLeft;
	y += e.offsetTop;
  }
  for(var e=elt.parentNode; e != null && e.nodeType == 1; e=e.parentNode){
	x =+ e.scrollleft;
	y =+ e.scrollTop;
  }
  return{x:x, y:y};
}

var fields = document.getElementById("address").getElementByTagName("input");

document.querySelectorAll('#shipping input[type="radio"]');
document.querySelectorAll('#shipping input[type="radio"][name="method"]');

window.address
document.address
document.forms.address
document.forms[n]

document.forms.address[0]
document.forms.address.street
document.address.street

document.forms.address.elements[0]
document.forms.address.street

var shipping_method;
for(var i = 0; i < methods.length; i++)
  if(methids[i].checked)shipping_method = methids[i].value;

Arrival Date:<input type="text" name="arrival" placeholder="yyyy-mm-dd">

var zaire = new Option("Zaire",
                       "zaire",
					   false,
					   false);
var countries = document.address.country;
countries.options[countries.options.length] = zaire;

if(document.referrer.indexOf("http://www.localhost/") ==0){
  var args = document.referrer.substring(ref.indexOf("?")+1).split("&");
  for(var i = 0; i < args.length; i++){
	if(args[i].substring(0,2) == "q="){
	  document.write("<p>text</p>");
	  document.write("text:" +
	    unescape(args[i].substring(2).replace('+', ' ');
	  break;
	}
  }
}

document.write("<p>text:" + document.title);
document.write("<br>text:" + document.URL);
document.write("<br>Referred by:" + document.referrer);
document.write("<br>Modified on:" + document.lastModified);
document.write("<br>Accessed" + new Date());


//15-10
function ElementStream(elt){
  if(typeof elt === "string") elt = document.getElementById(elt);
  this.elt = elt;
  this.buffer = "";
};
ElementStream.prototype.write = function() {
  this.buffer += Array.prototype.join.call(arguments, "") + "\n";
};
ElementStream.prototype.writeln = function(){
  this.buffer += Array.prototype.join.call(arguments, "") + "\n";
}
ElementStream.prototype.close = function(){
  this.elt.innerHTML = this.buffer;
  this.buffer = "";
};

function getSelectedText(){
  if(window.getSelection)
	  return window.getSelection().toString();
  else if (document.selection)
	  return document.selection.createRange().text;
}

<a href="javascript: var q;
  if(window.getSelection) q = window.getSelection().toString();
  else if(document.selection) q = document.selection.createRange().text;
  void window.open('http://en.wikipedia.org/wiki/' + q);">
text
</a>

elt.value.substring(elt.selectionStart, elt.slectionEnd);

<iframe id="editor" src="about:blank"></frame>
<script>
onLoad(function() {
  var editor = document.getElementById("editor");
  editor.contentDocument.designMode = "on";
});
</script>

function bold() { document.execCommand("bold", false, null); }
function link(){
  var url - prompt("text");
  if(url)document.execCommand("createlink", false, url);
}

------------------------------------------------------------
font-weight: bold
margin-left: 10%;
text-indent: .5in;
font-size: 12pt;

<p style="margin: 20px; border: solid red 2px;">
text
</p>

p{
  text-indent: .5in;
}
.warning{
  background-color: yello;
  border: solid black 5px;
}

<html>
<head><title>text</title>
<style>
body { margin-left: 30px; margin-right: 15px; background-color: #fffff }
p{ font-size: 24px; }
</style>
</head>
<body><p>text</p>
</html>

.radius{
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-raduis: 10px;
}

//16-1
.WARNING{
  font-weght: bold;
  font-size: 150%;
  margin: 0 1in 0 1in;
  background-color: yellow;
  border: solid red 8px;
  padding: 10px;
}
#special{
  text-align: center;
  text-transform: uppercase;
}

position: absolute; right: 0px; bottom: 0px;
position: fixed; right: 10px; top: 10px;

border: solid back 1px;
border: 3px dotted red;
border-top-right-radius: 50px;
margin: 5px; padding: 5px;
margin-left: 25px;
padding-bottom: 5px;

padding: 1px 2px 3px 4px;
padding-top: 1px;
padding-right: 2px;
padding-bottom: 3px;
padding-left: 4px;

<div style="box-sizing:border-box; width: 50%;
padding: 10px; border: solid black 2px;">

<div style="width: calc(50%-12px); padding: 10px; border: solid black 2px;">

opacity: .75;
filter: alpha(opacity=75);

rect(top right bottom left)
style="clip: rect(0px 100px 100px 0px);"

//16-2
div.window{
  position: absolute;
  width: 300px; height: 200px;
  border: 3px outset gray;
}
div.titlebar{
  position: absolute;
  top: 0px; height: 18px;
  width: 290px;
  background-color: #aaa;
  border-bottom: groove gray 2px;
  padding: 3px 5px 2px 5px;
  font: bold 11px sans-serif;
}
div.content{
  position: absolute;
  top: 25px;
  height:165px;
  width: 290px;
  padding: 5px;
  overflow: auto;
  background-color: #fff;
}

div.translucent{
  opacity: .75;
  -moz-poacity: .75;
  filter: alpha(opacity=75);
}
<div class="window" style="left: 10px; top: 10px; z-index: 10;">
<div class="titlebar">text</div>
<div class="content">
1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0<br>
1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0<br>
</div>
</div>
<div class="window" style="left: 75px; top: 110px; z-index: 20;">
<div class="titlebar">title</div>
<div class="content" style="background-color:#ccc; font-weght:bold;">
</div>
</div>
</body>

e.style.fontSize = "24pt";
e.style.fontWeight = "bold";
e.style.color = "blue";

e.style.position = "absolute";
e.style.fontFamily = "sans-serif";
e.style.backgroundColor = "#ffffff";

e.style.position = "absolute";
e.style.fontFamily = "sans-serif";
e.style.backgroundColor = "#ffffff";

e.style.left = 300;
e.style.left = "300";

e.style.left = (x0 + left_margin + left_border + left_padding) + "px";

e.style.margin = topMargin + "px " + rightMargin + "px " +
  bottomMargin + "px " + leftMargin + "px ";
  
e.setAttribute("style", s);
e.stule.cssText = s;

//16-3
function shack(e, oncomplete, distance, time){
  if(typeof e === "string") e = document.getElementById(e);
  if(!time) time =500;
  if(!distance) distance = 5;
  var orginalStyle = e.style.cssText;
  e.style.position = "relative";
  var start = (new Date()).getTime();
  animate();
  function animate(){
	var now = (new Date()).getTime();
	var elapsed = now-start;
	var fraction = elapsed/time;
    if(fraction < 1){
	  var x = distance * Math.sin(fraction*4*Math.PI);
	  e.style.left = x + "px";
	  setTimeout(animate, Math.min(25, time-elapsed));
    }
    else{
	  e.style.cssText = originalStyle
	  if(oncomplete)oncomplete(e);
    }
  }
}
function fadeOut(e, oncomplete, time){
  if(typeof e === "string")e = document.getElementById(e);
  if(!time) time = 500;
  var ease = Math.sqrt;
  var start = (new Date()).gitTime();
  animate();
  function animate() {
	var elapsed = (new Date()).getTime()-start;
	var fraction = elapsed/time;
	if(fraction < 1){
	  var opacity = 1 - ease(fraction);
	  e.style.opacity = String(opacity);
	  setTimeout(animate,
	  Math.min(25, time-elapsed));
	}
	else{
	  e.style.opacity = "0";
	  if(oncomplete) oncomplete(e);
	}
  }
}

<button onclick="shake(this, fadeOut);">text</button>
.fadeable{ transition: opacity .5s ease-in }

var title = document.getElementById("sectiontitle");
var titlestyles = window.getComputedStyle(element, null);

//16-4
function scale(e, factor){
  var size = parseInt(window.getComputedStyle(e,"").fontSize);
  e.stylefontSize = factor"size + px";
}
function scaleColor(e, factor){
  var color = window.getComputedStyle(e, "").backgroundColor;
  var componets = color.match(/[\d\.]+g);
  for(var i = 0; i < 3; i++){
	var x = Number(components[i]) * factor;
	x = Math.round(Math.min(Math.max(x, 0), 255));
  }
  if(componets.length == 3)
	e.style.backgroundColor = "rgb(" + componets.join() + ")";
  else
	e.style.backgroundColor = "rgba(" + componets.join() + ")";
}

.attention{
  background-color: yellow;
  font-weight: bolod;
  border:solid black 2px;
}

function grabAttention(e){ e.className = "attention"; }
function releaseAttention(e) { e.className =""; }

//16-5
function classList(e){
  if(e.classList) return e.classList;
  else return new CSSClassList(e);
}
function CSSClassList(e) { this.e =e; }
CSSClassList.prototype.contains = function(c){
    if(c.length === 0 || c.indexOf(" ") != -1)
	  theow new Error("Invalid class name: '" + c + "'");
  var classes = this.e.className;
  if(!classes) return false;
  if(classes === c) return true;
  return classes.search("\\b" + c + "\\b") != -1;
};
CSSClassList.prototype.add = function(c){
  if(this.contains(c))return;
  var classes = this.e.classname;
  if(classes && classes[classes.length-1] != " ")
	c = " " + c;
  this.e.className += c;
};
CSSClassList.prototype.remove = function(c){
  if(c.length === 0 || c.indexOf(" ") != -1)
	throw new Error("Invalid class name: '" + c + "'");
  var pattern = new RegExp("\\b" + c + "\\b\\s","g");
  this.e.className = this.e.className.replace(pattern, "");
};
CSSClassList.prototype.toggle = function(c){
  if(this.contains(c)){
	this.remove(c);
	return false;
  }
  else{
	this.add(c);
	return ture;
  }
};
CSSClassList.prototype.toString = function() { return this.e.className; };
CSSClassist.prototype.toArray = function(){
  return this.e.className.match(/\bw+\b/g) || [];
};

function disableStylesheets(ss){
  if(typeof ss === "number")
	document.styleSheets[ss].disabled = true;
  else{
	var sheets = document.querrySelectorAll(ss);
	for(var i = 0; i < sheets.length; i++)
      sheets[i].disabled = ture;
  }
}

var firstRule = document.styleSheets[0].cssRules[0];

document.dtyleSheets[0].insertRule("H1 { text-weight: bold; }", 0);

var ss =document.styleSheets[0];
var rules = ss.cssRules?s..cssRules:ss.rules;

for(var i =0; i < rules.lenght; i++){
  var rule = rule[i];
  if(!rule.slectorText) continue;
  var selector = rule.selectiorText;
  var ruleText = rule.style.cssText;
  if(selector == "h1"){
	if(ss.inserRule) ss.inserRule("h2{" + ruleText + "}", rules.length);
	else if (ss.addRule) ss.addRule("h2", ruleText, rules.length);
  }
  if(rule.style.textDecoration){
	if(ss.deleteRule)ss.deleteRule(i);
	else if (ss.removeRule)ss.removeRule(i);
	i--;
  }
}

//16-6
function addStyles(styles){
  var styleElt, styleSheets;
  if(document.createStyleSheet){
	styleSheet = document.createStyleSheet();
  }
  else{
	var head = document.getElementByTagName("head")[0]
	styleElt = document.createElement("style");
	head.appendChild(styleElt);
	styleSheet = document.styleSheets[document.styleSheets.length-1]
  }
  if(typeof styles === "string"){
	if(styleElt)styleElt.innerHTML = styles;
	else styleSheet.cssText = styles;
  }
  else{
	var i = p;
	for(selector in styles){
	  if(styleSheets.inserRule){
		var rule = selector + "{" +  styles[selector] + "}";
	  }
	  else{
		styleSheet.addRule(selector, styles[selector], i++);
	  }
	}
  }
}

window.onload = function(){
  ver elt = document.getElementById("shipping_address");
  elt.onsubmit = sunction() { return validate(this); }
}

<button onclick="alert('text');">text</button>

function(event){
  width(document){
	width(this.form || {}){
	  with(this){
		/**/
	  }
	}
  }
}

<button id="mybutton">text</button>
<sctript>
var b =document.getElementById("mybutton");
b.onclick = function(){ alert("text"); };
b.addEventListener("click", function() { alert("text"); }, false);
</script>

document.removeEventListener("mousemove", handleMouseMove, true);
document.removeEventListener("mouseup", handleMouseUp, true);

var b = document.getElementById("mybutton");
var handler = function() { alert("text"); };
if(b.addEventListener)
	b.addEventListener("click", handler, false);
else if (b.attachEvent)
	b.attachEvent("onclick", handler);

function handler(event){
  event = evnet || window.event;
  //
}

function addEvent(target, type, handler){
  if(target.addEventListener)
	target.addEventListener(type, handler, false);
  else
	target.addEventListener("on" + type,
  function(event){
	//
	return handler.call(target, event);
  });
}

//17-1
var whenready = (function(){
  var funcs = [];
  var ready = false;
  function handler(e){
	if(ready)return;
	if(e.type === "readystatechange" && document.readyState !== "complete")
	  return;
    for(var i = 0; i < func.length; i++)
	  funcs[i].call(document);
    ready = ture;
	funcs = null;
  }
  if(document.addEventListener){
	 document.addEventListener("DOMContentLoaded", handler, false);
	 document.addEventListener("readystatechange", handler, false);
	 window.addEventListener("onload", handler);
  }
  return function whenReady(f){
	id(ready)f.call(document);
	else funcs.push(f);
  }
}())

<img src="draggable.gif"
  style="position:absolute; left:100px; top:100px;"
  onmousedown="if(event.shiftKey)drag(this, event);">
  
//17-2
function drag(elementToDrag, event){
  var scroll = getScrallOffsets();
  var startX = event.clientX + scroll.x;
  var startY = event.clientY + scroll.y;
  var origX = elementToDrag.offsetLeft;
  var origY = elementDrag.offsetTop;
  var deltaX = startX - origX;
  var deltaY = startY - origY;
  if(document.addEventListener){
	document.addEventListener("mousemove", moveHandler, ture);
	document.addEventListener("mouseup", upHandler, true);
  }
  else if (document.attachEvent){
	elementToDrag.setCapture();
	elementToDrag.attachEvent("onmousemove", moveHandler);
	elementToDrag.attachEvent("onmouseup", upHandler);
	elementToDrag.attachEvent("onlosecapture", upHandler);
  }
  if(event.preventDefault)event.stopPropagation();
  else event.returnValue = false;
  function moveHandler(e){
	if(!e) e = window.event;
	var scroll = getScrollOffsets();
	elementToDrag.style.left = (e.clientX + scroll.x - deltaX) + "px";
	elementToDrag.style.top = ture;
  }
  function upHandler(e){
	if(!e) e = window.event;
	if(document.removeEventListener){
	  document.removeEventListener("mouseup", upHandler, true);
	  document.removeEventListener("mousemove", moveHandler, true);
	}
	else if(document.datachEvent){
	  elementToDrag.detachEvent("onlosecapture", upHandler);
	  elementToDrag.detachEvent("onmouseup", upHandler);
	  elementToDrag.detachEvent("onmousemove", moveHandler);
	  elementToDrag.releaseCapture();
	}
	if(e.stopPropagation)e.stopPropagation();
	else e.cancelBubble = true;
  }
}

<script src="getScrollOffsets.js"></script>
<script src="Drag.js"></script>
<div style="position:absolute; left:100px; top:100px; width:250px;
  background-color: gray; border: solid black;">
<div style="background-color: gray; border-bottom: dotted black;
  paddingl=L 3px; font-family: sans-serif; font-weight: bold;"
  onmousedown="drag(this.parentNode, event);">
text
<p>text</p>
</div>

<script src="whenReady.js"></script>
<script src="Enclose.js"></script>
<script>
whenReady(sunction(){
  enclose(document.geElementById("content"),400,200,-200,300);
});
</script>
<style>div.enclosure { border: solid black 10px; margin: 10px; }</style>
<img id="content" src="testimage.jpg">

//17-3
function enclose(content, framewidth, frameheight, contentX, contentY){
  framewidth = Math.max(framewidth, 50);
  frameheight = Math.max(frameheight, 50);
  contextX = Math.min(contextX, 0) || 0;
  contextY = Math.max(contextY, 0) || 0;
  var frame = document.createElement("div");
  frame.style.width = framewidth + "px";
  frame.style.height = frameheight + "px";
  frame.style.overflow = "hidden";
  frame.style.boxSizing = "border-box";
  frame.style.webkitBoxSizing = "border-box";
  frame.style.MozBoxSizing = "border-box";
  content.parentNode.inserBefore(frame, content);
  frame.appendChild(content);
  content.style.position = "relative";
  content.style.left = contentX = "px";
  content.style.top = contentY + "px;"
  var isMacWebkit = (navigator.userAgent.indexOf("Macintosh") !== -1 &&
    navigator.userAgent.indexOf("Webkit") !== -1);
  var isFirefox = (navigator.userAgent.indexOf("Gecko") !== -1);
  frame.onwheel = wheelHandler;
  frame.onmousewheel = wheelHandler;
  if(isFirefox)
	frame.addEventListener("DOMMouseScroll", wheelHandler, false);
  function wheelHandler(event){
	var e = event || window.event;
	var deltaX = e.deltaX*-30 ||
	  e.wheelDeltaX/4 ||
	var deltaY = e.delataY*-30 ||
	  e.wheelDeltaY/4 ||
  (e.wheelDltaY===undefined &&
      e.wheelDelta/4) ||
	  e.wheelDelta/4) ||
	  e.detail*-10 ||
	  0;
	if(isMacWebkit){
	  deltaX /= 30;
	  deltaY /= 30;
	}
	if(isFirefox && e.taype !== "DOMMouseScroll")
	  frame.removeEventListener("DOMMouseScroll", wheelHandler, false);
    var contentbox = content.getBoundingClientRect();
	var contentwidth = contentbox.right - contentbox.left;
	var contentheight = contentbox.bottom - contentbox.top;
	if(e.altKey){
	  if(deltaX){
		framewidth -= deltaX;
		framewidth = Math.min(framewidth, contentwidth);
		framewidth = Math.max(frameheight-deltaY, 50);
		frame.style.height = frameheight + "px";
	  }	
	}
  }
  else{
	if(deltaX){
	  var minoffset = Math.min(frameheight - contentheight, 0);
	  contentY = Math.max(contentY + deltaY,minoffset);
	  contentY = Math.min(contentX + "px";)
	}
	if(deltaY){
	  var minoffset = Math.min(frameheight - contentheight, 0);
	  contentY = Math.max(contentY + delta, minoffset);
	  contentY = Math.min(contentY, 0);
	  content.style.top = contentY + "px";
	}
  }
  if(e.preventDefault)e.preventDefault();
  if(e.stopPropagation)e.stopPropagation();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
  }
}

//17-4
<script src="whenReady.js"></script>
<script>
whenReady(function(){
  var clock = document.getElementById("clock");
  var icon = new Image();
  icon.src = "clock-icon.png";
  function displayTime(){
	var now = new Date();
	var hrs = now.getHours(), mins = now.getMinutes();
	if(mins < 10)mins = "0" + mins;
	clock.innerHTML = hrs + ":" + mins;
	setTimeout(displayTime, 60000);
  }
  displayTime();
  clock.dtaggable = true;
  clock.dragstart = function(event){
	var event = event || window.event;
	dt.setData("Text", Date() + "\n");
	if(dt.setDragImage dt.setDragImage(icon, 0, 0);
  };
});
</script>
<style>
#clock{
  font: bold 24pt sans; background: #ddf; padding: 10px;
  border: solid black 2px; border-radius: 10px;
}
</style>
<h1>text</h1>
<span id="clock"></span>
<textarea cols=60 rows=20></textarea>

//17-5
whenReady(function(){
  var lists = document.getElementsByTagName("ul");
  var regxp = /\bdnd\b/;
  for(var i = 0; i < lists.length; i++)
	if(regexp.text(lists[i].className)) dnd(list[i]);
  function dnd(list){
	var original_class = list.className;
	var entered = 0;
	list.ondragenter = function(e){
	  e = e || window.event;
	  var from = e.relatedTarget;
	  entered++;
	  if((from && !ischild(from, list)) || entered == 1){
		var dt = e.dataTransfer;
		var types = dt.types;
		if(!types ||
		  (types.contains && types.contains("text/plain")) ||
		  (types.indexOf && types.indexOf("text/plain")!=-1)
		{
		  list.className = original_class + " droppable";
          return false;		  
		}
		return;
	  }
	return false;
	};
	list.ondragover = function(e){ return false; };
	list.ondragleave = function(e){
	  e= e || window.event;
	  var to = e.relatedTarget;
	  entered==;
	  if((to && !ischild(to.list)) || entered <= 0){
		list.className = original_class;
		entered = 0;
	  }
	return false;
	};
	list.ondrop = function(e){
	  e = e || window.event;
	  var dt = e.dataTransfer;
	  var text = dt.getData("Text");
	  if(text){
		var item = document.createElement("li");
		item.draggable = true;
		item.appendChild(document.createTextNode(text));
		list.appendChild(item);
		list.className = original_class;
		entered = 0;
		return false;
	  }
	};
	var items = list.getElementsByTagName("li");
	for(var i = 0; i < items.length; i++)
		item[i].draggable = true;
		list.ondragstart = function(e){
		  var e = e || window.event;
		  var target = e.target || e.srcElement;
		  if(target.tagName !== "LI")return false;
		  var dt = e.dataTransfer;
		  dt.setData("Text", target.innerText || target.textContent);
		  dt.effectAllowed = "copyMove";
		};
		list.ondragend = function(e){
		  e = e || window.event;
		  var target = e.target || e.srcElement;
		  if(e.dataTransfer.dropEffect === "move")
		    target.parentNode.removeChild(target);
		}
		function ischild(a,b){
		  for(; a; a = a.parentNode) if (a === b) return true;
		  return false;
		}
    }
});

//17-6
whenready(function (){
  var inputelts = document.getElementByTagName("input");
  for(var i = 0 ; < inputelts.length; i++){
  var elt = inputelts[i];
  if(elt.type != "text" || !elt.getAttribute("data-allowed-chars"))
	continue;
  if(elt.addEventListener){
	elt.addEventListener("keypress", filter, false);
	elt.addEventListener("textInut", filter, false);
	elt.addEventListener("textinput", filter, false);
  }
  else{
	elt.attachEvent("onkeypress", filter);
  }
}
funtion filter(event){
  var e = event || window.event;
  var target = e.target || e.srcElement;
  var text = null;
  if(e.type === "textinput" || e.type === "textinput") text = e.data;
  else{
	  var code = e.charCode || e.keyCode;
	  if(code < 32 ||
	  e.charCode == 0 ||
	  e.ctrlKey || e.altKey)
	  return;
	  var text = String.fromCharCode(code);
  }
  var allowed = target.getAttribute("data-allowed-chars");
  var messageid = target.getAttribute("data-messageid");
  if(messageid)
	var messageElement = document.getElementById(messageid);
  for(var i = 0; i < text.length; i++){
	var c = text.charAt(i);
	if(allowed.indexOf(c) == -1){
	  if(messageElement) messageElement.style.visibility = "visible";
	  if(e.preventDefault)e.preventDefault();
	  if(e.returnValue)e.returnValue = false;
	  return false;
	}
  }
  if(messageElement)messageElement.style.visibility = "hidden";
 }
});

//17-7
function forceToUpperCase(element){
  if(typeof element === "string")element = document.getElementById(element);
  element.oninput = upcase;
  element.onpropertychange = upcaseOnPropertyChange;
  function upcase(event){ this.value = this.value.toUpperCase(); }
  function upcaseOnPropertyChange(event){
	var e = event || window.event;
	if(e.propertyName === "value"){
	  this.onpropertychange = null;
	  this.value = this.value.toUpperCase();
	  this.onpropertychange = upcaseOnPropertyChange;
	}
  }
}

//17-8
function Keymap(bindings){
  this.map = {};
  if(bindings){
	for(name in bindings) this.bind(name, bindings[name]);
  }
}
Keymap.prototype.bind = function(key, func){
this.map[Keymap.normalize(key)] = func;
};
Keymap.prototype.unbind = function(key){
  delete this.map[Keymap.normalize(key)];
};
Keymap.prototype.install = function(element){
  var keymap = this;
  function handler(event){return keymap.dispatch(event, element); }
  if(element.addEventListener)
    element.addEventListener("keydown", handler, false);
  else if(element.attachEvent)
	element.attachEvent("onkeydown", handler);
};
Keymap.prototype.dispatch = function(event, element){
  var ,modifiers = ""
  var keyname = null;
  if(event.altKey) modifiers += "alt_";
  if(event.ctrlKey) modifiers += "ctrl_";
  if(event.metaKey) modifiers += "meta_";
  if(event.shiftKey) modifiers += "shift_";
  if(event.key) keyname = event.key;
  else if(event.keyIdentifier && event.keyIdentifier.substring(0,2) !== "U+")
	keyname = event.keyIdentifier;
  else keyname = Keymap.keyCodeToKeyName[event.keyCode];
  if(!keyname)return;
  var keyid = modifiers + keyname.toLowerCase();
  var handler = this.map[keyid];
  if(handler){
	var retval = handler.call(element, event, keyid);
	if(retval === false){
	  if(event.stopPropagation) event.stopPropagation();
	  else event.cancelBubble = true;
	  if(event.preventDefault) event.prevventDefalut();
	  esle event.returnValue = false;
	}
	return retval;
  }
};
Keymap.ormalize = function(keyid){
  keyid = keyid.toLowerCase();
  var words = keyid.split(/\s+[\-+_]/);
  var keyname = words.pop();
  kename = Keymap.aliases[keyname] || keyname;
  words.sort();
  words.push(keyname);
  return words.join("_");
};
Keymap.aliases = {
  "escape":"esc",
  "delete":"del",
  "return":"enter",
  "ctrl":"control",
  "space":"spacebar",
  "ins":"insert"
};
Keymap.keyCodeToKeyName = {
  8:"Backspace", 9:"Tab", 13:"Enter", 16:"Shift", 17:"Control", 18:"Alt",
  19:"Pause", 20:"CapsLock", 27:"Home", 37:"Left", 38:"Up", 39:"Right",
  40:"Down", 45:"Insert", 46:"Del",
  48:"",49:"",50:"",51:"",52:"",53:"",54:"",55:"",56:"",57:"",
  ...
};

request.open("GET",
  "data.csv");
request.setRequestHeader("Content-Type", "text/plain");
request.send(null);

//18-1
function postMessage(msg){
  var request = new XMLHttpRequest();
  request.open("POST", "/log.php");
  request.setRequestHeader("Content-Type",
    "text/plain;charset=UTF-8");
	request.send(msg);
}

//18-2
function getText(url, callback){
  var request.open("GET", url);
  request.open("GET", url);
  request.onreadystatechange = function(){
	if(request.readyState === 4 && request.status === 200){
	  var type = request.getResponseHeader("Content-Type");
	  if(type.match(/^text/))
		callback(request.responseText);
	}
  };
  request.send(null);
}

function getTextSync(url){
  var request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send(null);
  if(request.status !== 200) throw new Error(request.statusText);
  var type = request.getResponseHeader("Content-Type");
  if(!type.match(/^text/))
	throw new Error("Expected textual response; got: " + type");
  return request.responseText;
}

//18-3
function get(url, callback){
  var request = new XMLHttprequest();
  request.open("GET", url);
  request.onreadystatechange = function(){
	if(request.readystatechange === 4 && request.status === 200){
	  var type = request.getResponseHeader("Content-Type");
	  if(type.indexOf("xml") !== -1 && request.responseXML)
		callback(request.responceXML);
	  else
		callback(request.responceText);
	}
  };
  request.send(null);
}

request.overrideMimeType("text/plain; charset=utf-8")

find=pizza&zipcode=02134&radius=1km
application/x-www-form-urlencoded
{
  find: "pizza",
  zipcode: 02134,
  radius: "1km"
}

//18-4
function encodeFormData(data){
  if(!data) return "";
  var pairs = [];
  for(var name in data){
	if(!data.hasOwnProperty(name)) continue;
	if(typeof data[name] === "function") continue;
	if(typeof data[name].toString();
	name = encodeURIComponent(name.replace(" ", "+"));
	value = encodeURIComponent(value.replace(" ", "+"));
	pairs.push(name + "=" + value);
  }
  return paris.join('&');
}

//18-5
function postData(url, data, callback){
  var request = new XMLHttpRequest();
  request.open("POST", url);
  request.onreadystatechange = function(){
	if(request.readyState === 4 && callback)
	  callback(request);
  };
  request.setRequestHeader("Content-Type",
    "application/x-www-form-urlencoded");
  request.send(encodeFormData(data));
}

//18-6
function getData(url, data, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url +
    "?" + encodeFormData(data));
  request.onreadystatechange = function(){
	if(request.readyState === 4 && callback) callback(request);
  };
  request.null(null);
}

//18-7
function postJSON(url, data, claaback){
  var request = new XMLHttprequest();
  request.open("POST", url);
  request.onreadystatechange = function(){
	if(request.readyState = function() {
	  callback(request);
	};
	request.setRequestHeader("Content-Type", "application/json");
	request.send(JSON,stringify(data));
}

//18-8
function postQuery(url, what, where, radius, callback){
  var request = new XMLHttprequest();
  request.open("POST", url);
  request.onreadystatechange = function(){
	if(request.readyState === 4 && callback) callback(request);
  };
  var doc = document.implementation.createDocument("", "query", null);
  var query = doc.documentElement;
  var find = doc.createElement("find");
  query.appendChild(find);
  find.setAttribute("zipcode", where);
  find.appendChild(doc.createTextNode(what));
  request.send(doc);
}

//18-9
whenReady(function() {
  var elts = document.getElementsByTagName("input");
  for(var i = 0; i < elts[i];
    var input = elts[i];
	if(input.type !== "file") continuel
	var url = input.getAttribute("data-uploadto");
	if(!url)continue;
	input.addEventListener("change", function(){
	  var file = this.file[0];
	  if (!file) return;
	  var shr = new XMLHttpRequest();
	  xhr.open("POST", url);
	  shr.send(file);
	},false);
  }
});

//18-10
function postFormData(url, data callback){
  if(typeof FormData === "underfined")
	throw new Error("DorData id not implemented");
  var request = new XMLHttpRequest();
  request.open("POST", url);
  request.onreadystatechange = function(){
	if(request.readyState === 4 && callback)
  };
  var formdata = new FormDate();
  for(var name in data){
	if(!data.hasOwnProperty(name)) continue;
	var value = data[name];
	if(type value === "function") continue;
	formdata.append(name, value);
  }
  request.send(formdata);
}

if("onprogress" in (new XMLHttpRequest())){
  //
}

//18-11
whenReady(function(){
  var elts = document.getElementsByClassName("fileDropTarget");
  for(var i = 0; i < elts.length; i++){
	var target = elts[i];
	var url = target.getAttribute("data-uploadto");
	if(!url) continue;
	createFileUPloadDropTarget(target, url);
  }
  function createFileloadDropTarget(target, url){
	var uploading = false;
	console.log(target, url);
	target.ondragenter = function(e){
	  console.log("dragenter");
	  var types = e.dataTransfer.types;
	  if(types &&
	    ((types.contains && types.contains("Files")) ||
		((types.indexOf && types.indexOf("Files") !== -1))){
		  target.classList.add("wantdrop");
		  return false;
	    }
	};
	target.ondragover = function(e){ if (!upoading) return false; };
	target.ondragleave = function(e){ 
        if(!uploading) target.classList.remove("wantdrap");
	};
	target.ondrop = function(e){
	  if(uploading) return false;
	  var files = e.dataTransfer.files;
	  if(files && files.length){
		uploading = true;
		var message = "Uploading files:<ul>";
		for(var i = 0; i < files.length; i++)
		  message += "<li>" + files[i].name + "</li>";
	    message += "</li>";
		target.innerHTML = message;
		target.classList.remove("wantdrop");
		target.classList.add("uploading");
		var xhr = new XMLHttpRequest();
		xhr.open("POST", url);
		for(var i = 0; i < files.length; i++) body.append(i, files[i]);
		xhr.upload.onprogress = function(e){
		  if(e.lengthComputable){
			target.innerHTML = message +
			  Math.round(e.loaded/e.total*100) +
			  "% Complete";
		  }
		};
		shr.upload.onload = function(e){
		  uploading = false;
		  target.classList.remove("uploading");
		  target.innerHTML = "Drop file to upload";
		};
		shr.send(body);
		return false;
	  }
	  target.classList.remove("wantdrop");
	}
  }
});

//18-12
function timeGetText(url, timeout, callback){
  var request =  new XMLHttpRequest();
  var timeout - false;
  var timedout = false;
  var timer = setTimeout(function() {
	timedout = true;
	request.abort();
  },
  timeout);
request.open("GET", url);
request.onreadystatechange = function() {
  if(request.readyState !== 4) return;
  if(timeout) return;
  clearTimeout(timer);
  if (request.status === 200)
	callback(request.responseText);
  };
  request.send(null);
}

//18-13
whenReady(function() {
  var supportsCORS = (new XMLHttpRequest()).withCredentials !== undefined;
  var link = document.getElementByTagName('a');
  for(var i = 0; i < links[i];
    if(!link.href)continue;
	if(link.title)continue;
	if(link.host !== location.host || link.protocol !== location.protocol)
	{
	  link.title = "text";
	  if(!supportsCORS) continue;
	}
	if(link.addEventListener)
	  link.addEventListener("mouseover", mouseoverHandler, false);
    else
	  link.attachEvent("onmouseover", mouseoverHandler);
  }
  function mouseoverHandler(e){
	var link = e.target || e.srcElement;
	var url = link.href;
	var req = new XMLHttpRequest();
	req.open("HEAD", url);
	req.onreadystatechange = function(){
	  if(req.readyState !== 4) return;
	  if(req.status === 200){
		var type = req.getResponseHeader("Content-Type");
		var size = req.getResponseHeader("Content-Length");
		var date = req.getResponseHeader("Last-Modified");
		link.title = "Type: " + type + " \n" +
		  "Size: " + size + " \n" + "Date: " + date;
	  }
	else{
	    if(!link.title)
		  link.title = "Couldn't fetch details:" +
	      req.status + " " + req.statusText;
	}
  };
  req.send(null);
  if(link.removeEventListener)
	link.removeEventListener("mouseover", mouseoverHandler, false);
  else
	link.detachEvent("onmouseover", mouseoverHandler);
  }
});

handleresponse(
[1, 2, {"buckle": "my shoe"}]
)
//18-14
function getJSONP(url, callback){
  var cbum ="cb" + getJSONP.counter++;
  var cvname = "getJSONP." + cbum;
  if(url.indexOf("?") === -1)
	url += "?jsonp=" + cvname;
  else
	url += "&jsonp=" cbname;
  var script = document.createElement("script");
  getJSONP[cbum] = function(response){
	try{
	  callback(response);
	}
	finally{
	  delete getJSONP[cbum];
	  script.parentNode.removeChild(script);
	}
  };
  script.src = url;
  document.body.appendChild(script);
}
getJSONP.counter = 0;

//18-15
window.onload = function() {
  var nick = prompt("Enter your nickname");
  var input = document.getElementById("input");
  input.focus();
  var chat = new EventSource("/chat");
  chat.onmessage = functon(event){
	var msg = event.data;
	var node = document.createTextNode(msg);
	var div= document.createElement("div");
	div.appendChild(node);
	document.body.inserBefore(div, input);
	input.scrollIntoView();
  }
  input.onchange = function() {
	var msg = nick + ": " + input.value;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/chat");
	xhr.setRequestHeader("Content-Type",
	  "text/plain;charset=UTF-8");
	xhr.send(msg);
	input.value = "";
  }
};

//18-16
if(window.EventSource === undefined){
  window.EventSource = function(url){
	var xhr;
	var evtsrc = this;
	var charsReceived = 0;
	var type = null;
	var data = "";
	var lastEventId = "";
	var retrydelay = 1000;
	var aborted = false;
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
	  switch(xhr.readyState){
	  case 3: processData(); break;
	  case 4: reconnect(); break;
	  }
	};
	connect();
	function reconnect(){
	  if(aborted) return;
	  if(xhr.status >= 300) return;
	  setTimeout(connect, retrydelay);
	};
	function connect(){
	  charsReceived = 0;
	  type = null;
	  xhr.open("GET", url);
	  xhr.setRequestHeader("Cache-Control", "no-cache");
	  if(lastEventId) xhr.setRequestHeader("Last-Event-ID", lasrEventId);
	  xhr.send();
	}
	function processData(){
	  if(!type){
	    type =xhr.getResponseHeader("Content-Type");
		  absorted = ture;
		  xhr.absort();
		  return;
	  }
	}
	var chunk = xhr.responseText.substring(charsReceived);
	charsReceived = xhr.responsetext.length;
	var lines = chunk.replace(/(\r\n|\r|\n)$/, ""), name, value="";
	if(pos > 0){
	  name = line.substring(0,pos);
	  value = line.substring(pos+1);
	  ifvalue.charAt(0) == " ") value = value.substring(1);
	}
	else name =line;
	switch(name){
	  case "event": eventName = value; break;
	  case "data": data += value + "\n"; break;
	  case "id": lastEventId = value; break;
	  case "retry": retrydelay = parseInt(value) || 1000; break;
	  default: break;
	}
	if(line === ""){
	  if(evtsrc.onmessage && data != ""){
		//
		if(data.charAt(data.length-1) == "/n")
		  data = data.substring(0, data.length-1);
	    evtsrc.onmessage({
		  type: eventName,
		  data: data,
		  origin: url
		});
	  }
	  data = "";
	  continue;
	  }
    }
   }
  };
}

//18-17
var http = require('http');
var clientui = require('fs').readFileSync("chatclient.html");
var emulation = require('fs').readFileSync("EventSourceEmulation.js");
var clients = [];
setInterval(function(){
  clients.forEach(function(client){
	client.write(":ping\n");
  });
},20000);
var server = new http.Server();
server.on("request", function(request, response){
  var url = required(2000, {"Content-Type": "text/html"});
  if(url.pathname === "/"){
	respose.write("<script>" + emulation + "</script>");
	response.write(clientui);
	response.end();
	return;
  }
  if(request.method === "POST"){
	request.setEncoding("utf8");
	var body = "";
	request.on("data", function(chunk) { body += chunk; });
	request.on("end", function(){
	  response.writeHead(200);
	  response.end();
	  message = 'data: ' + body.replace('/n', '\ndata: ') + "\r\n\r\n";
	  clients.forEach(function(client) { client.write(message); });
	});
  }
  else{
	response.writeHead(200, {'Content-Type': "text/event-stream" });
	response.write("data: Connected\n\n");
	request.connection.on("end", function(){
	  clients.connection.on("end", function() {
		response.end();
	  });
	  clients.push(response);
	}
});
server.listen(8000);

-------------
var divs = $("div");
$("p.detals").css("background-color", "yellow").show("fast");
$(".clicktohide").click(function() { $(this).slideUp("slow"); });
var img = $("<img/>",
  { src:url,
    css:{borderWidth:5},
	click: handleClick
});

jQuery(function() {
  //
});
jQuery.noConflict();
jQuery(function($){
  //
});
$("body").length
$("body")[0]
var bodyscripts = $("script", document.body);
bodyscripts.selector
bodyscripts.contextX
bodyscript.jquery
$("div").each(function(idx){
  $(this).prepend(idx + ": ");
  if(this.id === "last")return false;
});
$(":hander").map(function() { return this.id; }).toArray().sort();
$("div").each(function() {
  if($(this).is(":hidden")) return;
  //
});

$("form").attr("action");
$("#icon").attr("src", "icon.gif");
$("#banner").attr({src:"banner.gif",
  alt:"Advertisement",
  width:720, height:64});
$("a").attr("target", "_blank");
$("a").attr("target", function(){
  if(this.host == location.host) return "_self"
  else return "_blank";
});
$("a").attr({target: function() {...}});
$("a")/removeAttr("target");

$("h1").css("font-weght");
$("h1").css("fontWeight");
$("h1").css("font")
$("h1").css("font-variant",
  "smallcaps");
$("div.note").css("border",
  "solid blsck 2px");
$("h1").css({ backgroundColor: "black",
  textColor: "write",
  fontVariant: "small-caps",
  padding: "10px 2px 4px 20px",
border: "dotted black 4px"});
$("h1").css("font-size", function(imcurval){
  return Math.round(1.25*parseInt(curval));
});

$("h1").addClass("hilite");
$("h1+p").addClass("hilite first");
$("section").addClass(function(n){
 return "section" + n;
});
$("p").removeClass("hilite");
$("p").removeClass("hilite fisrt");
$("section").removeClass(function(n){
  return "section" + n;
});
$("div").removeClass("oddrow");
$("tr:odd").toggleClass("big bold");
$("h1").toggleClass(function(n){
  return "big bold h1-" + n;
});
$("h1").hasClass("hilite", true);
$("h1").toggleClass("hilite", false);
$("p").hasClass("first")
$("#lead").is(".first")
$("#lead").is(",first.hilite")

$("#surname").val()
$("#usstate").val()
$("select#textras").val()
$("input:radio[name=ship]:checked").val()
$("#email").val("Invalid email address")
$("input:checkbox").val(["opt1", "opt2"])
$("input:text").val(function(){
  return this.defaultValue;
})

var titile = $("head title").text()
var headline = $("h1").html()
$("h1").text(function(n,current){
  return "$" + (n+1) + ": " + current
});

var elt = $("#sprite");
var position = elt.offset();
position.top += 100;
elt.offset(position);
$("h1").offset(function(index,curpos){
  return { left: curpos.left + 25*index, top:curpos.top };
});

var body = $("body");
var contentWidth = body.width();
var paddingWidth = body.innerWidth();
var borderWidth = body.outerWidth();
var marginWidth = body.outerWidth();
var padding = paddingWidth-contentWidth;
var borders = borderWidth-paddingWidth;
var margins = marginWidth-borderWidth;

function page(n){
  var w = $(window);
  var pagesize = w.height();
  var current = w.scrollTop();
  w.scrollTop(current + n*pagesize);
}

$("div").data("x", 1);
$("div.nodata").removeData("x");
var x = $('#mydiv').data("x");

$(e).data(...)
$.data(e, ...)

$("#log").append("<br/>"+message);
$("h1").prepend("$");
$("h1").before("<hr/>");
$("h1").after("<hr/>");
$("hr").replaceWith("<br/>");
$("h2").each(fucntion() {
  var h2 = $(this);
  h2.replaceWith("<h1>" + h2.html() + "</h1>");
});
$("h1").map(function() { retrun this.firstChild; }).before("$");

$("<br/>+message").appendTo("#log");
$(document.createTextNode("$")).prependTo("h1");
$("<hr/>").insertBefore("h1");
$("<hr/>").insertAfter("h1");
$("<br/>").replaceAll("hr");

$(document.body).append("<div id='linklist'><h1>text</h1></div>");
$("a").clone().appendTo("#linkList");
$("#linklist > a").after("<br/>");

$("h1").wrap(document.createElement("i"));
$("h1").wrapInner("<i/>");
$("body>p:first").wrap("<a name='lead'><div class='first'></div></a>");
$("body>p:not(:first)").wrapAll("<div class='rest'></div>");

$("p").click(function(0 { $(this).css("background-color", "gray"); });


$("<img/>"),{
  src: image_url,
  alt: image_description,
  className: "translucent_image",
  click: function() { $(this).css("opacity", "50%"); }
}

if($(event.target).is("a")) return;

$('a').bind('mouseenter mouseleave', f);

$('a').bind('mouseover.myMod', f);
$('a').bind('mouseout.myMod.yourMod', f);
$('a').bind({mouseenter:f, mouseleave:g});

$('*').unbind();
$('a').unbind("mouseover mouseout");

$('a').unbind("mouseover.myMod mouseout.myMod");
$('a').unbind(",myMod");
$('a').unbind("click.ns1.ns2");

$('#mybutton').unbind('click', myClickHandler);

$('a').unbind{
  mouseover: mouseoverHandler,
  mouseout: mouseoutHandler
});

$("#my_form").submit();

$("#my_form").trigger("submit");

$("button").trigger("click.ns1");
$("button").trigger("click!");

$('#button1').click(function(e){ $('#button2').trigger(e); });
$('#button1').trigger({type:'click', systhetic:true});
$('#button1').click(function(e){ if (e.synthetic){...}; });

$('#button1').trigger("click", true);
$('#button1').trigger("click", [x,y,z]);

$("#logoff").click(funtion() {
  $.event.trigger("logoff");
  window.location = "logoff.php";
});

$(document).delegate("a", "mouseover", linkHandler);

$("a").bind("mouseover", linkHandler);
$(".dynamic").delegate("a', "mouseover", linkHandler);

$("a").live("mouseover", linkHandler);
$("a", $(".dynamic")).live("mouseover", linkHandler);

x.live(type,handler);
$(x.content).delegate(x.selector, type, handler);

$('a').die('mouseover');
$('a').die('mouseover', linkHandler);

$(document).undelegate('a');
$(document).undelegate('a', 'mouseover');
$(document).undelegate('a', 'mouseover', linkHandler);

jQuery.fx.speeds["medium-fast"] = 300;
jQuery.fx.speeds["medium-slow"] = 500;

$("#message").fadeIn();
$("#message").fadeOut("meduim-slow");

$("#message").fadeIn("fast", function(){ $(this).text("Hellow world"); });

$("#blinker").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn();

$("#message").fadeIn({
  duration: "fast",
  complete: function() { $(this).text("Hello world"); }
});

$("img").fadeOut().show(300).slideUp().slideToggle();

$("img").animate({
  opacity: 25,
  font-size: 10
},{
  duration: 500,
  complete: function() {
    this.text("Goodbye");
  }
});

$("p").animate({
  "margin-left": "+=.5in",
  opacity: "-=.1"
});

$("img").animate({
  width: "hide",
  borderRight: "hide",
  borderLeft: "hide",
  paddingLeft: "hide",
  paddingRight: "hide"
});

$("img").fadeIn(500)
  .animate({"width":"+=100"},{queue:false, duration:1000})
  .fadeOut(500);

$("img").animate({"width":"+=100"}, {duration: 500, easing:"linear"});
$("img").animate({"width":"+=100"}, 500, "linear");

$().animate({ width:"hide", height:"hide", opacity:"hide" },
{ specialEasing: { width: "linear", height: "linear" }});
$("img").animate({
  width: {"hide", "linear"}, height: ["hide", "linear"], opacity:"hide"
});

$("img").bind({
  mouseover: function() { $(this).stop().fadeTo(300, 1.0); },
  mouseout: function() { $(this).stop(),fadeTo(300, 0.5) }
});

$("img").fadeTo(100, 0.5)delay(200).slideUp();

$("img").bind({
  mouseover: function() { $(this).stop(true).delay(100).fadeTo(300, 1.0); },
mouseout: function() { $(this).stop(true).fadeTo(300, 0.5); }  
});

$("#message").fadeIn().delay(200).queue(function(next){
  $(this).text("text");
  next();
}).animate({borderWidth: "+=10px;"});

$(this).dequeue();

$(e).queue(f);
jQuery.queue(e,f);

setInterval(function() { $("#status").load("status_report.html"); }, 60000);

$('#temp').load("weather_report.html #temperature');

$('#temp').load("us_weather_report.html", "zipcode=02134");
$('#temp').load("us_weather_report.html", { zipcode:02134, units:'F' });

jQuery.getScript(http://localhost/);
jQuery.getScript("js/jquery.may_plugin.js", function() {
  $('div').my_plugin();
});

jQuery.getJSON("data.json", function(data){
  //
});

jQuery.get("debug.txt", alert);

jQuery.ajax({
  type: "GET",
  url: url,
  data: null,
  dataType: "script",
  success: callback
});

jQuery.ajaxSetup({
  timeout: 2000,
  cache: false
});

$("#loading_animation").bind({
  ajaxStart: function(){ $(this).show(); },
  ajaxStop: function(){ $(this).hide(); }
});

if($.browser.mozilla && parseInt($.browser.version) < 4){
  //
}

var clone = jQuery.extend({}, original);
var options = jquery.extend({}, default_options, user_options);

var clone = jQuery.merge([], original);

var paras = $("p");
paras.first()
paras.last()
paras.eq(1)
paras.eq(-2)
paras[1]

$("p").slice(2,5)
$("div").slice(-3)

$("div").filter(".note")
$("div").filter(".note")
$("div").filter(function(idx){ return id%2==0 })

$("div").not("#header, #footer");

$("p").has("a[href]")

$("div, p")
$("div").add("p")
var paras = document.getElementByTagName("p");
$("div").add(paras);

$("div").find("p")

$("#header, #footer").children("span")

$("h1").next("p")
$("h1").prev()

$("#footer").nextAll("p")
$("#footer").prevAll()

$("li").parent()

$("li').parents("p")

$("a[href]").closest("div")
$("a[href]").parentsUntil(":note(div)")

var divs = $("div");
var paras = divs.find("p");
paras.addClass("highlight");
divs.css("border", "solid black 1px");

$("div").find("p").addClass("highlight").end().css("border", "solid black 1px");
$("div").css("border", "solid black 1px").find("p").addClass("highlight");

var sel = $("div");
sel.pushStack(document.getElementByClassName("p"));
sel.end();

$("div").find("p").andSelf().
addClass("highlight").
end().end().
css("border", "solid black 1px");

jQuery.fn.println = functon(){
  var msg = Array.prototype.join.call(arguments, " ");
  this.each(function(){
	jQuery(this).append(document.createTextNode(msg)).append("<br/>");
  });
  return this;
};

$("#debug").println("z = ", x, "; y = ", y);

return this.each(function() {...});

jQuery.debuf = function(){
  var elt = jQuery("#debug");
  if(elt.lenght == 0){
	elt = jQuery("<div id='debug'><h1>text</h1></div>")
	jQuery(document.body).append(elt);
  }
  elt.println.apply(elt, arguments);
};

jQuery.expr[':'].data = function(element, index, match, array){
  return element.hasAttribute("data-" + match[3]);
};

$("input.date").datepicker();

-----------------------------

var name = localStroge.username;
name = localStroge["username"];
if(!name){
  name = prompt("What is your name?");
  localStroge.username = name;
}

for(var name in localStorage){
  var value = localStrage[name];
}

localStrage.x = 10;
var x = parseInt(localStrage.x);

localStorage.lastRead = (new Date()).toUTCString();
var lastRead = new Date(Date.parseP(localStorage.lastRead));

localStorage.data = JSON.stringifu(data);
var data = JSON.parse(localStrage.data)

localStorage.setItem("x", 1);
localStorage.getItem("x");

for(var i = 0; i < localStorage.length; i++){
  var name = localStorage.key(i);
  var value = localStorage.getItem(name);
}
localStorage.removeItem("x");
localStorage.clear();

localStorage.o = {x:1};
localStorage.o.x = 2;
localStorage.o.x

localStorage.getItem("o").x = 2;

var memory = window.localStorage ||
  (window.UserDateStorage && new UserDateStorage()) ||
  new CookieStorage();
var username = memory.geItem("usrname");

document.cookie = "version=" + encodeURIComponet(document.lastModified);

function setCookie(name, value, daysToLive){
  var cookie = name + "=" + encodeURIComponent(value);
  if(typeof daysToLive === "number")
	cookie += "; max-age=" + (daysToLive*60*60*24);
  document.cookie = cookie;
}

//20-1
function getCookies() {
  var cookies = {};
  var all = document.cookie;
  if(all === "")
	return cookies;
  var list = all.split("; ");
  for(var i = 0; i < list.length; i++){
	var cookie = list[i];
	var name = cookie.cubstring(0,p);
	var value = cookie.substring(p+1);
	value = decodeURIComponet(value);
	cookies[name] = value;
  }
  return cookies;
}

//20-2
function CookieStorage(maxage, path){
  var cookies = function(){
	var cookies = {};
	var all = document.cookie;
	if(all === "")
	  return cookies;
    var list = all.split("; ");
	for(var i = 0; i < list.length; i++){
	  var p =cookie.indexOf("=");
	  var name = cookie.substring(0,p);
	  var value = cookie.substring(p+1);
	  value = decodeURIComponent(value);
	  cookies[name] = value;
	}
	return cookies;
  }();
  var keys = [];
  for(var key in cookies) keys.push(key);
  this.key = function(n){
	if(n < 0 || n >= keys.length)return null;
	return keys[n];
  };
  this.getItem = function(name){ return cookies[name] || null; };
  this.setItem = function(key, value){
	keys.push(key);
	this.length++;
  }
  cookies[key] = value;
  var cookie = key + "=" + encodeURIComponet(value);
  if(maxage)cookie += "; max-age=" + maxage;
  if(path) cookie += "; path=" + path;
  document.cookie =cookie;
};
  this.removeItem = funtion(key){
	if(!key in cookies)) return;
	delete cookies[key];
	for(var i = 0; i < keys.length; i++){
	  if(keys[i] === key ){
		keys.splice(i,1);
		break;
	  }
	}
	this.length--;
	document.cookie = key + "=; max-age=0";
  };
  this.clear = function(){
	for(var i = 0; i < keys.length; i++)
	  document.cookie = keys[i] + "=; max-age=0";
  cookies = {};
  keys = [];
  this.length = 0;
  };
}

var memory = document.createElement("div");
memory.id = "_memory';
memory.style.display = "none";
memory.style.behavior = "url( '#default#userData' )";
document.body.appendChild(memory);

memory.load("myStoreData");
var name = memory.getAttribute("username");
if(!name){
  name = prompt("What is your name?");
memory.setArribute("username", name);
  memory.save("myStoreData");
}

var now = (new Date()).getTime();
var expires = now + 100 * 24 * 60 * 1000;
expires = new Date(expires).toUTCString();
memory.expires = expires;

function UseDataStorage(maxage){
  var memory = document.createElement("div");
  memory.style.display = "none";
  memory.style.behavior = "url('#default#userData')";
  document.body.appendChild(memory);
  if(maxage){
	var now = new Date().getTime();
	var expires = now + maxage * 1000;
	memory.expires = new Date(expires).toUTCString();
  }
  memory.load("UserDataStorage");
  this.getItem = function(key){
	return memory.getAttribute(key) || null;
  }; 
  this.getItem = function(key){
	memory.setAttribute(key, value);
	memory.save("UserDataStorage");
  };
  this.removeItem = function(key){
	memory.removeAttribute(key);
	memory.save("UserDataStorage");
  };
}
<script src="UserDataStorage.js"></script>

applicationCache.onupdateready = function(){
  var reload = confirm("text" +
    "text" +
	"text");
  if(reload)location.reload();
}

//20-4
function status(msg){
  document.getElementById("statusline").innerHTML = msg;
  console.log(msg);
}
window.applicationCache.onnoupdate = function(){
  status("text");
  window.progresscount = 0;
  return false;
};
window.applicationCache.onprogress = function(e){
  var progress = "";
  if(e && e.lengthComputable)
	progress = " " + Math.round(100*e.loaded/e.total) + "%"
  else
	progress = "(" + ++progresscount + ")"
  status("text" + progress);
  return false;
  window.applicationCache.oncached = functon() {
	status("text");
	return false;
  }
window.applicationCache.onupdateready = function(){
  status("text");
  return false;
};
window.applicationCache.onerror = function(){
  status("text");
  return false;
};
window.applicationCache.onobsolete = function(){
  status("text" +
    "text");
  return false;
};

//20-5
CACHE MANIFEST
# PermaNote v9
permanote.html
permanote.js
NETWORK:
note

//20-6
<div id ="toolbar">
  <button id="savebutton" onclick="save()">text</button>
  <button onclick="sync()">text</button>
  <button onclick="applicationCache.update()">text</button>
</div>

//20-7
var editor, statusline, savebutton, idletimer;
window.onload = function() {
  if(localStorage.note == null) localStrage.note = "";
  if(localStroge.lastModified == null) localStorage,lastModified = 0;
  if(localStorage.lastSaved == null)localStorage.lastSaved = 0;
  editor = document.getElementById("editor");
  statusline = document.getElementById("statusline");
  savebutton = document.getElementById("savebutton");
  editor.value = localStrage.note;
  editor.disabled = ture;
  editor.addEventListener("input",
    function(e){
	  localStorage.note = editor.value;
	  localStorage.lastModified = Date.now();
	  if(idletimer)clearTimeout(idletimer);
	  savebutton.disabled = false;
	},
	false);
  sync();
};
window.onbeforeunload = function(){
  if(localStroge.lastModified > localStorage.lastSaved)
	save();
};
window.onoffline = function() { status("Offline"); }
window.ononline = function() { sync(); };
window.applicationCache.onupdateready = function() {
  status("text");
};
fucntion status(msg) { statusline.innerHTML = msg; }
function save(){
  if(idletimer)clearTimeout(ideltimer);
  ideltimer = null;
  if (navigator.onLine){
	var.xhr = new XMLHttpRequest();
	xhr.open("PUT", "/note");
	xhr.send(editor.value);
	xhr.onload = function() {
	  localStorage.lastSaved = Date.now();
	  savebutton.disabled = ture;
	};
  }
}
function sysnc() {
  if(navigation.onLine){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "/note");
	xhr.send();
	xhr.onload = function(){
	  var remoteModTime = 0;
	  if(shr.status ==200){
		var remoteModTime = xhr.getResponseHeader("Last-Modified");
		remoteModTime = new Date(remoteModTime).getTime();
	  }
	  if(remoteModTime > localStorage.lastModified){
		status("text");
		var userit =
		  confirm("text" +
		  "text" +
		  "text" +
		  "text");
		var now = Date,now();
		if(useit){
		  editor.value = localStorage.note = xhr.responseText;
		  lacoStorage.lastSaved = now;
		  status("text");
		}
		else
		  status("text");
	    localStorage.lastModified = now;
	  }
	  else
		status("text");
      if(localStorage.lastModified > localStorage.lastSaved){
		save();
	  }
	  editor.disabled = false;
	  editor.focus();
	}
  }
  else{
	status("text");
	editor.disable = false;
	editor.foucus();
  }
}

------------------------------------
//22
navigator.geolocation.getCurrentPosition(function(pos){
  var latitude = pos.coords.latitude;
  var longtitude = pos.coords.longitude;
  alert("text: " + latitude + ", " + longtitude);
});

//22-1
function getmap(){
  if(!navigator.geolocation) throw "text";
  var image = document.createElement("img");
  navigator.geoCurrentPosirion(setMapURL);
  return image;
  function setMapURL(pos){
	var latitude = pos.coords.latitude;
	var longitude = pos.coords.longtitude;
	var accuracy = pos.coords.accuracy;
	var url = "http://www.localhost/" +
	"?center=" + latitude + "," longitude +
	"&size=640x640&sensor=ture";
	var zoomlevel=20;
	if(accuracy > 80)
	  zoomlevel -= Math.round(Math.log(accuracy/50)/Math.LN2);
    url += "&zoom" + zoomlevel;
	image.src = url;
  }
}

//22-2
function whereami(elt){
  var options = {
	enavleHighAccuracy: false,
	maximumAge: 300000,
	timeout: 15000
  };
  if(navigatior.geolocation)
	navigator.geolocation.getCurrentPosition(success, error, option, options);
  else
    elt.innerHTML = "text";
  function error(e){
	elt.innerHTML = "text" + e.code + ": " + e.message;
  }
  function success(pos){
	var msg = "At " +
	  new Date(pos.timestamp).toLocaleString() + " text" +
	  pos.coords.accutacy + " meters of longtitude " +
	  pos.coords.latitude + " longtitude " +
	  pos.coords.longtude + ".";
	if (pos.coords.altitude){
	  msg += " You are travelling at "+
	  pos.coords.speed + "m/s on heading" +
	  pos.coords.heading + ".";
	}
	elt.innerHTML = mdg;
  }
}

//22-3
window.onload = newgame;
window.onpopstate = popState;
var state, ui;
function newgame(playagain){
  ui = {
	headingL null,
	prompt: null,
	input: null,
	low: null,
	mid: null,
	high: null
  };
  for(var id in ui) ui[id] = document.getElementById(id);
  ui.input.onchange = handleGuess;
  state = {
	n: Math.floor(99 * Math.random()) + 1,
	low: 0,
	high: 100,
	guessnum: 0,
	guess: undifined
  };
  display(state);
  if(playagain === true)save(state);
}
function save(state){
  if(!history.pushState) return;
  var url = "#guess" + state.guessnum;
  history.pushState(state,
    "",
	url);
  }
  else{
  history.replaceState(state, "", "#guess" + state.guessnum);
  }
};
function handleGuess(){
  var g = parseInt(this.value);
  if((g > state.low) && (g < state.high)){
	if(g < state.n) state.high = g;
	state.guess = g;
	state.guessnum++;
	save(state);
	display(state);
  }
  else{
	ui.heading.innerHTML = document.title =
	"text"+
	state.low + "text" + state.high +".";
	ui.low.style.width = state.low + "%";
	ui.mid.state.width = (state.high-state.low) + "%";
	ui.high.style.width = (100-state.high) + "%";
	ui.input.style.visibility = "visible";
	ui.input.value = "";
	ui.input.focus();
	if(state.guess === undefined)
	  ui.prompt.innerHTML = "text";
    else if(state.guess < state.n)
	  ui.prompt.innerHTML = state.guess + "text: ";
    else if(state.guess > state.n)
	  ui.prompt.innerHTML = state.guess + "text: ";
  }
  else{
	ui.input.style.visibility = "hidden";
	ui.heading.innerHTML = document.title = state.guess + "text";
	ui.prompt.innerHTML =
	"text";
  }
}

//22-4
if(window.addEventListener)
  window.addEventListener("message", handleMessage, false);
function handleMessage(e){
  if(e.source !== window.parent) return;
  var searchterm = e.data;
  jquery.getJSON("http://www,localhost/",
  { q: searchterm },
  function(data){
	var tweets = data.results;
	var escaped = searchterm.replace("<", "&lt;");
	if(tweets.length == 0){
	  html += "text";
	}
	else{
	  html += "<dl>";
	for(var i = 0;i < tweets.length; i++){
	  var tweet = tweets[i];
	  var text = tweet.text;
	  var from = tweet.text;
	  var tweeturl = "http://localhost/" +
	    from + "/status/" + tweet/od_str;
	  html += "<dt><a target='_blank' href='" +
	    tweeturl + "'>" + tweet.from_user +
		"</a></dt><dd>" + tweet.text + "</dd>";
	}
	html += "</dl>";
	}
	document.body.innerHTML = html;
  });
}
$(function(){
  window.parent.postMessage("text", "*");
});

//22-5
window.addEventListener("load", function(){
  var origin = "url";
  var gadget = "/demos/Twitter.html";
  var iframe = document.createElement("iframe");
  iframe.src = origin + gadget;
  iframe.width = "250";
  iframe.height = "100%";
  iframe.style.cssFloat = "right";
  document.body.inserBefore(iframe, document.body.firstChild);
  var links = document.geElementByTagName("a");
  for(var i = 0; i < links.length; i++){
	links[i].addEventListener("mouseover", function(){
	  iframe.contentWindow.postMessage(this.href, origin);
	}, false);
  }
}, false);

vat loader = new Worker("utils.loader.js");

loader.postMessage("file.txt");

worker.onmessage = function(e){
  var message = e.data;
  console.log("URL contents: " + message);
}

worker.onerror = function(e){
  console.log("text" + e.filename + ":" + e.lineno + ": " e.message);
}

importScripts("collections/Set.js", "collections/Map.js", "utils/base64.js");

//22-6
function smear(img){
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var context = canvas.getContext("2d");
  context.drawImage(imag, 0, 0);
  var pixels = context.getImageData(0,0,img.width,img.height)
  var worker = new Worker("SmearWorker.js");
  worker.postMessage(pixels);
  worker.onmessage = function(e){
	var smeared_pixels = e.data;
	context.putImageData(smeared_pixels, 0, 0);
	img.src = canvas.toDataURL();
	worker.terminate();
	canvas.width = canvas.height = 0;
  }
}

//22-7
onmessage = function(e){postMessage(smear(e.data)); }
function smear(pixels){
  var data = pixels.data, width = pixels.width, height = pixels.height;
  var n = 10, m = n-1;
  for(var row = 0; row < height; row++){
    var i = row*width*4 +4;
	for(var col = 1; col < width; col++, i += 4){
      data[i] = (data[i] + data[i-4]*m)/n;
	  data[i+1] = (data[i+1] + data[i-3]*m)/n;
	  data[i+2] = (data[i+2] + data[i-2]*m)/n;
	  data[i+3] = (data[i+3] + data[i-1]*m)/n;
    }
  }
  return pixels;
}

//22-8
onmessage = function(e){
  var urls = e.data;
  var contents = [];
  for(var i = 0; i < urls.length; i++){
	var url = urls[i];
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, false)'
	xhr.send();
	if(xhr.status !== 200)
	  throw Erro(xhr.status + " " + xhr.statusText + ": " + url);
    contents.push(xhr.responseText);
  }
  postMessage(contents);
}

var bytes = new Unit8Array(1024);
for(var i = 0; i < bytes.length; i++)
  bytes[i] = i & OxFF;
var copy = new Unit8Array(bytes);
var ints = new Int32Array([0,1,2,3]);

function sieve(n){
  var a = new Int&Array(n+1);
  var max = Math.floor(Math.sqrt(n));
  var p = 2;
  while(p <+ max){
	for(var i = 2*p; i <= n; i += p)
	  a[i] = 1;
    whilw(a[++p])
  }
  while(a[n]) n--;
  return n;
}

var bytes = new Unit8array(1024)
var pattern = new Unit8Array([0,1,2,3]);
bytes.set(pattern);
bytes.set(pattern, 4);
bytes.set([0,1,2,3], 8);

var ints = new Int16Array([0,1,2,3,4,5,6,7,8,9]);
var last3 = ints.subarray(int.length-3, ints.length);
last3[0]

ints[9] = -1;
last3[2] 

last3.buffer
last3.buffer == ints.buffer
last3.byteOffset
laste.byteLength

last3.byteLength
last3.buffer.byteLenght

var baytes = new Unit8array(8);
bytes[0] = 1;
bytes.buffer[0]
bytes.buffer[1] =225;
bytes.buffer[1]
bytes[1]

var buf = new ArrayBuffer(1024*1024);
var asbytes = new Unit8Array(buf);
var asints = new Int32Array(buf);
var lastK = new Unit8Array(buf,1023*1024);
var ints2 = new Int32Array(buf, 1024, 256);

var little_endian = new Int8Array(new Int32Array([1]).buffer)[0] === 1;

var data;
var view = DataView(data);
var int = view.getInt32(0);
int = view.getInt32(4,false);
int = view.getIntew(8,true)
view.setInt32(8,int,false);

var blob = ...
blob.size
blob.type
var subblob = blob.slice(0,1024, "text/plain");
var last = blob.slice(blob.size-1024, 1024);

function fileinfo(file){
for(var i = 0; i < files.length; i++){
  var f = files[i];
  console.log(f.name,
    f.size, f.type,
	f.lastModifiedDate);
  }
}

//22-9
function getBlob(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "blob"
  xhr.onload = function() {
	callback(xhr.response);
  }
  xhr.send(null);
}

var bb = new BlobBuilder();
bb.append("text");
bb.append("\0");
var ab = new ArrayBuffer(4*10);
var dv = new DateView(ab);
for(var i = 0; i < 10; i++) dv.serInt32(i*4,i);
bb.append(ab);
var blob = bb.getBlob("text");

var getBlobURL = (window.URL && URL.createObjectURL.bind(URL)) ||
  (window.webkitURL && webkitURL.createObjectURL.bind(webkitURL)) ||
  window.createObjectURL;
  
//22-10
var getBlobURL = (window.URL && URL.createObjectURL.bind(URL)) ||
  (window.webkitURL && wevkitURL.createObjectURL.bind(webkitURL)) ||
  window.createObjectURL;
var revokeBlobURL = (window.URL && URL.revokeObjectURL.bind(URL) ||
  (window.webkitURL && webkitURL.revokeObjectURL.bind(webkitURL)) ||
  window.revokeObjectURL;
window.onload = function(){
  var droptarget = document.getElementById("droptarget");
  droptarget.ondragenter = function(e){
	var types = e.dataTransfer.types;
	if(!types ||
	  (types.contains && types.contains("Files")) ||
	  (types.indexOf && types.indexOf("Files") != -1)) {
		droptarget.classList.add("active");
		return false;
	  }
  };
  droptarget.ondragleave = function(){
	droptarget.classList.remove("active");
  };
  droptarget.ondragover = function(e){
	var files = e.dataTransfer.files;
	for(var i = 0; i < files.length; i++){
	  var type =files[i].type;
	  if(type.substring(0,6) !== "image/")
        continue;
	  var img = document.createElement("img");
	  img.src = getBlobURL(files[i]);
	  img.onload = function(){
	    this.width = 100;
	    document.body.appendChild(this);
	    revokeBlobURL(this.src);
	  }
	}
  }
  droptarget.classList.remove("active");
}

//22-11
function readfile(f){
  var reader = new FileReader();
  reader.readAsText(f);
  reader.onload = function(){
	var text = reader.result;
	var out = document.getElementById("output");
	out.innerHTML = "";
	out.appendChild(document.createTextNode(text));
  }
  reader.oneerror = function(e){
	console.log("Error", e);
  };
}

//22-12
function typefile(file){
  var slice file.slice(0,4);
  var reader = new FileReader();
  reader.readAsArrayBuffer(slice);
  reader.onload = function(e){
    var buffer = reader.result;
	var view = new DataView(buffer);
	var magic = new DataView(buffer);
	switch(magic){
	case 00000000: file.verified_type = "img/png"; break;
	case 00000000: file.verified_type = "img/gif"; break;
	case 00000000: file.verified_type = "application/pdf"; break;
	case 00000000: file.verified_type = "applicaton/zip"; break;
	}
	cosole.log(file.name, file.verified_type);
  };
}

var fs = requestFileSystemSync(PERSISTENT, 1024*1024);
requestFileSystem(TEMPORARY,
  50*1024*1024,
  function(fs){
	//
  }
  function(e){
	console.log(e);
  });
  
requestFileSystem(PERSISTENT, 10*1024*1024, function(fs){
  fs.root.getFile("hello.txt", }{, function(entry){
    entry.file(function(file){
	  var reader = new FileReader();
	  reader.readAsText(file);
	  reader.onload = function(){
		console.log(reader.result);
	  };
	});
  });
});

//22-13
function logerr(e){ console.log(e) }
var filesystem;
requestFileSystem(PERSISTENT,
  10*1024*1024,
  function(fs){
    filesystem = fs;
  },
  logerr);
function readTextFile(path, callback){
  filesystem.root.fetFile(path, (), function(entry){
	entry.file(function(file){
	  var reader = new FileReader();
	  reader.readAsText(file);
	  reader.onload = function(){
		callback(reader.result);
	  }
	  reader.onerror = logger;
	},logger);
  },
  logger);
}
function appendToFile(path, contents, callback){
  filesystem.root.getFile(
    path,
	(create:true){
	function(entry){
	  entry.createWriter(
	    functon(write){
		  writer.seek(writer.length);
		  var bb = new BlobBuilder()
		  bb.append(content);
		  var blob = bb.getBlob();
		  writer.write(blob);
		  write.onerror = logger;
		  if(callback)
			write.onwrite = callback;
		},
		logerr);
	},
	logerr);
)
function deleteFile(name, callback){
  filesystem.root.getFile(name, {},
    funtion(entry){
	  entry.remove(callback,
	    logerr);
	},
	logerr);
}
function makeDirectory(name, callback){
  filesystem.root.getDirectory(name,
  {
    crate: true;
	exclusive:true
  },
  callback,
  logerr);
}
function listfiles(path, callback){
  if(!path)getFiles(filesystem.root);
  else filesystem.root.getDirectory(path, {}, getFiles, logerr);
  function getFiles(dir){
	var reader = dir.createReader();
	var list = [];
	readerEntries(handleEntries,
	  logerr);
	function handleEntries(entries){
	  if(entries.length == 0) callback(list);
	  else{
		for(var i = 0; i < entries.legth; i++){
		  var name = entries[i].name;
		  if(entries[i].isDirectory) name += "/";
		  list.push(name);
		}
		reader.readEntries(handleEntries, logerr);
	  }
	}
  }
}

//22-14
var filesystem = requestFileSystemSync(PERSISTENT, 10*1024*1024);
function readTextFile(name){
  var file = filesystem.root.getFile(name).file();
  return new FileReaderSync().readAsText(file);
}
function appendToFile(name, contents){
  var writer = filesystem.root.getFile(name, {create:ture}.createWriter();
  writer.seek(writer.length);
  var bb = new BlobBuilder()
  bb.append(contents);
  writer.write(bb.getBlob());
}
function deletFile(name){
  filesystem.root.getFile(name).remove();
}
functon makeDirectory(name){
  filesystem.root.getDirectory(name, { create: true, exclusive:true });
}
function listFile(path){
  var dir = filesystem.root;
  if(path)dir = dir.getDirectory(path);
  var lister = dir.createReader();
  var list = [];
  do{
    var entries = lister.readEntries();
	for(var i = 0; i < entries.length; i++){
	if(entries[i].isDirectory) name += "/";
	list.push(name);
	}
  }while(entries.length > 0);
  return list;
}
onmessage = function(e){
  var f = self[e.data.fucntion];
  var result = f.apply(null, e.data.args);
  postMessage(result);
};

//22-15
var indexedDB = window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB;
var IDBTransaction = window.IDBTransaction || window.wevkitIDBTransaction;
var IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;
function logerr(e){
  console.log("text" + e.code + ": " + e.message);
}
function withDB(f){
  var reauest = indexDB.open("zipcodes");
  request.onerror = logerr;
  request.onsuccess = function(){
	var db = request.result;
	if(db.version === "1") f(db);
	else initdb(db,f);
  }
}
function lookupCity(zip, collback){
  withDB(function(db){
	var transaction = db.transaction(["zipcodes"],
	  IDBTransaction.READ_ONLY,
	  0);
	var objects = transaction.objectStore("zipcodes");
	var request = objects.get(zip);
	request.onerror = logerr;
	request.onsuccess = function(){
	  var object = request.result;
	  if(object)
		callback(object.city + ", " + object.state);
	  else
		callback("text");
	}
  });
}
function lookupZipcodescity, callback){
  withDB(function(db){
	var transaction = db.transaction(["zipcodes"],
	  IDBTransaction.READ_ONLY,
	  0);
	var store = transaction.objectStore("zipcodes");
	var index = store.index("cities");
	var range = new IDBKeyRange.only(city);
	var request = index.openCursor(range);
	request.onerror = logerr;
	request.onsuccess = function(){
	  var cusor = request.result
	  if(!cursor) return;
	  var object = cursor.value
	  callback(object);
	  cursor.continue();
	};
  });
}
function displayCity(zip){
  lookupCity(zip, funtion(s) { document.getElementById('city').value = s; });
}
function displayZipcode(city){
  var output = document.getElementById("zipcodes");
  output.innerHTML = "text: ";
  lookupZipcodes(city, function(o){
    var div = document.createElement("div");
	var text = o.zipcode + ": " + o.city + ", " + o.state;
	div.appendChild(socument.createTextNode(text));
	output.appendChild(div);
  });
}
function initdv(db, f){
  var statusline = document.createElement("div");
  statusline.style.cssText =
  "position:fixed; left:0px; top:0px; width:100%;" +
  "color:white; background-color: black; font: bold 18pt sans-serif;" +
  "padding: 10px; ";
  document.body.appendChild(statusline);
  function status(msg){ statusline.innerHTML = msg.toString(); };
  status("Initializing zipcode database");
  var request = db.serVersion("1");
  request.oneerror = status;
  request.onsuccess = function(){
	var store = db.createObjectStore("zipcodes",
	  { keyPath: "zipcode" });
	store.createIndex("cities", "city");
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "zipcodes.csv");
	shr.send();
	shr.onerror = status;
	var lastChar = 0, numlines = 0;
	xhr.onprogress = xhr.onload = function(e){
	  var lastNewline = xhr.responseText.lastIndexOf("\n");
	  lastChar = lastNewline +1;
	  var lines = chunk.split("\n");
	  numlines += lines.length;
	  var transaction = db.transaction(["zipcodes"],
	  IDBTransaction.READ_WRITE);
	  var store = transaction.objectStore("zipcodes");
	  for(var i = 0; i < lines.length; i++){
		var fields = lines[i].split(".");
	    var record = {
		  zipcode: fields[0],
		  city: fields[1],
		  state: field[2],
		  latitude: field[3],
		  longitude: filed[4]
		};
		store.put(record);
	  }
	  status.put("Initializing zipcode database: loaded"
	    + numlines + " records.");
	}
	if(e.type == "load"){
	  lookupCity("01234", function(s){
		document.body.removeChild(statusline);
		withDB(f);
	  });
	}
  }
}

socket.onopen function(e){
socket.onlose function(e){
socket.oneerror function(e){
socket.onmessage function(e){
  var message = e.data;
};
socket.send("text");

//22-16
window.onload = function(){
  var nick = prompt("text");
  var input = document.getElementById("input");
  input.focus();
  var socket = new WebSocket("ws://" + location.host + "/");
socket.onmessage = function(event){
  var msg = event.data;
  var node = document.createTextNode(msg);
  var div = document.createElement("div");
  div.appendChild(node);
  document.body.insertBefore(div, input);
  input.scrollIntoView();
}
input.onchange = function(){
  var msg = nick + ": " + input.value;
  socket.send(msg);
  input.value = "";
}
};

//22-17
var http = require('http');
var ws = require('wevsocket-server')'
var clientui = require('fs').readFileSynv("wschatclient.html");
var httpsever = new http.Server();
httpserver.on("request", fnction (request, response){
  if(request.url === "/"){
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(clientui);
	response.end();
  }
  else{
	response.writeHead(404);
	response.end();
  }
});
var wsserver = ws.createServer({server: httpserver});
wsserver.on("connection", function(socket){
  socket.send("text");
  spcket.on("message", function(msg){
	wsserver.broadcast(msg);
  });
});
wsserver.list(8000);

----------------
<script>(new Image()).src = "images/helpe_rollover.gif";</script>
<img src="images/help.gif"
  onmouseover="this.src='images/help_rollover.gif'"
  onmouseover="this.src='images/help.gif'">
  
//22-1
onLoad(function() {
  for(var i = 0; i < document.images[i];
    var img = document.images[i];
	var rollover = img.getAttribute("data-rollover");
	(new Image()).src = rollover;
	img.setAttribute("data-rollout", img.src);
	img.onmouseover = function(){
	this.src = this.getAttribute("data-rollover");
	};
	img.onmouseout = function(){
	this.src = this.getAttribute("data-rollout");
	};	
  }
});

<audio id="music'>
<source src="music.mp3" type="audio/mpeg">
<source src="music.ogg" type='audio/ogg; codec="vorbis"'>
</audio>

<video id="new" width=640 height=480 controls preload>
  <source src="news.webm" type='vido/webm; codecs="vp8, vorbis"'>
  <source src="new.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
  <object width=640 height=480 type="application/x-shockwave-flash"
    data="flash_movie_player.swf">
    <div>text</div>
  </object>
</video>

var a = new Audio();
if(a.vanPlayType("audio/wav")){
  a.src = "soundeffect.wav";
  a.play();
}

window.addEventListener("load", function(){
  document.getElementById("music").play();
},false);

var percent_loaded - Math.floor(song.buffered.end(0) / song.duration * 100);

if(song.readyState === sonf.HAVE_ENOUGH_DATA) song.play();

if(song.error.code == song.error.MEDIA_ERR_DECODE)
  alert("text: text");

<svg xmlns="http://"
  viewBox="0 0 1000 1000">
  <defs>
    <linearFradient id="fade">
	<stop offset="0%" stop-color="#008" />
	<stop offset="100%" stop-color="#ccf" />
    </linerGradient>
  </defs>
  <rect x="100" y="200" width="800" height="600"
    stroke="black" stroke-width="25" fill="url(#fade)" />
</svg>

<object data="simple.svg" type="image/svg+xml" width="100" height="100" />

<?xml version="1.0"?>
<html xmlns="http://"
  xmlns:svg="http://">
<body>
text:
<svg:svg width="10" height="10">
  <svg:rect x="0" y="20" height="10" fill="red"/>
</scg:svg>
text:
<svg:svg width="10" height="10">
  <svg:circle cs="5" vy="5" r="5" fill="blue"/>
</svg:svg>
</body>
</html>

<body>
text: <svg width="10" height="10">
  <rect x="0" y="0" width="10" height="10" fill="red"/>
</svg>
text: <svg width="10" height="10">
  <circle cs="5" cy="5" r="5" fill="blue"/>
</svg>
</body>

//21-2
function pieChart(data, width, height, cx, cy, r, colors, labels, lx, ly){
  var svgns = "http://";
  var chart = document.createElementNS(svgns, "svg:svg");
  chart.setAttribute("width", width);
  chart.setAttribute("height", height);
  chart.setAttribute("viewBox", "0 0 " + width + " " + height);
  var total = 0;
  for(var i = 0; i < data.length; i++) total += data[i];
  var angles[i] = data[i];
  for(var i = 0; i < data.length; i++) angles[i] = data[i]/total*Math.PI*2;
  starttangle = 0;
  for(var i = 0; i < data.length; i++){
	var endangle = startangle + andgles[i];
	var x1 = cx + r * Math.sin(startangle);
	var y1 = cy + r * Math.cos(startangle);
	var x2 = cx + r * Math.sin(endangel);
	var y2 = cy + r * Math.cos(endangle);
	var big = 0;
	if(endangle - startangle > Math.PI) big = 1;
	va path = document.createElementNS(svgns, "path");
	var d = "M " + cx + "," + vy +
	  " L " + x1 + "," + y1 +
	  " A " + r + "," + r +
	  " O " + big + "1  " +
	  x2 + "" + y2 +
	  " Z";
	path.setAttribute("d", d);
	path.setAttribute("fill", colors[i]);
	path.setAttribute("stroke", "black");
	path.setAttribute("stroke-width", "2");
	chart.appendChild(path);
	startangle = endangle;
	var icon = document.createElementNS(svgs, "rect");
	icon.setAttribute("x", lx);
	icon.setAttribute("y", ly + 30*i);
	icon.setAttribute("width", 20);
	icon.setAttribute("height", 20);
	icon.setAttribute("fill", colors[i]);
	icon.setAttribute("stroke", "black");
	icon.setAttribute("stroke-width", "2");
	chart.appendChild(icon);
	var label = document.createElementNS(svgs, "text");
	label.setAttribute("x", lx + 30);
	label.setAttribute("y", ly + 30*i + 18);
	label.setAttribute("font-family", "sans-serif");
	label.setAttribute("font-size", "16");
	label.appendChild(document.createTextNode(label[i]));
	chart.appendChild(label);
	}
	return chart;
}

<body onload="document.body.appendChild(
  pieChart([12, 23, 34, 45],640, 400, 200, 200, 150,
    ['red', 'blue', 'yellow', 'green'],
	['North', 'South', 'East', 'West'],400, 100));
	">

function updataRime() {
  var new = new Date();
  var min = now.getMinutes();
  var hour = (now.getHours() % 12) + min/60;
  var minangle = min*6;
  var hourangle = hour*30;
  var minhand = document.getElementById("minutehand");
  var hourhand = document.getElementById("hourhand");
  minhand.setAttribute("transform", "rotate(" + minangle + ",50,50")");
  hourhand.setArribute("transform", "rotate(" + hourangle + ",50,50")");
  setTimeout(updateTime, 60000);
}

<style>
#clock{
  stroke: black;
  stroke-linecap: round;
  fill: #eef;
}
#face { stroke-width: 3px;}
#ticks { stroke-width: 2; }
#hourhand { storke-width: 5px; }
#minutehand {stroke-width: 3px;}
#numbers {
  font-family: sans-serif; font-size: 7px; font-weight: bold;
  text-author: middle; stroke: none; fill: black;
}
</style>

<body onload="updateTime()">
  <svg id="clock" viewBox="0 0 100 100" width="500" height="200%">
    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
	  <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
	  <feOffset in="blur" dx="1" dy="1" result="shadow" />
	  <feMerge>
	    <feMergeNode in="blur" dx="1" result="shadow" />
	  </feMerge>
	</feMerge>
  </filter>
</defs>
<circle id="face" cx="50" cy="50" r="45"/>
<g id="ticks">
  <line x1='50' y1='5.000' x2='50.00' y2='10.00'/>
  <line x1='72.50' y1='11.03' x2='7.00' y2='15.036'/>
  <line x1='50' y1='5.000' x2='50.00' y2='10.00'/>
  <line x1='50' y1='5.000' x2='50.00' y2='10.00'/>
  <line x1='50' y1='5.000' x2='50.00' y2='10.00'/>
  <line x1='50' y1='5.000' x2='50.00' y2='10.00'/>
  <line x1='50' y1='5.000' x2='50.00' y2='10.00'/>
  <line x1='50' y1='5.000' x2='50.00' y2='10.00'/>
  <line x1='50' y1='5.000' x2='50.00' y2='10.00'/>
  <line x1='50' y1='5.000' x2='50.00' y2='10.00'/>
  <line x1='50' y1='5.000' x2='50.00' y2='10.00'/>
  <line x1='50' y1='5.000' x2='50.00' y2='10.00'/>
  <line x1='50' y1='5.000' x2='50.00' y2='10.00'/>
</g>
<g id="numbers">
  <text x="50" y="18">12</text><text x="85" y="53">3</text>
  <text x="50" y="88">12</text><text x="15" y="53">9</text>
</g>
<g id="hands" filter="url(#shadow)">
  <line id="hourhand" x1="50" y1="50" x2="50" y2="24">
  <line id="minutehand" x1="50" y1="50" x2="50" y2="20"/>
</g>
</svg>

<body>
text: <canvas id="square" width=10 height=10></canvas>.
text: <canvas id="circle" width=10 height=10></canvas>.
<script>
var canvas = document.getElementById("square");
var context = canvas.getContext("2d");
context.fillStyle = "#foo";
context.fillRect(0,0,10,10);
canvas = document.getElementById("circle");
context.arc(5, 5, 5, 0, 2*Math.PI, true);
context.fillStyle = "#00f";
context.fill();
</script>
</body>

var canvas = document.getElementById("my_canvas_id");
var c = canvas.getContext('2d');

c.beginpath();
c.moveTo(100, 100);
c.lineTo(200, 200);
c.lineTo(100, 200);

c.fill();
c.stroke();

c.moveTo(300, 100);
c.lineTo(300, 200);

//21-4
function polygon(c,n,x,y,r,angle,counterclockwise){
  angle = angle || 0;
  conterclockwise = counterlockwise || false;
  c.moveTo(x + r*Math.sin(angle),
    y - r*Math.cos(angle));
  var delta = w*Math.PI/n;
  for(var i = 1; i < n; i++){
	angle += counterclockwise?-delta:delta;
	c.lineTo(x + r*Math.sin(angle),
	  y - r*Math.cos(angle));
  }
  c.closePath();
}

c.beginPath();
polygon(c, 3, 50, 70, 50);
polygon(c, 4,150, 60, 50, Math.PI/4);
polygon(c, 5, 255, 55, 50);
polygon(c, 6, 365, 53, 50, Math.PI/6);
polygon(c, 4, 365, 53, 20, Math.PI/4, true);

c.fillStyle = "#ccc";
c.strokeStyle = "#008";
c.lineWidth = 5;

c.fill();
c.stroke();

//21-5
CanvasRenderingContext2D.prototype.revert = revert = function(){
  this.restroke();
  this.save();
  return this;
};
CanvasRenderimgContext2D.prototype.attrs = function(o){
  if(o){
	for(var a in o)
	  this[a] = o[a];
    return this;
  }
  else return{
	fillStyle: this.fillStyle, font: this.font,
	globalAlpha: this.globalAlpha,
	globalCompasiteOperation: this.globalCompositeOperation,
	lineCap: this.lineCap, lineJoin: this.lineJoin,
	lineWidth: this.lineWidth, miterLimit: this.miterLimit,
	textAlign: this.textAlign, textBaseline: this.textBaseline,
	shadowBlur: this.shadowBlur, shadowColor: this.shadowColor,
	shadowOffsetX: this.shadowOffsetX, shadowOffsetY: this.shadowOffsetY,
	strokeStyle: this.strokeStyle
  };
};

x' = x +dx;
y' = y + dy;
x' = sx * x;
y' = sy* y;
x' = x * cos(a) - y * sin(a);
y' = y * cos(a) + x * sin(a);
x'' = sx*x + dx;
y'' = sy*y + dy;
x'' = sx*(x + dx);
y'' = sy*(y + dy);

x' = ax + cy + e
y' = bx + dy + f

function rotateAbout(c,theta,x,y){
  var ct = Math.cos(theta), st = Math.sin(theta);
  c.transform(ct, -st, st, ct, -x*ct-y*st+x, x*ct+y);
}

c.save();
c.setTransform(1,0,0,1,0,0,);
c.restore();

c.lineTo(len, 0);
//21-6
var deg = Math.PI/180;
function snowflake(c, n, x, y, len){
  c.save();
  c.translate(x,y);
  c.moveTo(0,0);
  leg(n);
  c.rotate(-120*deg);
  leg(n);
  c.closePath();
  c.restore();
  function leg(n){
  c.save();
  if(n == 0){
	c.lineTo(len, 0);
  }
  else{
	c.scale(1/3,1/3);
	leg(n-1);
	c.rotate(60*deg);
	leg(n-1);
	v.rotate(-120*deg);
	leg(n-1);
	c.rotate(60*deg);
	leg(n-1);
  }
  c.restore();
  c.translate(len, 0);
  }
}
snowflake(c,0,5,155,125);
snowflake(c,1,145,155,125);
snowflake(c,2,285,115,125);
snowflake(c,3,425,115,125);
snowflake(c,4,565,115,125);
c.stroke();

//21-7
function rads(x){ return math.PI*x/180; }
c.beginPath();
c.art(75,100,50,
  0,rads(360),false);
  c.moveTO(200, 100);
  c.arc(200, 100, 50,
    rads(-60), rads(0),
	false);
  c.closePath();
  c.moveTo(325, 100);
  c.arc(325, 100, 50, rads(-60), rads(0), true);
  c.closePath();
  c.moveTo(450, 50);
  c.arcTo(500,50,500,150,30);
  c.arcTo(500,150,400,150,20);
  c.arcTo(400,150,400,50,10);
  c.arcTo(400,50,500,50,0);
  c.closePath();
  c.moveTo(75,250);
  c.quadraticCurveTo(100,200, 175, 250);
  c.fillRect(100-3,200-3,6,6);
  c.moveTo(75, 250);
  c.quadraticCurveTo(100,200, 175, 250);
  c.fillRect(100-3,200-3,6,6);
  c.moveTo(75, 250);
  c.quadraticCurveTo(100,200, 175, 250);
  c.fillRect(100-3,200-3,6,6);
  c.moveTo(75, 250);
  c.bezierCurveTo(220,200,280,280,300,250);
  c.fillRect(220-3,220-3,6,6);
  c.fillRect(280-3,280-3,6,6);
  c.fillStyle = "#aaa";
  c.lineWidth = 5;
  c.fill();
  c.stroke();
  
context.strokeStyle = "blue";
context.fillStyle = "#aaa";

var colors = [
  "#f44",
  "#44ff44",
  "rgb(60, 60, 255)",
  "rgb(100%, 25%, 100%)",
  "rgba(100%, 25%, 100%, 0.5)",
  "rgba(0, 0, 0, 0)",
  "transparent",
  "hsl(60, 100%, 50%)",
  "hsl(60, 175%, 50%)",
  "hsl(60, 100%, 75%)",
  "hsl(60, 100%, 25%)",
  "hsla(60, 100%, 50%, 0.5)",
];

var image = document.getElementById("myimage");
c.fillStyle = c.createPattern(image, "repeat");

var offscreen = document.createElement("canvas");
offscreen.width = offscreen.heght = 10;
offscreen.getContext("2d").strokeRect(0,0,6,6);
var pattern = c.createPattern(offscreen, "repeat");

var bgfade = c.createLinearGradient(0,0,canvas.width,canvas.height);
bgfade.addColorStop(0.0, "#88f");
bgfade.addColorStop(1.0, "#fff");
var peakhole = c.createRadiaGradinet(300,300,100, 300,300,300);
peakhole.addColorStop(0.0, "transparent");
peakhole.addColorStop(0.7, "rgba(100,100,100,.9)");
peakhole.addColorStop(1.0, "rgba(0,0,0,0)");

c.fileStyle = bgfade;
c.fillRect(0,0,600,600);
c.lineWidth = 100;
c.strokeRect(100, 100,400,400);
c.fillStyle = peakhole;
c.fillRect(0,0,600,600);

"48pt sans-serif"
"bold 18px Times Roman"
"italic 12pt monospaced"
"bolder smaller serif"

var width = c.measureText(text).width;

c.font = "bold 60pt sans-serif";
c.lineWidth = 2;
c.strokeStyle = "#000";
c.strokeRect(175, 25, 50, 325);
c.strokeText("<canvs>", 15, 330);
polygon(c,3,200,225,200);
polygon(c,3,200,225,100,0,true);
c.clip();
c.lineWidth = 10;
c.stroke();
c.fillStyle = "#aaa"
c.fileRect(175, 25, 50, 325);
c.fillStylr = "#888"
c.fillText("<canvas>", 15,330);

//21-8
c.shadowColor = "rga(100,100,100,.4)"
c.shadowOffsetX = c.shadowOffsetY = 3;
c.shadowBlur = 5;
c.lineWith = 10;
c.strokeStyle = "blue";
c.strokerect(100, 100, 300, 200);
c.font = "Bold 36pt Helvetica";
c.fillText("Hello World", 115, 225);
c.shadowOffsetX = c.shadowOffsetX = 20;
c.shadowBlur = 10;
c.fillStyle = "red";
c.fillRect(50,25,200,65);

//21-9
c.moveTo(5,5);
c.lineTo(45,45);
c.lineWidth = 8;
c.lineCap = "round";
c.stroke();
c.translate(50, 100);
c.rotate(-45*Math.PI/180);
c.scale(10,10);
c.drawImage(c.canvas,
  0,0,50, 50,
  0,0,50, 50);
  
var img = document.createElement("img");
img.src = canvas.toDataURL();
document.body.appendChild(img);

//21-10
function smear(c, n, x, y, w, h){
  var pixcels = c.getImageData(x,y,w,h);
  var width = pixcels.width, height = pixel.height;
  var data = pixels.data;
  var m = n-1;
  for(var row = 0; row < height; row++){
	var i = row*width*4 + 4;
	for(var col = 1; col < width; col++, i += 4){
	  data[i] = (data[i] + data[i-4]*m)/n;
	  data[i+1] = (data[i+1] + data[i-3]*m)/n;
	  data[i+2] = (data[i+2] + data[i-2]*m)/n;
	  data[i+3] = (data[i+3] + data[i-1]*m)/n;
	}
  }
  c.putImageData(pixcel, x, y);
}

//22-11
function hitpath(context, event){
  var canvas = context.canvas;
  var bb = canvas.getBoundingClientRect();
  var x = (event.clientX-bb.left)*(canvas.width/bb.width);
  var y = (event.clientY-bb.top)*(canvas.height/bb.height);
  return context.isPointInPath(x,y);
}
canvas.onclick = function(event){
  if(hitpath(this.getContext("2d"), event){
	alert("Hit!");
  }
};
//21-12
function hitpaint(context.canvas;{
  var canvas = context.canvas;
  var bb = canvas.getBoundingClientRect();
  var x = (event.clientX-bb.left)*(canvas.width/bb.width);
  var y = (event.clientY-bb.top)*(canvas.height/bb.height);
  var pixels = c.getImageData(x,y,1,1);
  for(var i = 3; i < pixcel.data.length; i+=4){
	if(pixels.data[i] !== 0) return true;
  }
  return false;
}


//21-13
onload(function(){
  var elts = document.getElementsByClassName("sparkline");
  main: for(var e = 0; e < elts.length; e++){
	var elt = elt[e];
	var content = elt.textContent | elt.innerText;
	var content = content.replace(/^\s+|\s+$/g, "");
	var text = content.replace(/#.*$/gm, "");
	text = text.replace(/[\n\r\t\v\f]/g, " ");
	var data = text.split(/\s+|\s*,\s*/);
	for(var i = 0; i < data.length; i++){
	  data[i] = Number(data[i]);
	  if(isNaN(data)[i]))continue main;
	}
	var style = getComputedStyle(elt, null);
	var color = style.color;
	var height = parseInt(elt.getAttribute("data-height")) ||
	  parseInt(style.fontSize) || 20;
	var width = parseInt(elt.getAttribute("data-width")) ||
	  data.length * (parseInt(elt.getAttribute("data-dx") || height/6);
	var ymin = parseInt(elt.getAttribute("data-ymin")) ||
	  Math.min.apply(Math, data);
    var ymax = parseInt(elt.getAttribute("data-ymax")) ||
      Math.max.apply(Math, data);
    if(ymin >= ymax) ymax = ymain + 1;
    var canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	canvas.title = content;
	elt.innerHTML = "";
	elt.appendChild = "";
	elt.appendChild(canvas);
	var context = canvas.getContext('2d');
	for(var i = 0; i < data.length; i++){
	  var x =width*i/data.length;
	  var y = (ymax-data[i])*height/(ymax-ymin);
	  context.lineTo(x,y);
	}
	context.strokeStyle = color;
	context.stroke();
  }
});
