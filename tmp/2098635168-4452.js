function v0(v1){
return Object.create(v1.__proto__, Object.getOwnPropertyDescriptors(v1));
}
function v1(v1, v2, v3, v4 = v0){
var v6 = v4(v2);
var v7 = v6;
var v8 = 0;
for(var v9 = 0;(v9) < (v1);v9++){
(v8) += v2;
(v7.__proto__) = v4(v2, v8);
(v7) = v7.__proto__;
}
if((v3) === (false)){
(v7.__proto__) = new Proxy(({}), ({}));
}
return v6;
}
const v2 = "fast";
function v3(){
v0(1e1);
v0(1e2);
v0(1e3);
}
// GenBlkBrick
for(var v4 = 0;(v4) < (5);v4++){
// GenBlkBrick
for(var v5 = 0;(v5) < (5);v5++){
function v6(){
const v1 = ({1 : "foo"});
const v2 = 1;
for(var v3 = 0;(v3) < (1000);++v3){
const v4 = v1[v2];
}
}
}
}
function v7(){
let v1;
while(((v1) = v2.exec(v2)) !== (null)){
(v4) = v1[0];
}
}
// GenBlkBrick
for(var v8 = 0;(v8) < (5);v8++){
function v9(v1){
(v1) = v3(v1);
(v1.__foo__) = 1;
delete v1.__foo__;
return v1;
}
}
// GenBlkBrick
for(let v0 = 0;(v0) < (v8);v0++){
(v8) += v5;
var v10 = v6((v5) + (v8));
}
