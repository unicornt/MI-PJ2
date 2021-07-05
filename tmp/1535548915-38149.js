(v0) = new Array(1, 2, 3);
(v0[1000]) = 321321;
(v0.length) = 0x100000;
(v0.length) = 0xfffffff0;
var v1 = ({toString : (function (){
for(var v1 = 600;(v1) < (1000);v1++){
(v0[v1]) = 1337;
}
})});
function v2(){
(v0[0]) = v1;
Array.prototype.sort.call(v0);
}
v2(v1, ({}));
v2(v1, (function (){
}), ({}));
