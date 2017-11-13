/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/RuNWg/
 * リスト5: 独自クラスのクラス判別を行う
 */

function MyClass(name){this.name = name;}

// extend
function Human(){}
Human.prototype = new MyClass();
var human = new Human("test");
assert("typeof human    === 'object'", typeof human, 'object');
log( Object.prototype.toString.call(human) );
assert("human instanceof MyClass === true", human instanceof MyClass, true);
assert("MyClass.prototype.isPrototypeOf(human) === true",MyClass.prototype.isPrototypeOf(human),true);

