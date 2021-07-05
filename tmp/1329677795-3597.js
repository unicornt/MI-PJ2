// GenBlkBrick
for(var v0 = 0;(v0) < (5);v0++){
// GenBlkBrick
for(var v1 = 0;(v1) < (5);v1++){
var v2 = new Array(v1);
}
// GenBlkBrick
for(var v3 = 0;(v3) < (v1);(v3) += 3){
(v1) += v3;
}
}
function v4(v1){
let v2 = 0;
for(const v3 of v2){
(v2) += v1(v3);
}
return v2;
}
function v5(v1 = (2) * (v1)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>({})));
}
function v6(){
v5(v0);
}
function v7(v1){
let v2 = 0;
for(let v3 = 0;(v3) < (v1);v3++){
(v2) = v2.reduce(v6);
}
return v2;
}
function v8(v1 = (2) * (v3)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>v6));
}
function v9(){
v4(...v2);
}
function v10(v1){
let v2 = 0;
for(let v3 = 0;(v3) < (v1);v3++){
(v2) = v2.reduce(v9);
}
return v2;
}
