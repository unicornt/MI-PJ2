function v0(v1){
var v2 = new Array(v1);
for(var v4 = 0;(v4) < (v1);v4++){
(v2[v4]) = ('') + (v4);
}
return Object.freeze(v2);
}
function v1(){
RegExp("[Cz]", "guiym");
}
function v2(){
v1(1e4);
}
function v3(v1, v2, v3){
return (v1.charCodeAt(v3)) == (v1.charCodeAt(v2));
}
// GenBlkBrick
for(var v4 = 0;(v4) < (5);v4++){
function v5(){
v3(v4);
}
}
function v6(){
if((v1.length) !== ((v2.length) / (2))){
return true;
}
for(let v3 = 0;(v3) < ((v4) / (2));v3++){
if((v1[v3]) !== (v2[(v3) * (2)])){
return true;
}
}
}
function v7(v1, v2){
for(let v3 = 0;(v3) < (v1.length);++v3){
if((v1[v3]) === (v2)){
return true;
}
}
return v4;
}
function v8(v1){
(v1) = v0(v1);
(v1.__foo__) = 1;
delete v1.__foo__;
return v1;
}
