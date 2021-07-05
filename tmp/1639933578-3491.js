// GenBlkBrick
for(var v0 = 0;(v0) < (5);v0++){
function v1(v1 = (2) * (v0)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>v6));
}
}
'use strict';
var v2 = new Array(v0);
function v3(){
v1(...v2);
}
let v4 = "[-+]?(?:[0-9]+(?:[.][0-9]+)?|[.][0-9]+)";
function v5(v1){
return (v1[(v1.length) - (1)]) === (v4);
}
// GenBlkBrick
for(var v6 = 0;(v6) < (5);v6++){
var v7 = v3(50);
}
[].forEach(((v0)=>{
[].forEach(((v1)=>{
var v2 = (v0) ? ("") : ("-with-slow-proto");
var v3 = `${v1}-obj${v2}`;
var v4 = [];
[].forEach(((v5)=>{
(v6) = v5(5, (v5) * (2), v0, v1);
if((v1) == (v4)){
(v6) = v3(v6);
}
v4.push(v6);
}));
v2.push(({v3, v4}));
}));
}));
