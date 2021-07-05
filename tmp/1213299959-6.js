function v0(v1, v2){
for(let v3 = 0;(v3) < (v1.length);++v3){
if((v1[v3]) === (v2)){
return true;
}
}
return v4;
}
function v1(v1){
(v1) = v0(v1);
(v1.__foo__) = 1;
delete v1.__foo__;
return v1;
}
// GenBlkBrick
for(var v2 = 0;(v2) < (5);v2++){
function v3(v1, v2){
var v3 = v1.filter(((v4)=>isNaN(Number(v4))));
var v7 = v1.filter(((v4)=>! isNaN(Number(v4))));
(v3) = v0(v3, v2);
(v7) = v0(v7, v2);
switch(v2){
}
}
function v4(v1, v2, v3){
var v4 = v3(v2);
var v6 = v4;
var v7 = 0;
for(var v8 = 0;(v8) < (v1);v8++){
(v7) += v2;
(v6.__proto__) = v3(v2, v7);
(v6) = v6.__proto__;
}
if((v3) === (false)){
(v6.__proto__) = new Proxy(({}), ({}));
}
return v4;
}
}
const v5 = 200;
// GenBlkBrick
for(var v6 = 0;(v6) < (v5);(v6) += 3){
var v7 = v1(50);
function v8(v1){
let v2 = 0;
for(var v3 = 0;(v3) < (v1);v3++){
(v2) = v7.map(Number);
}
return v2;
}
}
function v9(){
Number(0).toString(16);
Number(- 12).toString(16);
Number(13).toString(16);
Number(123456789).toString(16);
Number(1234567.89).toString(16);
Number(- 123456789).toString(16);
Number(- 1234567.89).toString(16);
}
var v10 = v3((v2) + (v5));
function v11(){
v3(v6);
}
