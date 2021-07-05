function v0(v1){
return [].join("");
}
function v1(){
v0.apply(this, []);
}
function v2(){
var v1;
var v2 = 10240;
var v3 = ({});
for(var v4 = 0;(v4) < (v2);v4++){
(v1) = v3[("test") + (v2)];
}
}
function v3(){
v1.apply(this, []);
}
function v4(v1){
return Object.create(v1.__proto__, Object.getOwnPropertyDescriptors(v1));
}
const v5 = 1e3;
function v6(v1){
return (()=>{
const v2 = Array.from(({length : v5})).map(((v5, v6)=>((v1) === (BigUint64Array)) ? (BigInt(v6)) : (v6)));
(v9) = new v1(v2);
});
}
function v7(v1 = (2) * (v5)){
v0(v1);
v2();
}
