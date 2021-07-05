// GenBlkBrick
for(var v0 = 0;(v0) < (5);v0++){
// GenBlkBrick
for(var v1 = 0;(v1) < (5);v1++){
// GenBlkBrick
for(var v2 = 0;(v2) < (5);v2++){
function v3(){
if((v1.length) !== ((v2.length) / (2))){
return true;
}
for(let v3 = 0;(v3) < ((v2) / (2));v3++){
if((v1[v3]) !== (v2[(v3) * (2)])){
return true;
}
}
}
}
}
// GenBlkBrick
for(var v4 = 0;(v4) < (v2);v4++){
(v2) += v0;
var v5 = new Array(v0);
}
}
(v0) += v2;
var v6 = v3(v1);
function v7(v1){
let v2 = 0;
for(let v3 = 0;(v3) < (v1);v3++){
(v2) = v5.reduce(v3);
}
return v2;
}
let v8 = new Array(v2);
function v9(v1 = (2) * (v4)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>({})));
}
function v10(){
v3(v8[0]);
v3(v8[1]);
}
var v11 = v10(({empty : ({}), array_5 : [], properties_5 : v6, properties_10 : ({a : 1, b : 2, c : 3, d : 4, e : 5, f : 6, g : 7, h : 8, i : 9, j : 10}), properties_dict : v7(v6)}));
