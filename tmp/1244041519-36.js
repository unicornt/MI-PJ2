// GenBlkBrick
for(var v0 = 0;(v0) < (5);v0++){
function v1(v1 = (2) * (v0)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>(v6) + (0.234)));
}
}
const v2 = "INTERN-prop";
// GenBlkBrick
for(var v3 = 0;(v3) < (5);v3++){
function v4(v1 = (2) * (v3)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>({})));
}
var v5 = ({"Object.keys()" : v4((()=>{
return Object.keys(v3);
})), "for-in" : v4((()=>{
var v4 = 0;
var v5;
for(var v6 in v3){
v4++;
(v5) = v3[v6];
}
;
return [];
})), "for-in hasOwnProperty()" : v4((()=>{
var v4 = 0;
var v5;
for(var v6 in v3){
if(! v3.hasOwnProperty(v6)){
continue ;
}
v4++;
(v5) = v3[v6];
}
;
return [];
})), "for (i < Object.keys().length)" : v4((()=>{
var v4 = 0;
var v5;
var v7 = Object.keys(v3);
for(var v8 = 0;(v8) < (v7.length);v8++){
v4++;
(v5) = v3[v7[v8]];
}
;
return [];
})), "Object.keys().forEach()" : v4((()=>{
var v4 = 0;
var v5;
Object.keys(v3).forEach(((v9, v10, v11)=>{
v4++;
(v5) = v9;
}));
return [];
}))});
}
var v6 = v4(({empty : ({}), array_5 : [], properties_5 : v5, properties_10 : ({a : 1, b : 2, c : 3, d : 4, e : 5, f : 6, g : 7, h : 8, i : 9, j : 10}), properties_dict : v1(v5)}));
// GenBlkBrick
for(var v7 = 0;(v7) < (v0);v7++){
if((v0) === (false)){
(v5.__proto__) = new Proxy(({}), ({}));
}
{
(v5.__proto__.__proto__.__proto__[("proto") + (v0)]) = true;
}
}
const v8 = v1(v3);
(v5.__proto__.__proto__.__proto__[("proto") + (v0)]) = true;
(v5[v2]) = "value";
