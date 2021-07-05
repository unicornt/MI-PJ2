// GenBlkBrick
for(var v0 = 0;(v0) < (5);v0++){
function v1(v1 = (2) * (v0)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>({})));
}
}
function v2(v1 = (2) * (v0)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>v6));
}
// GenBlkBrick
for(var v3 = 0;(v3) < (5);v3++){
// GenBlkBrick
for(var v4 = 0;(v4) < (5);v4++){
function v5(v1 = (2) * (v4)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>(v6) + (0.234)));
}
}
}
// GenBlkBrick
for(var v6 = 0;(v6) < (v0);(v6) += 3){
function v7(v1, v2){
return (v1.indexOf(v2)) !== (- 1);
}
}
const v8 = v7(v3);
function v9(v1 = (2) * (v3)){
v2(v1);
v5();
}
function v10(v1){
return (()=>{
const v2 = Array.from(({length : v4})).map(((v5, v6)=>((v1) === (BigUint64Array)) ? (BigInt(v6)) : (v6)));
(v9) = new v1(v2);
});
}
function v11(v1){
let v2 = 0;
for(let v3 = 0;(v3) < (v1);v3++){
(v2) = v8.reduce(v1);
}
return v2;
}
