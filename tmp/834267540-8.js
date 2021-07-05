function v0(v1, v2){
return (v1.charCodeAt(v2)) === (116);
}
function v1(v1){
(v1) = v0(v1);
(v1.__foo__) = 1;
delete v1.__foo__;
return v1;
}
function v2(v1, v2){
return v1.includes(v2);
}
function v3(v1){
return Object.keys(({[v1] : 0}))[0];
}
function v4(){
v2.apply(this, []);
}
const v5 = [];
function v6(v1){
let v2 = 0;
for(const v3 of v5){
(v2) += v1(v3);
}
return v2;
}
// GenBlkBrick
for(var v7 = 0;(v7) < (5);v7++){
// GenBlkBrick
for(var v8 = 0;(v8) < (5);v8++){
function v9(v1, v2){
return ('t') == (v1.charAt(v2));
}
}
// GenBlkBrick
for(var v10 = 0;(v10) < (5);v10++){
function v11(v1 = (2) * (v10)){
v4(v1);
v6();
}
var v12 = ({"Object.keys()" : v11((()=>{
return Object.keys(v3);
})), "for-in" : v11((()=>{
var v4 = 0;
var v5;
for(var v6 in v3){
v4++;
(v5) = v3[v6];
}
;
return [];
})), "for-in hasOwnProperty()" : v11((()=>{
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
})), "for (i < Object.keys().length)" : v11((()=>{
var v4 = 0;
var v5;
var v7 = Object.keys(v3);
for(var v8 = 0;(v8) < (v7.length);v8++){
v4++;
(v5) = v3[v7[v8]];
}
;
return [];
})), "Object.keys().forEach()" : v11((()=>{
var v4 = 0;
var v5;
Object.keys(v3).forEach(((v9, v10, v11)=>{
v4++;
(v5) = v9;
}));
return [];
}))});
}
}
