function v0(){
v1("test", "http://127.0.0.1", []);
return 7;
}
(v0.notCollected) = Symbol('Object was not collected');
function v1(){
let v1 = [];
for(let v2 = 0;(v2) < (10000);v2++){
v0(v1, ({}));
}
v0(v1, v1);
print(v1);
}
// GenBlkBrick
for(let v0 = 0;(v0) < (100);v0++){
{
v0();
}
}
function v2(v1){
v1(v1);
v0(1, v1);
v1([]);
v1([]);
}
function v3(v1){
function v2(v3){
v1(v3);
v0(v3, "number", v1);
}
v1(BigInt(1), v1);
v2(true);
v1([]);
}
function v4(v1){
function v2(v3){
v1(TypeError, v3);
v0(v3, "number", (function (v3){
v1(TypeError, v3);
}));
}
v2(Symbol("1"));
if((typeof BigInt) !== ("undefined")){
v2(BigInt(0));
}
v3("number", v1);
}
function v5(v1){
function v2(v3){
v1(TypeError, v3);
v0(v3, "number", (function (v3){
v1(TypeError, v3);
}));
}
v2(Symbol("1"));
if((typeof BigInt) !== ("undefined")){
v2(BigInt(0));
}
v1("number", v1);
}
