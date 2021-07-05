function v0(v1, ...v2){
let v3 = 0;
for(let v4 = 0;(v4) < (v1.length);++v4){
(v3) += v1[v4].length;
}
return v3;
}
let v0;
function v1(v1){
(v1) = v0(v1);
(v1.__foo__) = 1;
delete v1.__foo__;
return v1;
}
const v2 = v1(200);
// GenBlkBrick
for(var v3 = 0;(v3) < (5);v3++){
function v4(v1){
return Object.create(v1.__proto__, Object.getOwnPropertyDescriptors(v1));
}
}
function v5(){
var v1 = arguments[0];
for(var v3 = 1;(v3) < (arguments.length);++v3){
(v1) += arguments[v3];
}
return v1;
}
function v6(v1 = (2) * (v3)){
v4(v1);
v0();
}
// GenBlkBrick
for(var v7 = 0;(v7) < (5);v7++){
function v8(v1 = (2) * (v7)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>('s') + (v6)));
}
}
