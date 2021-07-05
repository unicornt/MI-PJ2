// GenBlkBrick
for(var v0 = 0;(v0) < (5);v0++){
function v1(v1, v2, v3, v4){
var v5 = v3;
var v6 = ((v2) + (" ")) + (v4);
var v7 = v1(v5);
return new v8(v6, false, false, 0, v7);
}
}
function v2(){
if((v1.length) !== ((v2.length) / (2))){
return true;
}
for(let v3 = 0;(v3) < ((v0) / (2));v3++){
if((v1[v3]) !== (v2[(v3) * (2)])){
return true;
}
}
}
const v3 = 1024;
function v4(v1){
return (()=>{
for(var v2 = 0;(v2) < (v1.length);v2++){
v1[v2]();
}
});
}
(v0) += v3;
// GenBlkBrick
for(var v5 = 0;(v5) < (5);v5++){
function v6(){
const v1 = ({1 : "foo"});
for(var v2 = 0;(v2) < (1000);++v2){
const v3 = v1["1"];
}
}
}
// GenBlkBrick
for(var v7 = 0;(v7) < (5);v7++){
function v8(){
Number(0).toString(16);
Number(- 12).toString(16);
Number(13).toString(16);
Number(123456789).toString(16);
Number(1234567.89).toString(16);
Number(- 123456789).toString(16);
Number(- 1234567.89).toString(16);
}
var v9 = new Array(v7);
}
if((v3) === (undefined)){
(v3) = 0;
}
