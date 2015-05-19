// 要素準備

var floater = document.getElementById('floater');
var counter = document.getElementById('counter');

// ドラッグ中かを記憶するフラグ

var whileDrag = false;

// カウンター増加を止めるためのフラグ

var shouldStopCounter = false;

// クリックされたらカウント増加

counter.addEventListener('click', function() {
  var current = parseInt(counter.innerHTML, 10);
  counter.innerHTML = current + 1;
});

// mousedownでドラッグ開始

floater.addEventListener('mousedown', function() {
  whileDrag = true;
});

// mousemoveでマウス位置にfloaterを追従させる

document.addEventListener('mousemove', function(e) {
  if(!whileDrag) { return; }
  var x = e.pageX;
  var y = e.pageY;
  floater.style.left = (x - 30) + 'px';
  floater.style.top = (y - 30) + 'px';
  // ドラッグが始まったということは
  // 次のカウンター増加を実行しないというフラグを立てる
  shouldStopCounter = true;
});

// mouseupでドラッグ完了

floater.addEventListener('mouseup', function(e) {
  whileDrag = false;
});

// floaterのclickを監視

floater.addEventListener('click', function(e) {
  // カウンター増加を実行しないというフラグが立てられていたら
  // stopPropgation
  if(shouldStopCounter) { e.stopPropagation(); }
  // もうこれでドラッグは終わりなので
  // フラグをリセット
  shouldStopCounter = false;
}, true);
