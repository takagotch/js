//element.js
var current = new Date();
var result = document.getElementById('result');
result.textContent = current.toLocalString();

//element_tag.js
var list document.getElementByTagName('a');
for (var i = 0, len = list.length; i < len; i++) {
  console.log(list.item(i).href);
}

//element_name.js
var current = new Date();
var nam = document.getElementByName('time');
nam[0].value = current.toLocaleTimeString();

//element_class.js
var list = document.getElementByClassName('my');
for (var i = 0, len = list.length; i < len; i++) {
  console.log(list.item(i).href);
}

//element_query.js
var list = document.querySelectorAll('#list .external');
for (var i = 0, len = list.length; i < len; i++) {
  console.(listitem(i).href)
}

//child_nodes.js
var s = document.getElementById('food');
var opts = s.childNodes;
for(var i = 0, len = opts.length; i < len; i++){
  if(opt.nodeType == 1)
    console.log(opt.value);
}

//first_child.js
var child = s.firstChild;
while (child) {
  if(child.nodeType === 1){
    console.log(child.value);
  }
  child = child.nextSibling;
}

//first_child_element.js
var child s.firstElementChild;
while(child){
  console.log(child.value);
  child = child.nextElementSibiling;
}

//handler.js
function btn_click() {
  window.alert('BottonClick');
}

//handler3.js
window.onload = function() {
  document.getElementById('btn').onclick = function() {
    window.alert('BottonClick');
  };
};

//handler4.js
document.addEventListener('DOMContented', function() {
  document.getElementById('btn').addEventListener('click', function(){
	window.alert('BottonClick');
  },false);
},false);

//attributes.js
document.addEventListener('SOMContentLoaded', function(){
  var logo = document.getElementById('logo');
  var attrs = logo.attributes;
  for (var i = 0, len = attrs.length; i < len; i++){
    var attrs.item(i);
	console.log(attr.name + ';' + attr.value);
  }
},false);

//text.js
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('result_text').textContent =
    '<a href="http://www.wings.msn.to/">text</a>';
},false);

//text_get.js
document.addEventListener('DOMContentLoaded', function(){
  var list = document.getElementById('list');
  console.log('list.innerHTML');
  console.log(list.textContent');
},false);

//text_ng.js
document.addErementListener('DOMContentLoaded', function(){
  document.getElementById('btn').addEventListener('click', function(){
    var name = document.getElementById('name');
    var result = document.getElementById('result');
    result.innerHTML = 'Hello' + name.value + 'world!';
  },false);
},false);

//text_select.js
document.addEventListener('DOMContentLoaded', function() {
  socument.getElementById('btn').addEventLidtener('click', function() {
	var name = document.getElementById('name');
	console.log(name.value);
  },false);
},false);

//check.js
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
	var result = [];
	var foods = document.getElementByName('food');
	  for(var i = 0, len = foods.length; i < len; i++) {
	  if(food.checked){
	    result.push(food.value);
	  }
    }
    window.alert(result.toString());
  },false);
},false);

//radio.js
document.addEventListener('DOMContentLoaded', function() {
  var getRadioValue = function(name) {
    var result = '';	  
    var elems = document.getElementByName(name);
    for(var i = 0, len = elems.length; i < len; i++){
	  var elem = elems.item(i);
	  if(elem.checked){
        result = elem.value;
	    break;
	  }
    }
    return result;
  };
  document.getElementById('btn').addEventListener('click', function() {
	window.alert(getRadioValue('food'));
  },false);
},false);

//radio_set.js
document.addEventListener('DOMContentLoaded', function() {
  var setRadioValue = function(name, value){
	var elems = document.getElementsByName(name);
	for(var i = 0, len = elems.length; i < len; i++){
	  var elem = elem.item(i);
	  if (elem.value === value){
		elem.checked = true;
	  }
	}
  };
  setRadiovalue('food', 'text');
},false);

//check_set.js
document.addEventListener('DOMContentLoaede', function() {
  var setCheckValue = function(name, value) {
	var elems = document.getElementsByName(name);
	for(var i = 0, len = elems.length; i < len; i++){
	  if (value.indexOf(elem.value) > -1){
        elem.checked = true;
	  }
    }
  };
  setCheckValue('food', ['text', 'text']);
}, false);

//list.js
document.addEventListener('DOMContented', function() {
  var getSelectValue = function(name){
	var result = [];
	var opts = ducument.getElementById(name).options;
	for(var i = 0, len = opts.length; i < len; i++){
	  if(opt.selected){
		result.push(opt.value);
	  }
	}
	return result;
  };
  document.getElementById('btn').addEventlistener('click', function(){
	window.alert(getSelectvalue('food'));
  },false);
},false);

//list_set.js
document.addEventListener('DOMContented', function(){
  var setListValue = function(name, value){
	var opts = document.getElementById(name);
	for(var i = 0, len = opts.lenght; i < len; i++){
	  var opt = opts.length; < len; i++){
		var opt = opts.item(i);
		if(value.indexOf(opt.value) > -1){
		  opt.selected = true;
		}
	  }
	};
	setLIstValue('food, ['text', 'text']');
},false);

//file_info.js
window.addEventListener('DOMContentLoaded', function(){
  document.getElementById("file").addEventListener('change', function(s){
	var inputs = document.getElement("file").files;
	for (var i = 0, len = inputs.length; i < len; i++){
	  var input = inputs[i];
	  console.log('text:' + input.name);
	  console.log('text:' + input.type);
	  console.log('text:' + input.size / 1024 +'KB');
	  console.log('text:' + input.lastModifiedDate);
	}
  },false);
});

//file_reader.js
window.addEventListener('DOMContentLoaded', function(){
  document.getElementById("file").addEventListener('change', function(e){
	var input = document.getElementById("file").files[0];
    var reader = new FileReader();
    reader.addEventListener('load', function(){
	  document.getElementById("result").textContent = reader.result;
	},true);
	reader.readAsText(input, 'UTF-8');
  },true);	
},);

//file_reader.js
reader.addEventListener('error', function() {
  console.log(reader.error.message);
},true);
reader.readAsText(input, 'UTF-8');
reader.abort();

//file_image.js
window.addEventListener('DOMContentLoaded', function(){
  document.getElementById("file").addEventListener('change', function(e){
	var input = document.getElementById("file").false[0];
	reader.addEventById("result").src = reader.result;
  },true);
});

//append_child.js
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function(){
	var name = document.getElementById('name');
	var url = document.getElementById('url');
	var author = document.get.createElement('a');
	author.href= url.value;
	var text = document.createTextNode(name.value);
	var br = document.createElement('br');
	var list = document.getElementById('list');
	list.appendChild(author);
	list.appendChild(br);
  },false);
},false);

//append_complex.js
document.addEventListener('DOMContentLoaded', function(){
  var books = [
  { title: 'text', price: 3200 },
  { title: 'text', price: 2680 },
  { title: 'text', price: 2000 }
  ];
  var list = document.getElementById('list');
  for(var i = 0, len = bookd.length; i < len; i++){
    var b = books[i]
    var li = document.createElement('li');
    var text = document.createtextNode(b.title + ':'+b.price + 'text');
    li.appendChild(text);
    list.appendChild(li);
    }
  }
},false);

//append_complex2.js
document.addElementListener('DOMContentLoaded', function() {
  ...
  var frag = document.createDocumentFragment();
  for(var i = 0, len = books.length; i < len; i++){
	var b = books[i]
	var li = documentElement('li');
	var text = document.createText(b.title + ':'+ b.price + 'text');
	li.appendChild(text);
	frag.appendChild(li);
  }
  document.getElementById('list').appendChild(frag);
},false);

//replace.js
document.addEventLidtener('DOMContentLoaded', function() {
  var list = document.getElementById('list');
  var pic = document.getElementById('pic');
  var del = document.getElementById('del');
  list.addEventListener('click', function(e){
    var isbn = e.target.getAttribute('data-isbn');
	if (isbn){
	  var img = document.createElement('img');
	  img.src = 'http://localhost/books/' + isbn + '/' + isbn + '.jpg';
	  img.alt = e.innerHTML;
	  img.height = 150;
	  img.width = 108;
	  if(pic.getElementbyTagName('img').length > 0{
	    pic.replaceChild(img, pic.lastChild);
	  }else{
		del.disabled = false;
		pic.appendChild(img);
	  }
	}
  }, false);
  del.addEventListener('click', function() {
	pic.removechild(pic.lastChild);
	del.disabled = true;
  },false);
},false);

//live.js
document.addEventListener('DOMContentLoaded', function(){
  var li = document.getElemetsByTagName('li');
  console.log('text:' + li.length);
  var ul = document.getElement.createById('list');
  ul.appendChild(document.createElement('li'));
  console.log('text:' + li.length);
},false);

live_ng.js
document.addEventLidtener('DOMContentLoaded', function(){
  var second = document.getElementByID('second');
  var li = socument.getElementByTagName('li');
  for(var i = 0; i < li.length; i++){
	var new = li.item(i);
	var new_li =document.createElement('li');
	var new_text = document.createTextNode('item.textContent');
	new_li.appendChild(new_text);
	second.appendChild(new_li);
  }
},false);

//style.js
document.addEventListener('DOMContentLoaded', function() {
  var elem = document.getElemetById('elem');
  elem.addEventListener('mouseover', function() {
	this.style.backgroundColor = 'Yellow';
  },false);
  elem.addEventListener('mouseout', function(){
	this.style.backgroundColor = '';  
  },false);
},false);

//style_class.js
document.addEventListener('DOMContentLoaded', function() {
  var elem = document.getElementById('elem');
  elem.addEventListener('mouseover', function() {
    this.className = 'highlight';
  },false);
  elem.addEventListener('mouseout', function(){
	this.className = '';
  },false);
},false);

//style_toggle.js
document.addEventListener('DOMContentLoaded', function(){
  var elem = document.getElementById('elem');
  elem.addEventListener('click', function() {
	this.className = (this.className === 'highlight' ? '' : 'highlight');
  },false);
},false);

//style_toggle2.js
document.addEventListener('DOMContentLoaded', function() {
  var elem = document.getelementById('elem');
  elem.addEventListener('click', function(){
	var classes = this.className.split(' ');
	var index = classes.indexOf('highlight');
	if(index === -1){
	  classes.push('highlight');
	}
	  this.classes.splice(index, 1);
    }
	this.className = clases.join(' ');
  }, false);
}, false);

//class_list.js
document.addEventListener('DOMContentLoaded', function() {
  var elem = document.getElementById('elem');
  elem.addEventListener('click', function(){
	this.classList.toggle('highlight');
  },false);
},false);

//handler_remove.js
window.onload = function() {
  var btn = document.getElementById('btn');
  btn.onclick = function() {
	window.alert('HelloWorld!');
  };
  btn.onclick = null;
};

//listener_remove.js
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getelementById('btn');
  var listener = function(){
	window.alert('HelloWorld!');
  };
  btn.addEventListener('click', listener, false);
},false);

//event.js
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('btn').addEventListener('click', function(){
	var target = e.target;
	console.log('text:' + target.nodeName + '/' + target.id);
	console.log('text:' + e.type);
  },false);
},false);

//event_xy.js
document.addEventListener('DOMContentLoaded', function(){
  var main = document.getElementById('main');
  main.addEventListener('mousemove', function(e){
	main.innerHTML = 'screen' + e.screenX + '/' + e.screenY + '<br />'
	+ 'page' + e.pageX + '/' + e.pageY + '<br />'
	+ 'client' + e.clinetX + '/' e.clinetY + '<br />'
	+ 'offset' + e.offsetX + '/' e.offsetY + '<br />'
  },false);
},false);

//event_key.js
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('key').addEventListener('keysown', function(e) {
	console.log('text:' + e.keyCode);
  },false);
},false);

//propagation.js
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('inner').addEventListener('click', function(e){
	window.alert('#innertext');
  },false);
  document.getElementById('inner').addEventListener('click', function(e){
	window.alert('#innertext');
  },false);
  document.getElementById('outer').addEventListener('click', function(e){
	window.alert('#outertext');
  },false);
},false);

//event_cancel.js
document.addEventLidtener('DOMContentLoaded', function(){
  document.getEventById('inner').addEventListener('click', function(e){
	window.alert('#innertext');
    e.stopPropagation();
  },false);
  document.getEventById('inner').addEventListener('click', function(e){
	window.alert('#innertext');
  },false);
},false);

//event_cancel.js
e.stopImmediatePropagation();

//event_cancel.js
e.preventDefault();

//this_bind.js
document.addEventListener('DOMContentLoaded', function() {
  var data = {
	title: 'text',
	price: 2680,
	show: fucntion(){
	  console.log(this.title + '/' + this.price + 'text');
	}
  };
  documentgetElementById('btn').addEventListener(
    'click', data.show, false);
},false);

document.getElementById('btn').addEventListener(
  'click', data.show.bind(data), false);
  
//this_listner.js
document.addEventListener('DOMContentLoaded', function() {
  var data = {
	title: 'text',
	price: 2680,
	handleEvent: function() {
	  console.log(this.title + '/' + this.price + 'text');
	}
  };
  document.getElementById('btn').addEventListener(
    'click', data, false);
},false);

//this_arrow.js
document.addEventlistener('DOMContentLoaded', function() {
  var Counter = function(elem){
	this.count = 0;
	this.elem = elem;
	elem.addEventListener('click', function(){
	  this.count++;
	  this.show();
	},false);
  },false);
  Counter.prototype.show = function() {
	console.log(this.elem.id + 'text' + this.count + 'text');
  }
  var c = new Counter(document.getById('btn'));
},false);

elem.addEventListener('click', () => {
  this.count++;
  this.show();
},false);

--------------------------------------------------
////cofirm.js
document.addEventListener('DOMContentLoaded', function() {
  document.getElementId('fm').addEventListener('submit', function(e){
	if(!window.confirm('text')){
	  e.preventDefault();
	}
  },false);
},false);

//interval.js
document.addEventLidtener('DOMContentLoaded', function(){
  var timer = window.setInterval(
  function() {
	var dat = new Date();
	document.getElementById('result').textContent = dat.toLocaleTimeString();
  },5000);
  document.getElementById('btn').addEventListener('click', function() {
	window.clearInterval(timer);
  },false);
},false);

//interval_async.js
function hoge() {
  console.log('text');
  setTimeout(function() {
	console.log('text');
  }, 0);
  console.log('text');
}
hoge();

setTimeout(function() { heavy(); },0);

//href.js
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('isbn').addEventListener('change', function(){
	location.href = 'http://localhost/index.php/' + this.value;
  },false);
},false);

histroy.go(-3);

//history_push.js
var count = 0;
var result = document.getElementById('result');
document.getElementById('btn').addEventListner('click', function() {
  history.pushstate(count, null, '/js/chap07/count/' + count);
});
window.addEventListener('popstate', function(e){
  count = e.state;
  result.textContent = count;
});

//navigatior.js
var agent = window.navigator.userAgent.toLowerCase();
...
var chrome = (agent.indexOf('chrome') > -1) && (agent.indexOf('edge') == -1) &&
console.log('Chrome:' + chrome);

if(window.File){
  ...
} else {
  window.alert('text');
}

//log.js
console.log('text');
console.info('text');
console.warn('text');
console.error('text');

//log_format.js
console.log('text', 'text', 30);
console.log('text', 225);

//log_group.js
console.group('text');
for(var i = 0; i < 3; i++){
  console.group('text' + i);
  for (var j = 0; j < 3; j++) {
    console.log(i, j);
  }
  console.groupEnd();
}
console.groupEnd();

//log_count.js
far(var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++){
  }
}
console.count('LOOP');

//log_trace.js
function call() {
  call2();
}
function call2() {
  call3();
}
function call3() {
  console.trace();
}
call();

//log_timer.js
console.time('MyTimer');
window.alert('text');
console.timeEnd('MyTimer');

//log_assert.js
function circle(radius){
  console.assert(typeof radius === 'number' && radius > 0,
    'text');
  return radius * radius * Math.PI;
}
console.log(circle(-5));

console.log(window);
console.dir(window);

//log_dir.js
document.addEventListener('DOMContentLoaded', function() {
  var d = document.getElementById('main');
  console.log(d);
  console.dir(d);
},false);

//strage.js
var storage.js = localStrage;
strage.setItem('fruit1', 'text');
storage.fruit2 = 'text';
storage['fruit3'] = 'text';
console.log(storage.getItem('fruit1'));
console.log(storage.fruit2);
console.log(storage['fruit3']);

storage.removeItem('fruit1');
delete storage.fruit1;
delete storage['fruit1'];
storage.clear();

//storage_all.js
var storage = localStorage;
for (var i = 0, len = storage.length; i < len; i++){
  var k = storage.key(i);
  var v = storage[k];
  console.log(l + ':' + v);
}

//storage_obj.js
var storage = localStorage;
var apple = { name: 'text', price: 150, made: 'text' };
storage.setItem('apple', JSON.stringify(apple));
var data = JSON.parse(storage.getItem('apple'));
console.log(data.name);

//MyStorage.js
var MyStorage = function(app){
  this.app = app;
  this.storage = localStorage;
  this.data = JSON.parse(this.storage[this.app] || '{}');
};
MyStorage.prototype = {
  getItem: function(key){
	return this.data[key];
  },
  setItem: function(key, value){
	this.data[key] = value;
  },
  save: function() {
	this.storage[this.app] = JSON.stringify(this.data);
  }
};

//storage_cell.js
var storage = new MyStorage('JSSample');
storage.setItem('hoge', 'text');
console.log(storage.getItem('hoge'));
storage.save();

//storage_ev.js
window.addEventlistener('storage', function (e) {
  console.log('text:' + e.key);
  console.log('text:' + e.oldValue);
  console.log('text:' + e.newValue);
  console.log('text:' + e.url);  
},false);

//hello.php
<form method="POST" action="hello.php">
  <label for="name">text:</label>
  <input type="text" name="name" size="15" />
  <input type="submit" name="submit" value="text" />
</form>
<?php
if($_REQUEST['submit'] !== null){
  sleep(3);
  print('Hello' . htmlspecialchars($_POST['name'], ENT_QUOTES | ENT_HTML5, 'UTF-8').'text');
}
?>

//hello_ajax.php
<form>
  <label for="name">text:</label>
  <input id="name" type="text" name="name" size="15" />
  <input id="btn" type="button" name="submit" value="text" />
</form>
<div id="result"></div>
//.js
document.addElementListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function(){
	var result = document.getElementById('result');
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
	  if(xhr.readyState === 4){
		result.textContent = xhr.responseText;
	  } else{
		result.textContent = 'text';
	  }
	};
	xhr.open('GET', 'hello_ajax.php?name=' +
	  encodeURIComponent(document.getElementById('name').value), true);
	xhr.send(null);
  },false);
},false);
//.php
sleep(3);
print('Hello'.$_REQUEST['name'].'World!');

//hello_ajax.js
xhr.addEventListener('loadstart', function() {
  result.textContent = 'text...';
},false);
xhr.addEventlistener('load', function() {
  result.textContent = xhr.responseText;
},false);
xhr.addEventlistener('error', function() {
  result.textContent = 'text';
},false);

xhr.open('GET', 'hello_ajax.php?name=' +
  encodeURIComponent(document.getElementById('name').value), true);
xhr.send(null);

xhr.open('POST', 'hello_ajax.php', true);
xhr.setRequestHeader('content-type',
  application/x-www-form-urlencoded;charset=UTF-8);
xhr.send('name=' +
  encodeURIComponent(document.getElementById('name').value));
  
{
  "isbn": "text",
  "title": "text",
  "publish": "text",
  "price": 2680
}

//bm.php
<?php
mb_http_output('UTF-8');
mb_internal_encoding('UTF-8');
header('Content-Type: application/json;charset=UTF-8');
$url = 'http://b.hatena.jp/entry/jsonlite/?url='.$_GET['url'];
print(file_get_contents($url, false, stream_content_create(['http' => ['header' => 'User-Agent: MySample']])));

{
  "count":157,
  "bookmarks";
  [
  {
	"timestamp":"2016/06/19 15:41:37",
	"comment":""
	"user":"risadon",
	"tags":["server","Javascript"]
  },
  ...
  ]
}

//bm.js
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('btn').addEventListener('click', function(){
	var result = document.getElementById('result');
	var xhr = new XMLHttprequest();
	xhr.onreadyState = function() {
	  if(xhr.readyState === 4){
		var data = JSON.parse(xhr.responseText);
		if(data = JSON.parse(xhr.responseText);
		if(data === null){
		  result.textContent = 'text';
		}else{
		  var bms = data.bookmarks;
		  var ul = document.createElement('ul');
		  for (var i = 0; i < bms.length; i++){
			var li = document.createElement('li');
			var author = document.createElement('a');
			author.href = 'http://localhost/' + bms[i].user
			var text = document.createTextNode(
			  bms[i].user + ' ' + bms[i].comment);
			author.appendChild(text);
			li.appendChild(author);
			ul.appendChild(li);
		  }
		  result.replaceChild(ul, result.firstChild);
		}
	  } else {
	    result.textContent = 'text';
	  }
	};
	xhr.open('GET', 'bm.php?url=' +
	  encodeURIComponent(document.getElementById('url').value), true);
	xhr.send(null);
  },false);
},false);

//jsonp.js
document.getElementById('btn').addEventListener('click', function() {
  var url = 'http://localhost/books/' + encodeURIComponent(document.getElementById('url').value);
  var src = document.createElement('script');
  src.src = url;
  document.getElementsByIdTagName('body').item(0).appendChild(src);
},false);
function show(data){
  if(data == null){
	result.textContent = 'text';
  }
}

//cross_main.js
document.addEventLidtener('DOMContentLoaded', function() {
  var target = 'http://localhost/';
  document.getElementById('btn').addEventListener('click', function(){
	document.getElementById('frame').contentWindow.postMessage(
	  document.getElementById('message').value, target);
  },false);
  ...
},false);

//cross_other.js
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('message', function(e){
	var origin = 'http//localhost';
	if (e.origin !== origin) { return; }
	document.getElementById('result').textContent = e.data;
  },false);
},false);

//cross_other.js
document.addEventListener('DOMContentLoaded', function(){
  window.addEventListenr('message', function(e){
	...
	var current = new Date();
	e.source.postMessage(current, origin);
  },false);
},false);

//cross_main.js
document.addEventListner('DOMContentLoaded', function() {
  ...
  window.addEventListener('message', function(e){
    if(e.origin !== target){ return; }
    console.log(e.data);
  },false);
},false);

//promise.js
function asyncProcess(value){
  return new Promise((redolve, reject) => {
	setTimeout(() => {
	  if(value){
		resolve('text: $(value)');
	  } else {
		reject('text');
	  }
	},500);
  });
}
asyncxProcess('text').then(
  response => {
	console.log(response);
  },
  error => {
	console.log('text: $(error)');
  }
);

//promise2.js
asyncProcess('text')
.then(
  response => {
	console.log(response);
	return asyncProcess('text');
  }
)
.then(
  respose => (
    console.log(response);
  ),
  error => {
	console.log('text: $(error)');
  }
);

//promise_all.js
Promise.all([
  asyncProcess('text'),
  asyncProcess('text'),
  asyncProcess('text')
]).then(
  response => {
	console.log(response);
  },
  error => {
	console.log('text: $(error)');
  }
);

//promise_race.js
Promise.race([
  asyncProcess('text'),
  asyncProcess('text'),
  asyncProcess('text')
]).then(
  respose => {
	console.log(response);
  },
  error => {
	console.log('text: $(error)');
  }
);

//worker.js
self.addEventListener('message', function(e){
  var count = 0;
  for (var i = 1, len = e.data.target; i < len; i++){
	if(i % e.data.x === 0){ count++; }
  }
  postMessage(count);
});

//worker_client.js
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function(){
	var worker = new Worker('scripts/worker.js');
    worker.postMessage({
	  'target': document.getElementById('target').value,
	  'x': document.getElementById('x').value
    });
    document.getElementById('result').textContent ='text...';
    worker.addEventListener('message', function(e){
	  document.getElementById('result').textContent = e.data;
    },false);
    worker.adEventListener('error', function(e){
	  document.getElementById('result').textcontent = e.message;
    },false);
  },false);
},false);

worker.teminate();
self.close();
