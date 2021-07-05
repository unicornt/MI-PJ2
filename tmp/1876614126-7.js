let v0 = "U[+][0-9A-F?]{1,6}(?:-[0-9A-F]{1,6})?";
var v0;
function v1(v1){
return v1.startsWith(v0);
}
function v2(v1){
(v1.foo) = 0;
(v1.bar) = 0;
delete v1.foo;
delete v1.bar;
(v1[1e9]) = 0;
return v1;
}
function v3(){
var v1;
var v2 = 10240;
var v3 = ({});
for(var v4 = 0;(v4) < (v2);v4++){
(v1) = v3[("test") + (v2)];
}
}
function v4(v1){
return (v1[0]) === (v0);
}
function v5(){
let v1 = new RegExp(v0, "gi");
"abcſABCβκς".match(v1);
"color:".match(v1);
}
function v6(v1, v2, v3, v4 = v1){
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
