/**
 * author: JSサポーターズ
 * リスト2: Webストレージからデータを受け取る
 */

// プロパティへのアクセスと同じように利用可能
alert(localStorage.foo);              // => 'bar'

// getItemメソッドも利用可能
alert(localStorage.getItem('foo'));   // => 'bar'

// セッションストレージも同じ方法で利用可能
alert(sessionStorage.foo);            // => 'bar'
alert(sessionStorage.getItem('foo')); // => 'bar'

