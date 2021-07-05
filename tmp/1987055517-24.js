let v0 = "U[+][0-9A-F?]{1,6}(?:-[0-9A-F]{1,6})?";
function v1(){
let v1 = new RegExp(v3, 'g');
let v4;
while(((v4) = v1.exec(v0)) !== (null)){
(v6) = v4[0];
}
}
function v2(v1, v2, v3){
var v4 = v1(v2);
var v6 = v4;
var v7 = 0;
for(var v8 = 0;(v8) < (v1);v8++){
(v7) += v2;
(v6.__proto__) = v1(v2, v7);
(v6) = v6.__proto__;
}
if((v3) === (false)){
(v6.__proto__) = new Proxy(({}), ({}));
}
return v4;
}
const v3 = /[Cz]/;
function v4(){
v3.test("βκςΑφabcdeβκEFGαοςερκ");
}
function v5(v1){
return (v1[(v1.length) - (1)]) === (v0);
}
// GenBlkBrick
for(var v6 = 0;(v6) < (5);v6++){
function v7(v1, v2){
var v3 = v1.filter(((v4)=>isNaN(Number(v4))));
var v7 = v1.filter(((v4)=>! isNaN(Number(v4))));
(v3) = v1(v3, v6);
(v7) = v1(v7, v6);
switch(v2){
}
}
}
function v8(v1, v2){
var v3 = v1.filter(((v4)=>isNaN(Number(v4))));
var v7 = v1.filter(((v4)=>! isNaN(Number(v4))));
(v3) = v7(v3, v6);
(v7) = v7(v7, v6);
switch(v2){
}
}
