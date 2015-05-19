// 要素準備

var floater = document.getElementById('floater');
var counter = document.getElementById('counter');

// ドラッグ中かを記憶するフラグ

var whileDrag = false;

// クリックされたらカウント増加

counter.addEventListener('touchend', function() {
  var current = parseInt(counter.innerHTML, 10);
  counter.innerHTML = current + 1;
});

// touchstartでドラッグ開始

floater.addEventListener('touchstart', function() {
  whileDrag = true;
});

// touchmoveでタッチ位置にfloaterを追従させる

document.addEventListener('touchmove', function(e) {
  if(!whileDrag) { return; }
  var touch = e.changedTouches[0];
  var x = touch.pageX;
  var y = touch.pageY;
  floater.style.left = (x - 30) + 'px';
  floater.style.top = (y - 30) + 'px';
});

// touchendでドラッグ完了

floater.addEventListener('touchend', function(e) {
  whileDrag = false;
});

