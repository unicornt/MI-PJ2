function v0(){
Number(0).toString(16);
Number(- 12).toString(16);
Number(13).toString(16);
Number(123456789).toString(16);
Number(1234567.89).toString(16);
Number(- 123456789).toString(16);
Number(- 1234567.89).toString(16);
}
var v1 = v0(5);
for(var v2 = 0;(v2) < (5);v2++){
(v1.__proto__.__proto__.__proto__[("proto") + (v2)]) = true;
}
(v1) = v0(v1);
function v3(v1 = (2) * (v2)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>(v6) + (0.234)));
}
function v4(v1 = (2) * (v2)){
v0(v1);
v3();
}
function v5(v1 = (2) * (v2)){
v4(v1);
v0();
}
var v6 = new Array(v2);
