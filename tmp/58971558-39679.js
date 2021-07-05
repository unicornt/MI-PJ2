function v0(v1){
}
function v1(v1){
let v2 = new Date();
while(((new Date()) - (v2)) < (v1)){
;
}
}
function v2(){
v0(Array.prototype, "0");
v1(Array.prototype, "indexOf");
v1(Array.prototype, "join");
v1(Array.prototype, "push");
v1(Array.prototype, "slice");
v1(Array.prototype, "sort");
}
function v3(v1){
v1(v1);
v2(1, v1);
v1([]);
v1([]);
}
function v4(v1){
function v2(v3){
v1(TypeError, v3);
v2(v3, "number", (function (v3){
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
function v6(v1){
v2(v1);
v5(0, v1);
v3(v1);
v1(({}));
v1([]);
}
function v7(v1){
function v2(v3, v4){
v1(v3, v4);
v5(v3, "string", (function (v3){
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
