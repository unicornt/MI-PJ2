function v0(v1){
var v2 = new Array(v1);
for(var v4 = 0;(v4) < (v1);v4++){
(v2[v4]) = v4;
}
return v2;
}
// GenBlkBrick
for(var v1 = 0;(v1) < (5);v1++){
(v2) = ((v1)=>{
return ("key") + (v1);
});
}
function v3(v1 = (2) * (v1)){
v0(v1);
v2();
}
function v4(v1, v2, v3, v4 = v0){
var v6 = v4(v2);
var v7 = v6;
var v8 = 0;
for(var v9 = 0;(v9) < (v1);v9++){
(v8) += v2;
(v7.__proto__) = v4(v2, v8);
(v7) = v7.__proto__;
}
if((v3) === (false)){
(v7.__proto__) = new Proxy(({}), ({}));
}
return v6;
}
var v5 = ({null : null, empty : ({}), 'Object.prototype' : Object.prototype, 'Array.prototype' : Array.prototype});
var v6 = v3(({empty : ({}), array_5 : [], properties_5 : v5, properties_10 : ({a : 1, b : 2, c : 3, d : 4, e : 5, f : 6, g : 7, h : 8, i : 9, j : 10}), properties_dict : v0(v5)}));
(v5.__proto__) = v0(10, 0);
let v0;
