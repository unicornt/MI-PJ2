function v0(v1, v2){
return ('t') == (v1.charAt(v2));
}
function v1(){
v0(1e1);
v0(1e2);
v0(1e3);
}
let v0;
function v2(){
v1(1e1);
v1(1e2);
}
function v3(){
v2(1e1);
v2(1e2);
v2(1e3);
}
const v4 = [];
function v5(v1){
let v2 = 0;
for(const v3 of v4){
(v2) += v1(v3);
}
return v2;
}
const v6 = new Array(v4.length);
