function v0(){
var v1 = [];
var v2 = [];
for(v3 in v2){
var v4 = new Number(v2[v3]);
if((v4) < (0)){
(v4) = (v4) + (0x100000000);
}
v1.push(v4.toString(16));
}
}
let v1 = null;
let v2 = ({a : 1});
// GenBlkBrick
for(var v3 = 1;(v3) < (600);v3++){
let v4 = (v3) - (2);
var v5 = 1;
}
v0(v2, (function (){
}), ({}));
{
(v2[v3]) = ({a : v3});
}
function v6(){
for(let v1 = 0;(v1) < (2000);v1++){
let v2 = ({a : 1, b : 2});
v0(v2, (function (){
}), ({}));
}
let v2 = ({a : 1, b : 2});
let v4 = (function (){
});
(v4.prototype) = v2;
v0(v2, v4, 0x1234);
print(v2.a);
}
function v7(v1){
function v2(v3){
v1(TypeError, v3);
v6(v3, "number", (function (v3){
v1(TypeError, v3);
}));
}
v2(Symbol("1"));
if((typeof BigInt) !== ("undefined")){
v2(BigInt(0));
}
v0("number", v1);
}
