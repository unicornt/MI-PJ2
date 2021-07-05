function v0(v1){
var v2 = new Array(v1);
for(var v4 = 0;(v4) < (v1);v4++){
(v2[v4]) = ('') + (v4);
}
return Object.freeze(v2);
}
var v1 = v0(5);
(v1.__proto__) = v0(5, 0, false);
var v2 = v1;
(v1) = v0(v1);
(v2) = v0(v2);
const v3 = "NE-INTERN-prop";
(v1.__proto__) = v0(10, 0);
