var v0 = new Array(0x11111111, 0x22222222, 0x33333333, 0x44444444, 0x12121212, 0x23232323, 0x12345670, 0x7777);
(v0) = v0.join(', ');
try{
delete v0.a;
}catch(v1){
}
delete v0.a;
function v2(v1, v2, v3){
try{
for(var v4 in v0){
try{
v2(undefined, - 0, ({}));
}catch(v7){
}
try{
new Uint32Array(41902);
}catch(v7){
}
}
}catch(v7){
}
try{
delete v4.a;
}catch(v7){
}
}
function v3(){
for(let v1 = 0;(v1) < (2000);v1++){
let v2 = ({a : 1, b : 2});
v2(v2, ({}), ({}));
}
let v2 = ({a : 1, b : 2});
v2(v2, v2, 0x1234);
print(v2.a);
}
function v4(v1){
function v2(v3){
v1(v3);
v2(v3, "number", v1);
}
v3(BigInt(1), v1);
v2(true);
v1([]);
}
function v5(v1, v2, v3){
(v1.b) = 1;
let v4 = ({__proto__ : v2});
(v1.a) = v3;
}
