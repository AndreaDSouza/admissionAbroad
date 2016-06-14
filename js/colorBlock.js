window.onresize = function()
{
var target = document.getElementsByClassName('darkest')[0];

var imgHeight = document.getElementsByTagName('img')[0].clientHeight;
var bodyHeight = document.getElementsByTagName('body')[0].clientHeight;
var diff = bodyHeight-imgHeight;

console.log(imgHeight,bodyHeight,diff);

target.style.marginTop = 300 - (diff) + "px";

console.log( diff );
}
