function v0(v1){
let v2 = new Array(v1);
for(let v4 = 0;(v4) < (v1);v4++){
(v2[v4]) = ('') + (v4);
}
return Object.freeze(v2);
}
// GenBlkBrick
for(var v1 = 0;(v1) < (5);v1++){
// GenBlkBrick
for(var v2 = 0;(v2) < (5);v2++){
function v3(v1 = (2) * (v2)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>('s') + (v6)));
}
function v4(v1, v2){
return v3(v1, v2, ((v4)=>{
if(((v4) % (2)) == (0)){
return (v4) / (2);
}
return ("key") + (((v4) - (1)) / (2));
}));
}
}
}
(v2) += v1;
// GenBlkBrick
for(var v5 = 0;(v5) < (v1);(v5) += 3){
(v1) += v5;
function v6(){
Number(0).toString(16);
Number(- 12).toString(16);
Number(13).toString(16);
Number(123456789).toString(16);
Number(1234567.89).toString(16);
Number(- 123456789).toString(16);
Number(- 1234567.89).toString(16);
}
}
var v7 = v6(v2);
const v8 = (v5) / (4);
(v1) += v8;
var v9 = v0((v2) + (v1));
