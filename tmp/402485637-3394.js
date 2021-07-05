// GenBlkBrick
for(var v0 = 0;(v0) < (5);v0++){
// GenBlkBrick
for(var v1 = 0;(v1) < (5);v1++){
let v2 = "<\!--";
// GenBlkBrick
for(var v3 = 0;(v3) < (5);v3++){
function v4(){
if((v1.length) !== ((v2.length) / (2))){
return true;
}
for(let v3 = 0;(v3) < ((v3) / (2));v3++){
if((v1[v3]) !== (v2[(v3) * (2)])){
return true;
}
}
}
}
}
}
function v5(){
v4(1e4);
}
function v6(v1){
(v1.foo) = 0;
(v1.bar) = 0;
delete v1.foo;
delete v1.bar;
(v1[1e9]) = 0;
return v1;
}
function v7(v1 = (2) * (v1)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>v6));
}
function v8(v1 = (2) * (v1)){
v7(v1);
v5();
}
function v9(){
v8(v0);
}
function v10(v1 = (2) * (v0)){
v5(v1);
v8();
}
function v11(v1){
return (()=>{
const v2 = Array.from(({length : v1})).map(((v5, v6)=>((v1) === (BigUint64Array)) ? (BigInt(v6)) : (v6)));
(v9) = new v1(v2);
});
}
