// GenBlkBrick
for(var v0 = 0;(v0) < (5);v0++){
var v1 = new Array(v0);
function v2(v1){
let v2 = 0;
for(var v3 = 0;(v3) < (v1);v3++){
(v2) = v1.map(Number);
}
return v2;
}
}
function v3(v1){
let v2 = 0;
for(var v3 = 0;(v3) < (v1);v3++){
(v2) = v1.map(Number);
}
return v2;
}
let v4 = "[\\ud800-\\udbff][\\udc00-\\udfff]";
function v5(v1 = (2) * (v0)){
v3(v1);
v2();
}
function v6(){
v3(v1[0]);
v3(v1[1]);
}
function v7(){
v2(...v1);
}
[].forEach(((v0)=>{
[].forEach(((v1)=>{
var v2 = (v0) ? ("") : ("-with-slow-proto");
var v3 = `${v1}-obj${v2}`;
var v4 = [];
[].forEach(((v5)=>{
(v6) = v2(5, (v5) * (2), v0, v7);
if((v1) == (v4)){
(v6) = v6(v6);
}
v4.push(v6);
}));
v1.push(({v3, v4}));
}));
}));
// GenBlkBrick
for(var v8 = 0;(v8) < (5);v8++){
var v9 = new Array(v8);
function v10(v1){
let v2 = 0;
for(const v3 of v9){
(v2) += v1(v3);
}
return v2;
}
}
