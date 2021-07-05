(v0) = 0x1234;
// GenBlkBrick
for(var v1 = 1;(v1) < (600);v1++){
var v2 = ({values : [], expected : ({Int8 : [], Uint8 : [], Uint8Clamped : [], Int16 : [], Uint16 : [], Int32 : [], Uint32 : [], Float32 : [], Float64 : []})});
function v3(){
}
}
function v4(v1){
try{
Reflect.construct((function (){
}), [], v1);
}catch(v3){
return false;
}
return true;
}
switch(v0){
}
// GenBlkBrick
for(var v5 = 1;(v5) < (600);v5++){
function v6(v1){
var v2 = "(?:[A-Za-z_]|\\.(?!\\.?(?:/|$)))[A-Za-z.\\-_]{0,13}";
var v3 = (((v2) + ("(?:/")) + (v2)) + (")*");
var v4 = "(?:Etc/)?GMT[+-]\\d{1,2}";
var v5 = "SystemV/[A-Z]{3}\\d{1,2}(?:[A-Z]{3})?";
var v6 = (((v4) + ("|")) + (v5)) + ("|CST6CDT|EST5EDT|MST7MDT|PST8PDT|NZ");
var v7 = new RegExp((((("^(?:") + (v3)) + ("|")) + (v6)) + (")$"));
if((typeof v1) !== ("string")){
return false;
}
if((v1) === ("UTC")){
return true;
}
if(((v1) === ("Etc/UTC")) || ((v1) === ("Etc/GMT"))){
return false;
}
return v7.test(v1);
}
// GenBlkBrick
for(let v0 = 0;(v0) < (100);v0++){
// GenBlkBrick
for(var v7 = 1;(v7) < (600);v7++){
function v8(){
if((arguments.length) != (v7)){
(v3) = arguments;
}
}
}
function v9(v1){
const v2 = v1.loneCodePoints;
const v3 = v1.ranges;
const v4 = 10000;
let v5 = Reflect.apply(String.fromCodePoint, null, v2);
for(let v8 = 0;(v8) < (v3.length);v8++){
const v9 = v3[v8];
const v10 = v9[0];
const v11 = v9[1];
const v12 = [];
for(let v13 = 0, v14 = v10;(v14) <= (v11);v14++){
(v12[v13++]) = v14;
if((v13) === (v4)){
(v5) += Reflect.apply(String.fromCodePoint, null, v12);
(v12.length) = (v13) = 0;
}
}
(v5) += Reflect.apply(String.fromCodePoint, null, v12);
}
return v5;
}
}
}
try{
v4(undefined, - 0, ({}));
}catch(v2){
}
// GenBlkBrick
for(var v10 = 0;(v10) < (16);v10++){
// GenBlkBrick
for(var v11 = 1;(v11) < (600);v11++){
var v12 = new Uint32Array(100);
}
}
function v13(v1){
v6(v1);
v9(0, v1);
v3(v1);
v1(({}));
v1([]);
}
