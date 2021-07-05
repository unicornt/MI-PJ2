const v0 = (()=>(v1) = '.');
var v1 = ({"Object.keys()" : v0((()=>{
return Object.keys(v3);
})), "for-in" : v0((()=>{
var v4 = 0;
var v5;
for(var v6 in v3){
v4++;
(v5) = v3[v6];
}
;
return [];
})), "for-in hasOwnProperty()" : v0((()=>{
var v4 = 0;
var v5;
for(var v6 in v3){
if(! v3.hasOwnProperty(v6)){
continue ;
}
v4++;
(v5) = v3[v6];
}
;
return [];
})), "for (i < Object.keys().length)" : v0((()=>{
var v4 = 0;
var v5;
var v7 = Object.keys(v3);
for(var v8 = 0;(v8) < (v7.length);v8++){
v4++;
(v5) = v3[v7[v8]];
}
;
return [];
})), "Object.keys().forEach()" : v0((()=>{
var v4 = 0;
var v5;
Object.keys(v3).forEach(((v9, v10, v11)=>{
v4++;
(v5) = v9;
}));
return [];
}))});
const v2 = v0(100);
(v2.__proto__) = [];
function v3(v1, v2, v3, v4 = v0){
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
function v4(){
v3(v2[0]);
v3(v2[1]);
}
function v5(v1){
let v2 = 0;
for(const v3 of v2){
(v2) += v1(v3);
}
return v2;
}
(v1.__foo__) = 1;
