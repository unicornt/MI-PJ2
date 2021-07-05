function v0(v1){
(v1.foo) = 0;
(v1.bar) = 0;
delete v1.foo;
delete v1.bar;
(v1[1e9]) = 0;
return v1;
}
var v0;
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
function v2(){
v1(1e1);
v1(1e2);
}
const v3 = v1('a'.repeat(100));
var v4 = (("\n// random comment") + (Math.random())) + ("\n");
const v5 = v1(100);
// GenBlkBrick
for(var v6 = 0;(v6) < (5);v6++){
function v7(v1){
return (v1[(v1.length) - (1)]) === (v3);
}
// GenBlkBrick
for(var v8 = 0;(v8) < (5);v8++){
const v9 = (v8) / (4);
}
}
