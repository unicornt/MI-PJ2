let v0 = '[^"\'\\\\/]|/(?![/*])';
// GenBlkBrick
for(var v1 = 0;(v1) < (5);v1++){
function v2(){
if((v1.length) !== ((v2.length) / (2))){
return true;
}
for(let v3 = 0;(v3) < ((v1) / (2));v3++){
if((v1[v3]) !== (v2[(v3) * (2)])){
return true;
}
}
}
// GenBlkBrick
for(var v3 = 0;(v3) < (5);v3++){
const v4 = "NE-INTERN-prop";
// GenBlkBrick
for(var v5 = 0;(v5) < (5);v5++){
function v6(v1 = (2) * (v5)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>('s') + (v6)));
}
var v7 = v6(v5);
}
}
}
var v8 = ({});
// GenBlkBrick
for(let v0 = 0;(v0) < (v5);v0++){
(v5) += v1;
(v1) += v5;
}
var v9 = v6(({empty : ({}), array_5 : [], properties_5 : v7, properties_10 : ({a : 1, b : 2, c : 3, d : 4, e : 5, f : 6, g : 7, h : 8, i : 9, j : 10}), properties_dict : v2(v7)}));
// GenBlkBrick
for(var v10 = 0;(v10) < (5);v10++){
function v11(v1){
return (()=>{
const v2 = Array.from(({length : v3})).map(((v5, v6)=>((v1) === (BigUint64Array)) ? (BigInt(v6)) : (v6)));
(v9) = new v1(v2);
});
}
}
function v12(v1){
return (v1[(v1.length) - (1)]) === (v0);
}
let v13 = "/(?:[*][^*]*[*]+(?:[^/][^*]*[*]+)*/|/[^\\n\\f]*)";
