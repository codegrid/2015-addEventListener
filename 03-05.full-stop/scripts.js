var html = document.getElementsByTagName('html')[0];
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');

window.addEventListener('click', function() {
  alert('capture: Hello! I am window.');
}, true);
document.addEventListener('click', function() {
  alert('capture: Hello! I am document.');
}, true);
html.addEventListener('click', function() {
  alert('capture: Hello! I am html.');
}, true);
document.body.addEventListener('click', function() {
  alert('capture: Hello! I am body.');
}, true);
div1.addEventListener('click', function(e) {
  e.stopPropagation();
  alert('capture: Hello! I am #div1.');
}, true);
div2.addEventListener('click', function() {
  alert('capture: Hello! I am #div2.');
}, true);
div3.addEventListener('click', function() {
  alert('target: Hello! I am #div3.');
});
div2.addEventListener('click', function() {
  alert('bubbling: Hello! I am #div2.');
}, false);
div1.addEventListener('click', function() {
  alert('bubbling: Hello! I am #div1.');
}, false);
document.body.addEventListener('click', function() {
  alert('bubbling: Hello! I am body.');
}, false);
html.addEventListener('click', function() {
  alert('bubbling: Hello! I am html.');
}, false);
document.addEventListener('click', function() {
  alert('bubbling: Hello! I am document.');
}, false);
window.addEventListener('click', function() {
  alert('bubbling: Hello! I am window.');
}, false);
