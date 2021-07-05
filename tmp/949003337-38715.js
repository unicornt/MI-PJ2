function v0(v1){
let v2 = new Date();
while(((new Date()) - (v2)) < (v1)){
;
}
}
function v1(v1){
function v2(v3, v4){
v1(v3, v4);
v0(v3, "string", (function (v3){
v1(v3, v4);
}));
}
v2(undefined, "undefined");
v2(null, "null");
v2(true, "true");
v2(false, "false");
v2(0, "0");
v2(- 0, "0");
v2(Infinity, "Infinity");
v2(- Infinity, "-Infinity");
v2(123.456, "123.456");
v2(- 123.456, "-123.456");
v2("", "");
v2("foo", "foo");
if((typeof BigInt) !== ("undefined")){
v2(BigInt(0), "0");
}
v1([], "");
v1([], "foo,bar");
v1(({}), "[object Object]");
}
function v2(v1, v2, v3){
(v1.b) = 1;
class v4 extends v2{
}
(v1.a) = v3;
}
function v3(v1){
function v2(v3, v4){
v1(v3, v4);
v1(v3, "string", (function (v3){
v1(v3, v4);
}));
}
v2(undefined, "undefined");
v2(null, "null");
v2(true, "true");
v2(false, "false");
v2(0, "0");
v2(- 0, "0");
v2(Infinity, "Infinity");
v2(- Infinity, "-Infinity");
v2(123.456, "123.456");
v2(- 123.456, "-123.456");
v2("", "");
v2("foo", "foo");
if((typeof BigInt) !== ("undefined")){
v2(BigInt(0), "0");
}
v1([], "");
v1([], "foo,bar");
v1(({}), "[object Object]");
}
// GenBlkBrick
for(var v4 = 0;(v4) < (16);v4++){
var v5 = ({});
{
(v5[v4]) = ({a : v4});
}
}
function v6(v1){
}
var v7 = ({});
(v8) = true;
