// 要素準備

var floater = document.getElementById('floater');
var counter = document.getElementById('counter');

// ドラッグ中かを記憶するフラグ

var whileDrag = false;

// クリックされたらカウント増加

counter.addEventListener('click', function() {
  var current = parseInt(counter.textContent, 10); // 中の数字
  counter.textContent = current + 1; // +1 して突っ込む
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
  // floaterは絶対配置。left, topを更新してつまんだ位置へ移動。
  floater.style.left = (x - 30) + 'px';
  floater.style.top = (y - 30) + 'px';
});

// mouseupでドラッグ完了

floater.addEventListener('mouseup', function() {
  whileDrag = false;
});

