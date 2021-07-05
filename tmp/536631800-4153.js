var v0 = 1000;
var v1 = new Array(v0);
const v2 = "el";
(v1.__proto__) = [];
function v3(){
if((v1.length) !== ((v2.length) / (2))){
return true;
}
for(let v3 = 0;(v3) < ((v0) / (2));v3++){
if((v1[v3]) !== (v2[(v3) * (2)])){
return true;
}
}
}
(v1[v0]) = v0;
for(var v4 = 0;(v4) < (v0);v4++){
(v1[v4]) = ('') + (v4);
}
function v5(){
let v1 = new RegExp(v3, 'g');
let v4;
while(((v4) = v1.exec(v2)) !== (null)){
(v6) = v4[0];
}
}
